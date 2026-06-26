// Matching Engine — AI Medical Symptom Checker
// Weighted symptom-to-disease matching with emergency detection

window.MatchingEngine = {

  // ==========================================
  // EMERGENCY DETECTION — Check FIRST
  // ==========================================
  checkEmergency(symptomIds) {
    const s = new Set(symptomIds);
    const emergencies = [
      {
        check: () => s.has('chest_pain') && (s.has('shortness_of_breath') || s.has('palpitations')),
        message: "⚠️ EMERGENCY: Your symptoms (chest pain with breathlessness/palpitations) may indicate a HEART ATTACK. Please call 108 (India emergency) or go to the nearest hospital IMMEDIATELY. Do not wait. Chew an aspirin if available and not allergic.",
        messageHi: "⚠️ आपातकाल: आपके लक्षण (सीने में दर्द और सांस फूलना) दिल के दौरे का संकेत हो सकते हैं। कृपया तुरंत 108 पर कॉल करें या नज़दीकी अस्पताल जाएं। इंतज़ार न करें।"
      },
      {
        check: () => s.has('severe_headache') && (s.has('confusion') || s.has('fainting')),
        message: "⚠️ EMERGENCY: Sudden severe headache with confusion/fainting may indicate a STROKE. Call 108 IMMEDIATELY. Note the time symptoms started. Act FAST: Face drooping, Arm weakness, Speech difficulty, Time to call emergency.",
        messageHi: "⚠️ आपातकाल: अचानक तेज़ सिरदर्द और भ्रम/बेहोशी स्ट्रोक का संकेत हो सकता है। तुरंत 108 पर कॉल करें।"
      },
      {
        check: () => s.has('neck_stiffness') && s.has('high_fever') && s.has('light_sensitivity'),
        message: "⚠️ EMERGENCY: Stiff neck + high fever + light sensitivity may indicate MENINGITIS. This is life-threatening. Go to the nearest hospital IMMEDIATELY.",
        messageHi: "⚠️ आपातकाल: गर्दन अकड़न + तेज़ बुखार + रोशनी से तकलीफ़ मेनिनजाइटिस का संकेत हो सकता है। तुरंत अस्पताल जाएं।"
      },
      {
        check: () => s.has('seizures'),
        message: "⚠️ EMERGENCY: Seizures require immediate medical attention. Call 108. Keep the person safe, do not put anything in their mouth. Turn them on their side. Time the seizure.",
        messageHi: "⚠️ आपातकाल: दौरे/मिर्गी में तुरंत चिकित्सा की ज़रूरत है। 108 पर कॉल करें।"
      },
      {
        check: () => s.has('blood_in_stool') || s.has('blood_in_vomit'),
        message: "⚠️ URGENT: Blood in stool or vomit requires immediate medical evaluation. Please visit a hospital within the next few hours. Call 108 if bleeding is heavy.",
        messageHi: "⚠️ अति आवश्यक: मल या उल्टी में खून होने पर तुरंत डॉक्टर दिखाएं। अगर ज़्यादा खून है तो 108 कॉल करें।"
      },
      {
        check: () => s.has('high_fever'),
        message: "⚠️ URGENT: Very high fever (above 103°F/39.4°C) can be dangerous. Please see a doctor within 24 hours. Take Paracetamol and use cool compresses. Stay hydrated.",
        messageHi: "⚠️ अति आवश्यक: बहुत तेज़ बुखार (103°F से ऊपर) खतरनाक हो सकता है। 24 घंटे के अंदर डॉक्टर दिखाएं।"
      },
      {
        check: () => s.has('fainting'),
        message: "⚠️ URGENT: Loss of consciousness/fainting needs medical evaluation. If the person is currently unconscious, call 108 IMMEDIATELY.",
        messageHi: "⚠️ अति आवश्यक: बेहोशी के लिए चिकित्सा जांच ज़रूरी है। अगर व्यक्ति अभी बेहोश है, तुरंत 108 कॉल करें।"
      },
      {
        check: () => s.has('cough_with_blood'),
        message: "⚠️ URGENT: Coughing blood requires immediate medical attention. Please see a doctor today.",
        messageHi: "⚠️ अति आवश्यक: खांसी में खून आने पर आज ही डॉक्टर दिखाएं।"
      }
    ];

    for (const em of emergencies) {
      if (em.check()) {
        return { isEmergency: true, message: em.message, messageHi: em.messageHi };
      }
    }

    return { isEmergency: false, message: '', messageHi: '' };
  },

  // ==========================================
  // MAIN MATCHING FUNCTION
  // ==========================================
  findMatches(symptomIds, patientInfo = {}) {
    if (!window.DISEASES || symptomIds.length < 2) return [];

    const userSymptoms = new Set(symptomIds);
    const results = [];

    for (const disease of window.DISEASES) {
      const diseaseSymptoms = disease.symptoms || [];
      const keySymptoms = disease.keySymptoms || [];

      // Find matched symptoms
      const matched = diseaseSymptoms.filter(s => userSymptoms.has(s));

      // Need at least 2 matching symptoms
      if (matched.length < 2) continue;

      // Base score: matched / total disease symptoms * 100
      let score = (matched.length / diseaseSymptoms.length) * 100;

      // Key symptom bonus: if any key symptom matches, boost score
      const keyMatched = keySymptoms.filter(s => userSymptoms.has(s));
      if (keyMatched.length > 0) {
        score *= 1 + (keyMatched.length * 0.15); // 15% boost per key symptom
      }

      // Penalty: if user has many symptoms not in disease, slight penalty
      const unmatchedUserSymptoms = symptomIds.filter(s => !diseaseSymptoms.includes(s));
      if (unmatchedUserSymptoms.length > matched.length * 2) {
        score *= 0.9;
      }

      // Age adjustments
      if (patientInfo.age) {
        score = this._adjustForAge(score, disease, patientInfo.age);
      }

      // Cap at 95%
      score = Math.min(score, 95);

      if (score < 15) continue;

      // Determine confidence
      let confidence = 'Low';
      if (score >= 70) confidence = 'High';
      else if (score >= 45) confidence = 'Moderate';

      results.push({
        disease,
        score,
        matchedSymptoms: matched,
        confidence,
        severity: disease.severity || 'moderate'
      });
    }

    // Sort descending by score
    results.sort((a, b) => b.score - a.score);

    // Return top 5
    return results.slice(0, 5);
  },

  // Age adjustment helper
  _adjustForAge(score, disease, age) {
    const id = disease.id;

    // Child-specific boosts
    if (age < 13) {
      if (['chicken_pox', 'measles', 'mumps'].includes(id)) score *= 1.2;
      if (['hypertension', 'copd', 'arthritis', 'gout'].includes(id)) score *= 0.5;
    }

    // Elderly-specific boosts
    if (age >= 60) {
      if (['hypertension', 'diabetes_type_2', 'arthritis', 'copd', 'chronic_kidney_disease'].includes(id)) score *= 1.15;
      if (['acne', 'chicken_pox', 'mumps'].includes(id)) score *= 0.6;
    }

    // Young adult boosts
    if (age >= 15 && age <= 35) {
      if (['acne', 'anxiety_disorder', 'stress_related', 'migraine'].includes(id)) score *= 1.1;
    }

    return score;
  },

  // ==========================================
  // FOLLOW-UP QUESTIONS
  // ==========================================
  getFollowUpQuestions(symptomIds, matches) {
    if (!matches || matches.length === 0) return [];

    const userSymptoms = new Set(symptomIds);
    const suggestions = new Map();

    // Look at top 3 matches
    const topMatches = matches.slice(0, 3);

    for (const match of topMatches) {
      const diseaseSymptoms = match.disease.symptoms || [];

      for (const symptomId of diseaseSymptoms) {
        if (userSymptoms.has(symptomId)) continue; // Skip already selected
        if (suggestions.has(symptomId)) continue; // Skip duplicates

        const symptom = window.SYMPTOMS ? window.SYMPTOMS[symptomId] : null;
        if (!symptom) continue;

        suggestions.set(symptomId, {
          symptomId,
          question: `Do you also have ${symptom.name.toLowerCase()}?`,
          questionHi: `क्या आपको ${symptom.nameHi} भी है?`,
          forDisease: match.disease.name
        });
      }
    }

    // Return up to 5 suggestions
    return Array.from(suggestions.values()).slice(0, 5);
  },

  // ==========================================
  // FREE-TEXT PARSER
  // ==========================================
  parseSymptoms(text) {
    if (!window.SYMPTOMS || !text) return [];

    const lower = text.toLowerCase()
      .replace(/[.,!?;]/g, ' ')
      .replace(/\band\b/g, ' ')
      .replace(/\bsince\b.*$/i, '') // Remove "since X days" etc.
      .replace(/\bfor\b\s*\d+\s*(day|week|month|hour)s?/i, '') // Remove "for 3 days"
      .replace(/\bi\s*(am|have|had|feel|got|getting)\b/g, ' ') // Remove "I have", "I am"
      .replace(/\bmy\b/g, ' ')
      .replace(/\ba\b/g, ' ')
      .trim();

    const chunks = lower.split(/\s+/).filter(w => w.length > 2);
    const foundIds = new Set();

    // Try matching full phrase first, then individual words
    for (const [id, symptom] of Object.entries(window.SYMPTOMS)) {
      const nameLower = symptom.name.toLowerCase();
      const allTerms = [nameLower, ...(symptom.aliases || []).map(a => a.toLowerCase())];

      for (const term of allTerms) {
        if (lower.includes(term)) {
          foundIds.add(id);
          break;
        }
      }
    }

    // If no full matches, try word-by-word fuzzy matching
    if (foundIds.size === 0) {
      for (const chunk of chunks) {
        for (const [id, symptom] of Object.entries(window.SYMPTOMS)) {
          const nameLower = symptom.name.toLowerCase();
          const allTerms = [nameLower, ...(symptom.aliases || []).map(a => a.toLowerCase())];

          for (const term of allTerms) {
            if (term.includes(chunk) || chunk.includes(term)) {
              foundIds.add(id);
              break;
            }
          }
        }
      }
    }

    return Array.from(foundIds);
  },

  // ==========================================
  // OVERALL SEVERITY CLASSIFICATION
  // ==========================================
  classifySeverity(matches, durationDays) {
    if (!matches || matches.length === 0) return 'mild';

    const topMatch = matches[0];

    // Check if any top match is severe
    const hasSevere = matches.some(m =>
      m.disease.severity === 'severe' ||
      m.disease.urgency === 'emergency'
    );

    if (hasSevere) return 'severe';

    // Duration makes it more serious
    const hasModerate = matches.some(m =>
      m.disease.severity === 'moderate' ||
      m.disease.severity === 'moderate_to_severe' ||
      m.disease.urgency === 'within_24hrs'
    );

    if (hasModerate) return 'moderate';

    // Long duration bumps up severity
    if (durationDays && durationDays > 7) return 'moderate';

    // High confidence on anything
    if (topMatch.score >= 70) return 'moderate';

    return 'mild';
  }
};
