// Internationalization — AI Medical Symptom Checker
// English + Hindi translations with dynamic page updating

window.I18N = {
  currentLang: 'en',

  translations: {
    en: {
      appTitle: "MedicAI — Smart Health Assistant",
      appSubtitle: "Smart Health Assistant",
      symptomsLabel: "What symptoms are you experiencing?",
      searchPlaceholder: "Type symptoms (e.g., fever, headache, body ache)...",
      ageLabel: "Age",
      genderLabel: "Gender",
      male: "Male",
      female: "Female",
      other: "Other",
      durationLabel: "Duration (days)",
      analyzeBtn: "Analyze My Symptoms",
      resultsTitle: "📋 Analysis Results",
      possibleConditions: "Possible Conditions",
      matchingSymptoms: "Matching Symptoms",
      whatIsIt: "What is it?",
      commonCauses: "Common Causes",
      homeCare: "Home Care & Treatment",
      dietAdvice: "Diet Advice",
      lifestyleTips: "Lifestyle Tips",
      whenToSeeDoctor: "When to See a Doctor",
      preventionTips: "Prevention Tips",
      ageSpecificNote: "Age-Specific Note",
      confidence: "Confidence",
      high: "High",
      moderate: "Moderate",
      low: "Low",
      severity: "Severity",
      mild: "Mild",
      severe: "Severe",
      emergency: "EMERGENCY",
      emergencyMsg: "Based on your symptoms, please call 108 (India emergency) or go to the nearest hospital IMMEDIATELY. Do not wait.",
      disclaimer: "This is AI-generated health information for educational purposes only. It is NOT a medical diagnosis. Please consult a qualified doctor for proper examination and treatment.",
      followUpTitle: "🤔 Did you also notice any of these?",
      noResults: "No matching conditions found based on your symptoms. Please try adding more symptoms or consult a healthcare professional.",
      selectMoreSymptoms: "Please select at least 2 symptoms for analysis.",
      urgencyEmergency: "Go to emergency NOW",
      urgency24hrs: "See a doctor within 24 hours",
      urgency2_3days: "Can wait 2-3 days, but monitor closely",
      selectedSymptoms: "Selected Symptoms",
      clearAll: "Clear All",
      helplineTitle: "📞 Helpline Numbers",
      helplineEmergency: "Emergency: 108",
      helplineHealth: "Health Helpline: 104",
      helplineMental: "Mental Health: iCall 9152987821",
      helplinePoison: "Poison Control: 1800-11-6117",
      browseBySystem: "Browse by Body System",
      general: "General",
      head: "Head",
      eyes: "Eyes",
      ent: "Ear, Nose & Throat",
      chest: "Chest",
      abdomen: "Abdomen",
      bowel: "Bowel",
      urinary: "Urinary",
      skin: "Skin",
      musculoskeletal: "Muscles & Bones",
      neurological: "Neurological",
      mental: "Mental Health",
      other: "Other"
    },
    hi: {
      appTitle: "मेडिकAI — स्मार्ट स्वास्थ्य सहायक",
      appSubtitle: "स्मार्ट स्वास्थ्य सहायक",
      symptomsLabel: "आपको कौन से लक्षण हो रहे हैं?",
      searchPlaceholder: "लक्षण टाइप करें (जैसे बुखार, सिरदर्द)...",
      ageLabel: "उम्र",
      genderLabel: "लिंग",
      male: "पुरुष",
      female: "महिला",
      other: "अन्य",
      durationLabel: "कितने दिनों से?",
      analyzeBtn: "मेरे लक्षणों का विश्लेषण करें",
      resultsTitle: "📋 विश्लेषण परिणाम",
      possibleConditions: "संभावित स्थितियाँ",
      matchingSymptoms: "मेल खाने वाले लक्षण",
      whatIsIt: "यह क्या है?",
      commonCauses: "सामान्य कारण",
      homeCare: "घरेलू देखभाल और उपचार",
      dietAdvice: "आहार सलाह",
      lifestyleTips: "जीवनशैली सुझाव",
      whenToSeeDoctor: "डॉक्टर को कब दिखाएं?",
      preventionTips: "रोकथाम के उपाय",
      ageSpecificNote: "उम्र-विशेष सलाह",
      confidence: "विश्वसनीयता",
      high: "उच्च",
      moderate: "मध्यम",
      low: "कम",
      severity: "गंभीरता",
      mild: "हल्का",
      severe: "गंभीर",
      emergency: "आपातकाल",
      emergencyMsg: "आपके लक्षणों के आधार पर, कृपया तुरंत 108 (भारत आपातकालीन) पर कॉल करें या निकटतम अस्पताल जाएं। इंतज़ार न करें।",
      disclaimer: "यह AI-जनित स्वास्थ्य जानकारी केवल शैक्षिक उद्देश्यों के लिए है। यह चिकित्सा निदान नहीं है। उचित जांच और उपचार के लिए कृपया किसी योग्य डॉक्टर से परामर्श करें।",
      followUpTitle: "🤔 क्या आपने इनमें से कुछ और भी नोटिस किया?",
      noResults: "आपके लक्षणों के आधार पर कोई संभावित बीमारी नहीं मिली। कृपया अन्य लक्षण चुनें या डॉक्टर से परामर्श करें।",
      selectMoreSymptoms: "विश्लेषण के लिए कम से कम 2 लक्षण चुनें।",
      urgencyEmergency: "अभी आपातकालीन में जाएं",
      urgency24hrs: "24 घंटे के भीतर डॉक्टर दिखाएं",
      urgency2_3days: "2-3 दिन रुक सकते हैं, लेकिन ध्यान रखें",
      selectedSymptoms: "चुने हुए लक्षण",
      clearAll: "सब हटाएं",
      helplineTitle: "📞 हेल्पलाइन नंबर",
      helplineEmergency: "आपातकालीन: 108",
      helplineHealth: "स्वास्थ्य हेल्पलाइन: 104",
      helplineMental: "मानसिक स्वास्थ्य: iCall 9152987821",
      helplinePoison: "ज़हर नियंत्रण: 1800-11-6117",
      browseBySystem: "शरीर प्रणाली के अनुसार खोजें",
      general: "सामान्य",
      head: "सिर",
      eyes: "आँखें",
      ent: "कान, नाक, गला",
      chest: "छाती",
      abdomen: "पेट",
      bowel: "आंत",
      urinary: "मूत्र",
      skin: "त्वचा",
      musculoskeletal: "मांसपेशी और हड्डी",
      neurological: "तंत्रिका",
      mental: "मानसिक स्वास्थ्य",
      other: "अन्य"
    }
  },

  setLanguage(lang) {
    if (this.translations[lang]) {
      this.currentLang = lang;
      this.translatePage();
    }
  },

  t(key) {
    const trans = this.translations[this.currentLang];
    return trans[key] || this.translations.en[key] || key;
  },

  translatePage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = this.t(key);
      if (translation) el.textContent = translation;
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = this.t(key);
      if (translation) el.placeholder = translation;
    });
  }
};
