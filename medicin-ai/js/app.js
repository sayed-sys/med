// =============================================
// MedicAI — Main Application Controller
// Handles UI, events, and orchestration
// =============================================

(function() {
    'use strict';

    // ---------- State ----------
    const state = {
        selectedSymptoms: new Set(),
        currentSystem: 'general',
        results: null,
        isAnalyzing: false,
        activeTab: 'symptomsPanel',
        uploadedFile: null,
        webcamStream: null,
        webcamInterval: null,
        webcamSocket: null,
        webcamRafId: null,
        webcamOverlays: [],
        isDiagnosingImage: false
    };

    // ---------- DOM References ----------
    const $ = (sel) => document.querySelector(sel);
    const $$ = (sel) => document.querySelectorAll(sel);

    const DOM = {
        symptomSearch: $('#symptomSearch'),
        autocomplete: $('#autocompleteDropdown'),
        selectedArea: $('#selectedSymptomsArea'),
        selectedChips: $('#selectedChips'),
        clearAllBtn: $('#clearAllBtn'),
        systemTabs: $('#systemTabs'),
        symptomGrid: $('#symptomGrid'),
        analyzeBtn: $('#analyzeBtn'),
        resultsSection: $('#resultsSection'),
        diseaseCards: $('#diseaseCards'),
        severityBanner: $('#severityBanner'),
        resultsSummary: $('#resultsSummary'),
        followUpSection: $('#followUpSection'),
        followUpChips: $('#followUpChips'),
        emergencyOverlay: $('#emergencyOverlay'),
        emergencyMessage: $('#emergencyMessage'),
        emergencyDismiss: $('#emergencyDismiss'),
        langToggle: $('#langToggle'),
        langLabel: $('#langLabel'),
        themeToggle: $('#themeToggle'),
        patientAge: $('#patientAge'),
        patientGender: $('#patientGender'),
        symptomDuration: $('#symptomDuration'),

        // Tabs
        tabSymptoms: $('#tabSymptoms'),
        tabUpload: $('#tabUpload'),
        tabWebcam: $('#tabWebcam'),
        symptomsPanel: $('#symptomsPanel'),
        uploadPanel: $('#uploadPanel'),
        webcamPanel: $('#webcamPanel'),

        // Image Upload
        uploadZone: $('#uploadZone'),
        imageFileInput: $('#imageFileInput'),
        uploadPreviewContainer: $('#uploadPreviewContainer'),
        uploadPreview: $('#uploadPreview'),
        removeUploadBtn: $('#removeUploadBtn'),
        uploadModelMode: $('#uploadModelMode'),
        runUploadDiagnoseBtn: $('#runUploadDiagnoseBtn'),

        // Webcam Scanner
        startWebcamBtn: $('#startWebcamBtn'),
        stopWebcamBtn: $('#stopWebcamBtn'),
        webcamVideo: $('#webcamVideo'),
        webcamCanvas: $('#webcamCanvas'),
        webcamPlaceholder: $('#webcamPlaceholder'),
        webcamModelMode: $('#webcamModelMode'),
        webcamStatusText: $('#webcamStatusText')
    };

    // ---------- Body System Icons ----------
    const systemIcons = {
        general: '🌡️',
        head: '🧠',
        eyes: '👁️',
        ent: '👃',
        chest: '🫁',
        abdomen: '🤢',
        bowel: '🚽',
        urinary: '💧',
        skin: '🩹',
        musculoskeletal: '🦴',
        neurological: '⚡',
        mental: '🧘',
        other: '📋'
    };

    const systemNames = {
        general: 'General',
        head: 'Head',
        eyes: 'Eyes',
        ent: 'Ear/Nose/Throat',
        chest: 'Chest',
        abdomen: 'Abdomen',
        bowel: 'Bowel',
        urinary: 'Urinary',
        skin: 'Skin',
        musculoskeletal: 'Muscles & Bones',
        neurological: 'Neurological',
        mental: 'Mental Health',
        other: 'Other'
    };

    // ---------- Initialize ----------
    function init() {
        initTheme();
        
        // Fetch symptoms list from backend API
        fetch('/api/symptoms')
            .then(res => {
                if (!res.ok) throw new Error('Failed to load symptoms list');
                return res.json();
            })
            .then(symptoms => {
                window.SYMPTOMS = symptoms;
                renderSystemTabs();
                renderSymptomGrid('general');
                bindEvents();
                switchTab('symptomsPanel');
                updateAnalyzeBtn();
            })
            .catch(err => {
                console.error('API Error:', err);
                alert('Unable to load symptoms list from server. Please check connection and refresh.');
            });
    }

    // ---------- Theme ----------
    function initTheme() {
        const saved = localStorage.getItem('medicai-theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = saved || (prefersDark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', theme);
        updateThemeIcon(theme);
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme');
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('medicai-theme', next);
        updateThemeIcon(next);
    }

    function updateThemeIcon(theme) {
        const icon = DOM.themeToggle.querySelector('.theme-icon');
        icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }

    // ---------- Language ----------
    function toggleLanguage() {
        const next = window.I18N.currentLang === 'en' ? 'hi' : 'en';
        window.I18N.setLanguage(next);
        DOM.langLabel.textContent = next.toUpperCase();
        renderSystemTabs();
        renderSymptomGrid(state.currentSystem);
        renderSelectedChips();
        if (state.results) {
            renderResults(state.results);
        }
    }

    // ---------- Body System Tabs ----------
    function renderSystemTabs() {
        const lang = window.I18N.currentLang;
        DOM.systemTabs.innerHTML = '';

        Object.entries(systemIcons).forEach(([system, icon]) => {
            const tab = document.createElement('button');
            tab.className = `system-tab${system === state.currentSystem ? ' active' : ''}`;
            tab.dataset.system = system;
            const label = lang === 'hi' ? (window.I18N.translations.hi[system] || systemNames[system]) : systemNames[system];
            tab.innerHTML = `<span>${icon}</span> ${label}`;
            tab.addEventListener('click', () => {
                state.currentSystem = system;
                $$('.system-tab').forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                renderSymptomGrid(system);
            });
            DOM.systemTabs.appendChild(tab);
        });
    }

    // ---------- Symptom Grid ----------
    function renderSymptomGrid(system) {
        if (!window.SYMPTOMS) return;

        DOM.symptomGrid.innerHTML = '';
        const lang = window.I18N.currentLang;

        const systemSymptoms = Object.entries(window.SYMPTOMS)
            .filter(([_, s]) => s.bodySystem === system)
            .sort((a, b) => a[1].name.localeCompare(b[1].name));

        if (systemSymptoms.length === 0) {
            DOM.symptomGrid.innerHTML = '<p style="color:var(--text-tertiary);font-size:0.9rem;padding:8px;">No symptoms in this category</p>';
            return;
        }

        systemSymptoms.forEach(([id, symptom]) => {
            const btn = document.createElement('button');
            btn.className = `symptom-btn${state.selectedSymptoms.has(id) ? ' selected' : ''}`;
            btn.dataset.symptomId = id;
            const name = lang === 'hi' ? symptom.nameHi : symptom.name;
            btn.innerHTML = `<span>${symptom.icon}</span> ${name}`;
            btn.addEventListener('click', () => toggleSymptom(id));
            DOM.symptomGrid.appendChild(btn);
        });
    }

    // ---------- Symptom Selection ----------
    function toggleSymptom(symptomId) {
        if (state.selectedSymptoms.has(symptomId)) {
            state.selectedSymptoms.delete(symptomId);
        } else {
            state.selectedSymptoms.add(symptomId);
        }
        updateUI();
    }

    function addSymptom(symptomId) {
        if (!state.selectedSymptoms.has(symptomId)) {
            state.selectedSymptoms.add(symptomId);
            updateUI();
        }
    }

    function removeSymptom(symptomId) {
        state.selectedSymptoms.delete(symptomId);
        updateUI();
    }

    function clearAll() {
        state.selectedSymptoms.clear();
        updateUI();
    }

    function updateUI() {
        renderSelectedChips();
        renderSymptomGrid(state.currentSystem);
        updateAnalyzeBtn();
    }

    // ---------- Selected Chips ----------
    function renderSelectedChips() {
        if (!window.SYMPTOMS) return;
        const lang = window.I18N.currentLang;

        if (state.selectedSymptoms.size === 0) {
            DOM.selectedArea.classList.add('hidden');
            return;
        }

        DOM.selectedArea.classList.remove('hidden');
        DOM.selectedChips.innerHTML = '';

        state.selectedSymptoms.forEach(id => {
            const symptom = window.SYMPTOMS[id];
            if (!symptom) return;

            const chip = document.createElement('span');
            chip.className = 'symptom-chip';
            const name = lang === 'hi' ? symptom.nameHi : symptom.name;
            chip.innerHTML = `
                <span class="chip-icon">${symptom.icon}</span>
                ${name}
                <button class="chip-remove" data-id="${id}" aria-label="Remove ${symptom.name}">✕</button>
            `;
            DOM.selectedChips.appendChild(chip);
        });

        // Bind remove buttons
        DOM.selectedChips.querySelectorAll('.chip-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const chip = btn.closest('.symptom-chip');
                chip.classList.add('chip-exit');
                setTimeout(() => removeSymptom(btn.dataset.id), 250);
            });
        });
    }

    // ---------- Analyze Button ----------
    function updateAnalyzeBtn() {
        DOM.analyzeBtn.disabled = state.selectedSymptoms.size < 2;
    }

    // ---------- Autocomplete ----------
    let activeAutocompleteIndex = -1;

    function handleSearch(e) {
        if (!window.SYMPTOMS) return;
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 1) {
            hideAutocomplete();
            return;
        }

        const lang = window.I18N.currentLang;
        const matches = [];

        Object.entries(window.SYMPTOMS).forEach(([id, symptom]) => {
            if (state.selectedSymptoms.has(id)) return;

            const nameMatch = symptom.name.toLowerCase().includes(query);
            const aliasMatch = symptom.aliases && symptom.aliases.some(a => a.toLowerCase().includes(query));
            const hiMatch = lang === 'hi' && symptom.nameHi && symptom.nameHi.includes(query);

            if (nameMatch || aliasMatch || hiMatch) {
                matches.push({ id, symptom, nameMatch });
            }
        });

        // Sort: name matches first, then alias matches
        matches.sort((a, b) => {
            if (a.nameMatch && !b.nameMatch) return -1;
            if (!a.nameMatch && b.nameMatch) return 1;
            return a.symptom.name.localeCompare(b.symptom.name);
        });

        showAutocomplete(matches.slice(0, 8), query);
    }

    function showAutocomplete(matches, query) {
        if (matches.length === 0) {
            hideAutocomplete();
            return;
        }

        activeAutocompleteIndex = -1;
        DOM.autocomplete.classList.remove('hidden');
        DOM.autocomplete.innerHTML = '';
        const lang = window.I18N.currentLang;

        matches.forEach(({ id, symptom }, index) => {
            const item = document.createElement('div');
            item.className = 'autocomplete-item';
            item.dataset.index = index;
            item.dataset.symptomId = id;

            const name = lang === 'hi' ? symptom.nameHi : symptom.name;
            const highlighted = highlightMatch(name, query);
            const systemName = lang === 'hi' ? (window.I18N.translations.hi[symptom.bodySystem] || systemNames[symptom.bodySystem]) : systemNames[symptom.bodySystem];

            item.innerHTML = `
                <span class="ac-icon">${symptom.icon}</span>
                <span class="ac-name">${highlighted}</span>
                <span class="ac-system">${systemName}</span>
            `;

            item.addEventListener('click', () => {
                addSymptom(id);
                DOM.symptomSearch.value = '';
                hideAutocomplete();
                DOM.symptomSearch.focus();
            });

            DOM.autocomplete.appendChild(item);
        });
    }

    function highlightMatch(text, query) {
        const idx = text.toLowerCase().indexOf(query.toLowerCase());
        if (idx === -1) return text;
        return text.slice(0, idx) +
            `<span class="ac-highlight">${text.slice(idx, idx + query.length)}</span>` +
            text.slice(idx + query.length);
    }

    function hideAutocomplete() {
        DOM.autocomplete.classList.add('hidden');
        DOM.autocomplete.innerHTML = '';
        activeAutocompleteIndex = -1;
    }

    function handleSearchKeydown(e) {
        const items = DOM.autocomplete.querySelectorAll('.autocomplete-item');
        if (items.length === 0 && e.key !== 'Enter') return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            activeAutocompleteIndex = Math.min(activeAutocompleteIndex + 1, items.length - 1);
            updateActiveItem(items);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            activeAutocompleteIndex = Math.max(activeAutocompleteIndex - 1, 0);
            updateActiveItem(items);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            if (activeAutocompleteIndex >= 0 && items[activeAutocompleteIndex]) {
                items[activeAutocompleteIndex].click();
            } else if (DOM.symptomSearch.value.trim()) {
                // Try to parse free text
                handleFreeTextInput();
            }
        } else if (e.key === 'Escape') {
            hideAutocomplete();
        }
    }

    function updateActiveItem(items) {
        items.forEach((item, i) => {
            item.classList.toggle('active', i === activeAutocompleteIndex);
        });
        if (items[activeAutocompleteIndex]) {
            items[activeAutocompleteIndex].scrollIntoView({ block: 'nearest' });
        }
    }

    // ---------- Free-text Parsing Helper ----------
    function parseSymptoms(text) {
        if (!window.SYMPTOMS || !text) return [];

        const lower = text.toLowerCase()
            .replace(/[.,!?;]/g, ' ')
            .replace(/\band\b/g, ' ')
            .replace(/\bsince\b.*$/i, '')
            .replace(/\bfor\b\s*\d+\s*(day|week|month|hour)s?/i, '')
            .replace(/\bi\s*(am|have|had|feel|got|getting)\b/g, ' ')
            .replace(/\bmy\b/g, ' ')
            .replace(/\ba\b/g, ' ')
            .trim();

        const chunks = lower.split(/\s+/).filter(w => w.length > 2);
        const foundIds = new Set();

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
    }

    function handleFreeTextInput() {
        const text = DOM.symptomSearch.value.trim();
        if (!text) return;

        const parsed = parseSymptoms(text);
        if (parsed.length > 0) {
            parsed.forEach(id => addSymptom(id));
            DOM.symptomSearch.value = '';
            hideAutocomplete();
        }
    }

    // ---------- Analysis ----------
    function runAnalysis() {
        if (state.selectedSymptoms.size < 2 || state.isAnalyzing) return;

        state.isAnalyzing = true;
        const symptomIds = Array.from(state.selectedSymptoms);

        // Patient info
        const patientInfo = {
            age: parseInt(DOM.patientAge.value) || null,
            gender: DOM.patientGender.value || null,
            durationDays: parseInt(DOM.symptomDuration.value) || null
        };

        // Show loading state
        DOM.analyzeBtn.innerHTML = `
            <div class="analyzing-spinner">
                <div class="spinner-dots">
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                </div>
                <span>Analyzing symptoms...</span>
            </div>
        `;

        // Send POST request to backend API
        fetch('/api/analyze', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ symptomIds, patientInfo })
        })
        .then(response => {
            if (!response.ok) throw new Error('API request failed');
            return response.json();
        })
        .then(data => {
            // Check emergency first
            if (data.emergency && data.emergency.isEmergency) {
                showEmergency(data.emergency);
            }

            state.results = { 
                matches: data.matches, 
                patientInfo, 
                symptomIds,
                overallSeverity: data.overallSeverity,
                followUps: data.followUps
            };
            renderResults(state.results);
        })
        .catch(err => {
            console.error('Analysis failed:', err);
            alert('Something went wrong during symptom analysis. Please try again.');
        })
        .finally(() => {
            // Reset button
            DOM.analyzeBtn.innerHTML = `
                <span class="btn-icon">🔬</span>
                <span data-i18n="analyzeBtn">${window.I18N.t('analyzeBtn')}</span>
                <span class="btn-arrow">→</span>
            `;
            state.isAnalyzing = false;
            
            // Scroll to results
            DOM.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // ---------- Render Results ----------
    function renderResults(data) {
        const { matches, patientInfo, symptomIds, overallSeverity, followUps } = data;
        const lang = window.I18N.currentLang;

        DOM.resultsSection.classList.remove('hidden');
        DOM.diseaseCards.innerHTML = '';

        if (matches.length === 0) {
            if (symptomIds && symptomIds.length < 2) {
                DOM.resultsSummary.textContent = window.I18N.t('selectMoreSymptoms');
            } else {
                DOM.resultsSummary.textContent = window.I18N.t('noResults');
            }
            DOM.severityBanner.classList.add('hidden');
            DOM.followUpSection.classList.add('hidden');
            return;
        }

        // Summary
        DOM.resultsSummary.textContent = `Found ${matches.length} possible condition${matches.length > 1 ? 's' : ''} based on ${symptomIds.length} symptoms`;

        // Severity Banner
        renderSeverityBanner(overallSeverity || 'mild');

        // Follow-up questions
        renderFollowUps(followUps || []);

        // Disease cards
        matches.forEach((match, index) => {
            const card = createDiseaseCard(match, index, patientInfo);
            DOM.diseaseCards.appendChild(card);
        });
    }

    function renderSeverityBanner(severity) {
        DOM.severityBanner.classList.remove('hidden', 'mild', 'moderate', 'severe');
        DOM.severityBanner.classList.add(severity);

        const icons = { mild: '🟢', moderate: '🟡', severe: '🔴' };
        const labels = {
            mild: 'Mild — Likely manageable at home with basic care',
            moderate: 'Moderate — Consider consulting a doctor soon',
            severe: 'Severe — Please see a doctor promptly'
        };

        DOM.severityBanner.querySelector('.severity-icon').textContent = icons[severity] || '🟡';
        DOM.severityBanner.querySelector('.severity-text').textContent = labels[severity] || '';
    }

    function renderFollowUps(followUps) {
        if (!window.SYMPTOMS) return;
        if (!followUps || followUps.length === 0) {
            DOM.followUpSection.classList.add('hidden');
            return;
        }

        DOM.followUpSection.classList.remove('hidden');
        DOM.followUpChips.innerHTML = '';
        const lang = window.I18N.currentLang;

        followUps.forEach(fu => {
            const chip = document.createElement('button');
            chip.className = 'follow-up-chip';
            const symptom = window.SYMPTOMS[fu.symptomId];
            if (!symptom) return;
            const name = lang === 'hi' ? symptom.nameHi : symptom.name;
            chip.innerHTML = `${symptom.icon} ${fu.question || name}`;
            chip.addEventListener('click', () => {
                addSymptom(fu.symptomId);
                chip.remove();
                // Re-run analysis
                runAnalysis();
            });
            DOM.followUpChips.appendChild(chip);
        });
    }

    // ---------- Disease Card ----------
    function createDiseaseCard(match, index, patientInfo) {
        const { disease, score, matchedSymptoms, confidence } = match;
        const lang = window.I18N.currentLang;
        const roundedScore = Math.round(score);
        const confClass = confidence.toLowerCase();

        const card = document.createElement('div');
        card.className = 'disease-card card-enter';

        const name = lang === 'hi' ? (disease.nameHi || disease.name) : disease.name;
        const desc = lang === 'hi' ? (disease.descriptionHi || disease.description) : disease.description;

        // Determine age group for age note
        let ageGroup = 'adult';
        if (patientInfo.age) {
            if (patientInfo.age < 13) ageGroup = 'child';
            else if (patientInfo.age >= 60) ageGroup = 'elderly';
        }
        const ageNote = disease.ageNotes ? disease.ageNotes[ageGroup] : null;

        // Urgency labels
        const urgencyLabels = {
            emergency: { text: window.I18N.t('urgencyEmergency'), icon: '🚨' },
            within_24hrs: { text: window.I18N.t('urgency24hrs'), icon: '⚠️' },
            within_2_3_days: { text: window.I18N.t('urgency2_3days'), icon: 'ℹ️' }
        };
        const urgency = urgencyLabels[disease.urgency] || urgencyLabels.within_2_3_days;

        card.innerHTML = `
            <div class="disease-card-header" aria-expanded="false">
                <div class="dc-left">
                    <div class="dc-rank ${confClass}">${index + 1}</div>
                    <div class="dc-info">
                        <div class="dc-name">${name}</div>
                        <div class="dc-category">${disease.category}</div>
                    </div>
                </div>
                <div class="dc-right">
                    <div class="dc-confidence-wrap">
                        <div class="dc-confidence-label">${window.I18N.t('confidence')}</div>
                        <div class="dc-confidence-bar">
                            <div class="dc-confidence-fill confidence-fill-animate ${confClass}" style="--fill-width: ${roundedScore}%; width: 0;"></div>
                        </div>
                    </div>
                    <div class="dc-score score-counter ${confClass}">${roundedScore}%</div>
                    <div class="dc-toggle">▼</div>
                </div>
            </div>
            <div class="disease-card-body">
                <!-- Matched Symptoms -->
                <div class="dc-matched-symptoms stagger-fade">
                    ${matchedSymptoms.map(id => {
                        const s = window.SYMPTOMS ? window.SYMPTOMS[id] : null;
                        const sName = s ? (lang === 'hi' ? s.nameHi : s.name) : id;
                        return `<span class="matched-symptom-tag">${sName}</span>`;
                    }).join('')}
                </div>

                <!-- What is it -->
                <div class="dc-detail-section">
                    <h4><span class="section-emoji">📖</span> ${window.I18N.t('whatIsIt')}</h4>
                    <p>${desc}</p>
                </div>

                <!-- Common Causes -->
                ${disease.causes && disease.causes.length > 0 ? `
                <div class="dc-detail-section">
                    <h4><span class="section-emoji">🔍</span> ${window.I18N.t('commonCauses')}</h4>
                    <ul>${disease.causes.map(c => `<li>${c}</li>`).join('')}</ul>
                </div>` : ''}

                <!-- Home Care -->
                ${disease.homeCare && disease.homeCare.length > 0 ? `
                <div class="dc-detail-section">
                    <h4><span class="section-emoji">🏠</span> ${window.I18N.t('homeCare')}</h4>
                    <ul>${disease.homeCare.map(h => `<li>${h}</li>`).join('')}</ul>
                </div>` : ''}

                <!-- Diet -->
                ${disease.diet && disease.diet.length > 0 ? `
                <div class="dc-detail-section">
                    <h4><span class="section-emoji">🍽️</span> ${window.I18N.t('dietAdvice')}</h4>
                    <ul>${disease.diet.map(d => `<li>${d}</li>`).join('')}</ul>
                </div>` : ''}

                <!-- Lifestyle Tips -->
                ${disease.lifestyleTips && disease.lifestyleTips.length > 0 ? `
                <div class="dc-detail-section">
                    <h4><span class="section-emoji">💡</span> ${window.I18N.t('lifestyleTips')}</h4>
                    <ul>${disease.lifestyleTips.map(t => `<li>${t}</li>`).join('')}</ul>
                </div>` : ''}

                <!-- When to See Doctor -->
                <div class="dc-detail-section">
                    <h4><span class="section-emoji">🩺</span> ${window.I18N.t('whenToSeeDoctor')}</h4>
                    ${disease.warningSignsForDoctor && disease.warningSignsForDoctor.length > 0 ? `
                    <ul>${disease.warningSignsForDoctor.map(w => `<li>${w}</li>`).join('')}</ul>` : ''}
                    <div class="urgency-badge ${disease.urgency}">
                        ${urgency.icon} ${urgency.text}
                    </div>
                </div>

                <!-- Prevention -->
                ${disease.prevention && disease.prevention.length > 0 ? `
                <div class="dc-detail-section">
                    <h4><span class="section-emoji">🛡️</span> ${window.I18N.t('preventionTips')}</h4>
                    <ul>${disease.prevention.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>` : ''}

                <!-- Age-specific Note -->
                ${ageNote ? `
                <div class="dc-detail-section">
                    <div class="age-note">
                        <span class="age-note-icon">${ageGroup === 'child' ? '👶' : ageGroup === 'elderly' ? '🧓' : '🧑'}</span>
                        <p><strong>${window.I18N.t('ageSpecificNote')}:</strong> ${ageNote}</p>
                    </div>
                </div>` : ''}
            </div>
        `;

        // Expand/collapse
        const header = card.querySelector('.disease-card-header');
        header.addEventListener('click', () => {
            const isExpanded = card.classList.contains('expanded');
            card.classList.toggle('expanded');
            header.setAttribute('aria-expanded', !isExpanded);
        });

        // Auto-expand first card
        if (index === 0) {
            setTimeout(() => {
                card.classList.add('expanded');
                header.setAttribute('aria-expanded', 'true');
            }, 600);
        }

        return card;
    }

    // ---------- Emergency ----------
    function showEmergency(emergency) {
        const lang = window.I18N.currentLang;
        DOM.emergencyMessage.textContent = lang === 'hi' ? (emergency.messageHi || emergency.message) : emergency.message;
        DOM.emergencyOverlay.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function hideEmergency() {
        DOM.emergencyOverlay.classList.add('hidden');
        document.body.style.overflow = '';
    }

    // ---------- Tab Management ----------
    function switchTab(targetTabId) {
        state.activeTab = targetTabId;

        // Update active class on tab buttons
        $$('.mode-tab').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === targetTabId);
        });

        // Show/hide panels
        $$('.tab-panel').forEach(panel => {
            panel.classList.toggle('hidden', panel.id !== targetTabId);
        });

        // Stop webcam if leaving the webcam tab
        if (targetTabId !== 'webcamPanel') {
            stopWebcam();
        }
    }

    // ---------- Image Upload Handlers ----------
    function handleFileSelect(file) {
        if (!file || !file.type.startsWith('image/')) {
            alert('Please select a valid image file.');
            return;
        }

        state.uploadedFile = file;

        const reader = new FileReader();
        reader.onload = (e) => {
            DOM.uploadPreview.src = e.target.result;
            DOM.uploadPreviewContainer.classList.remove('hidden');
            DOM.uploadZone.classList.add('hidden');
            DOM.runUploadDiagnoseBtn.disabled = false;
        };
        reader.readAsDataURL(file);
    }

    // Explicitly make this function available for inline UI use as well
    window.removeUploadedFile = removeUploadedFile;
    function removeUploadedFile() {
        state.uploadedFile = null;
        DOM.imageFileInput.value = '';
        DOM.uploadPreview.src = '';
        DOM.uploadPreviewContainer.classList.add('hidden');
        DOM.uploadZone.classList.remove('hidden');
        DOM.runUploadDiagnoseBtn.disabled = true;
    }

    function runImageDiagnosis() {
        if (!state.uploadedFile || state.isDiagnosingImage) return;

        state.isDiagnosingImage = true;
        const task = DOM.uploadModelMode.value;

        // Show loading state
        DOM.runUploadDiagnoseBtn.disabled = true;
        DOM.runUploadDiagnoseBtn.innerHTML = `
            <div class="analyzing-spinner">
                <div class="spinner-dots">
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                    <div class="spinner-dot"></div>
                </div>
                <span>Analyzing image...</span>
            </div>
        `;

        const formData = new FormData();
        formData.append('file', state.uploadedFile);

        fetch(`/api/v1/predict/image?task=${task}`, {
            method: 'POST',
            body: formData
        })
        .then(res => {
            if (!res.ok) {
                if (res.status === 503) {
                    throw new Error('Model service is currently unavailable. The models may still be loading on the server.');
                }
                throw new Error('Failed to analyze the uploaded image.');
            }
            return res.json();
        })
        .then(data => {
            if (data.emergency && data.emergency.isEmergency) {
                showEmergency(data.emergency);
            }

            state.results = {
                matches: data.matches,
                patientInfo: {},
                symptomIds: [],
                overallSeverity: data.overallSeverity,
                followUps: []
            };
            renderResults(state.results);
        })
        .catch(err => {
            console.error('Image diagnosis failed:', err);
            alert(err.message || 'Something went wrong during image diagnosis.');
        })
        .finally(() => {
            DOM.runUploadDiagnoseBtn.disabled = false;
            DOM.runUploadDiagnoseBtn.innerHTML = `
                <span class="btn-icon">🔬</span>
                <span>Run Diagnostic Analytics</span>
                <span class="btn-arrow">→</span>
            `;
            state.isDiagnosingImage = false;
            
            DOM.resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // ---------- Webcam Streaming Handlers ----------
    async function startWebcam() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: { width: { ideal: 640 }, height: { ideal: 480 }, facingMode: 'user' }
            });
            
            state.webcamStream = stream;
            DOM.webcamVideo.srcObject = stream;
            DOM.webcamVideo.classList.remove('hidden');
            DOM.webcamPlaceholder.classList.add('hidden');
            
            DOM.startWebcamBtn.disabled = true;
            DOM.stopWebcamBtn.disabled = false;
            DOM.webcamStatusText.textContent = 'Webcam Status: Connecting to classification channel...';

            // Wait for video metadata so we know real dimensions
            await new Promise((resolve) => {
                if (DOM.webcamVideo.readyState >= 1) { resolve(); return; }
                DOM.webcamVideo.addEventListener('loadedmetadata', resolve, { once: true });
            });

            // Match canvas to actual video dimensions
            const vw = DOM.webcamVideo.videoWidth || 640;
            const vh = DOM.webcamVideo.videoHeight || 480;
            DOM.webcamCanvas.width = vw;
            DOM.webcamCanvas.height = vh;

            // Start continuous render loop (draws live video + overlays onto canvas)
            startWebcamRenderLoop();

            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            const wsUrl = `${protocol}//${window.location.host}/ws/stream`;
            
            state.webcamSocket = new WebSocket(wsUrl);
            
            state.webcamSocket.onopen = () => {
                DOM.webcamStatusText.textContent = 'Webcam Status: Connected. Scanning in real-time...';
                startWebcamCaptureLoop();
            };
            
            state.webcamSocket.onmessage = (event) => {
                const response = JSON.parse(event.data);
                if (response.error) {
                    console.error('WS Prediction Error:', response.error);
                    return;
                }
                // Store latest predictions; render loop will draw them
                state.webcamOverlays = response.predictions || [];
            };
            
            state.webcamSocket.onclose = () => {
                DOM.webcamStatusText.textContent = 'Webcam Status: Classification channel closed.';
                stopWebcam();
            };
            
            state.webcamSocket.onerror = (err) => {
                console.error('WS Error:', err);
                DOM.webcamStatusText.textContent = 'Webcam Status: Connection error.';
            };
            
        } catch (err) {
            console.error('Webcam initialization failed:', err);
            alert('Cannot access camera. Please check camera permissions in your browser settings.');
            DOM.webcamStatusText.textContent = 'Webcam Status: Permission Denied or Camera Offline';
        }
    }

    function stopWebcam() {
        // Cancel render loop
        if (state.webcamRafId) {
            cancelAnimationFrame(state.webcamRafId);
            state.webcamRafId = null;
        }

        if (state.webcamInterval) {
            clearInterval(state.webcamInterval);
            state.webcamInterval = null;
        }
        
        if (state.webcamSocket) {
            try {
                state.webcamSocket.close();
            } catch(e){}
            state.webcamSocket = null;
        }

        if (state.webcamStream) {
            state.webcamStream.getTracks().forEach(track => track.stop());
            state.webcamStream = null;
        }

        state.webcamOverlays = [];

        DOM.webcamVideo.srcObject = null;
        DOM.webcamVideo.classList.add('hidden');
        DOM.webcamPlaceholder.classList.remove('hidden');
        
        DOM.startWebcamBtn.disabled = false;
        DOM.stopWebcamBtn.disabled = true;
        DOM.webcamStatusText.textContent = 'Webcam Status: Offline';
        
        const ctx = DOM.webcamCanvas.getContext('2d');
        ctx.clearRect(0, 0, DOM.webcamCanvas.width, DOM.webcamCanvas.height);
    }

    // Continuous render loop: draws live video frame + stored overlays onto canvas every rAF tick
    function startWebcamRenderLoop() {
        const ctx = DOM.webcamCanvas.getContext('2d');

        function renderFrame() {
            if (!state.webcamStream) return; // stream stopped, exit loop

            ctx.drawImage(DOM.webcamVideo, 0, 0, DOM.webcamCanvas.width, DOM.webcamCanvas.height);

            // Draw stored overlay predictions on top of live feed
            if (state.webcamOverlays && state.webcamOverlays.length > 0) {
                drawWebcamOverlays(ctx, state.webcamOverlays);
            }

            state.webcamRafId = requestAnimationFrame(renderFrame);
        }

        state.webcamRafId = requestAnimationFrame(renderFrame);
    }

    function startWebcamCaptureLoop() {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = DOM.webcamCanvas.width;
        tempCanvas.height = DOM.webcamCanvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        
        state.webcamInterval = setInterval(() => {
            if (!state.webcamSocket || state.webcamSocket.readyState !== WebSocket.OPEN) return;
            
            try {
                tempCtx.drawImage(DOM.webcamVideo, 0, 0, tempCanvas.width, tempCanvas.height);
                
                tempCanvas.toBlob((blob) => {
                    if (blob && state.webcamSocket && state.webcamSocket.readyState === WebSocket.OPEN) {
                        blob.arrayBuffer().then(buffer => {
                            if (state.webcamSocket && state.webcamSocket.readyState === WebSocket.OPEN) {
                                state.webcamSocket.send(buffer);
                            }
                        });
                    }
                }, 'image/jpeg', 0.6);
            } catch(e) {
                console.error('Frame extraction failed:', e);
            }
        }, 330);
    }

    function drawWebcamOverlays(ctx, predictions) {
        const colors = {
            'Low': '#10b981',
            'Moderate': '#f59e0b',
            'High': '#ef4444',
            'mild': '#10b981',
            'moderate': '#f59e0b',
            'severe': '#ef4444'
        };
        
        const filterTask = DOM.webcamModelMode.value;

        predictions.forEach(pred => {
            if (filterTask !== 'auto' && pred.model_type !== filterTask) {
                return;
            }

            const color = colors[pred.severity] || '#3b82f6';
            
            ctx.strokeStyle = color;
            ctx.lineWidth = 3;
            ctx.strokeRect(pred.x1, pred.y1, pred.x2 - pred.x1, pred.y2 - pred.y1);
            
            const label = `[${pred.model_type.toUpperCase()}] ${pred.disease} (${Math.round(pred.confidence * 100)}%)`;
            ctx.font = 'bold 13px system-ui, -apple-system, sans-serif';
            const textWidth = ctx.measureText(label).width;
            
            ctx.fillStyle = color;
            ctx.fillRect(pred.x1 - 1, pred.y1 - 22, textWidth + 12, 22);
            
            ctx.fillStyle = '#ffffff';
            ctx.fillText(label, pred.x1 + 6, pred.y1 - 6);
            
            if (pred.confidence >= 0.35 && pred.disease_details) {
                const matchItem = {
                    disease: pred.disease_details,
                    score: pred.confidence * 100,
                    matchedSymptoms: [],
                    confidence: pred.confidence >= 0.70 ? 'High' : (pred.confidence >= 0.45 ? 'Moderate' : 'Low'),
                    severity: pred.disease_details.severity
                };
                
                state.results = {
                    matches: [matchItem],
                    patientInfo: {},
                    symptomIds: [],
                    overallSeverity: pred.disease_details.severity,
                    followUps: []
                };
                
                renderResults(state.results);
            }
        });
    }

    // ---------- Events ----------
    function bindEvents() {
        // Search
        DOM.symptomSearch.addEventListener('input', handleSearch);
        DOM.symptomSearch.addEventListener('keydown', handleSearchKeydown);
        DOM.symptomSearch.addEventListener('focus', (e) => {
            if (e.target.value.trim().length > 0) handleSearch(e);
        });

        // Close autocomplete on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-wrapper')) {
                hideAutocomplete();
            }
        });

        // Clear all
        DOM.clearAllBtn.addEventListener('click', clearAll);

        // Analyze
        DOM.analyzeBtn.addEventListener('click', runAnalysis);

        // Emergency dismiss
        DOM.emergencyDismiss.addEventListener('click', hideEmergency);

        // Language toggle
        DOM.langToggle.addEventListener('click', toggleLanguage);

        // Theme toggle
        DOM.themeToggle.addEventListener('click', toggleTheme);

        // --- Tabs ---
        DOM.tabSymptoms.addEventListener('click', () => switchTab('symptomsPanel'));
        DOM.tabUpload.addEventListener('click', () => switchTab('uploadPanel'));
        DOM.tabWebcam.addEventListener('click', () => switchTab('webcamPanel'));

        // --- Image Upload ---
        DOM.uploadZone.addEventListener('click', () => DOM.imageFileInput.click());
        DOM.uploadZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            DOM.uploadZone.style.borderColor = '#60a5fa';
        });
        DOM.uploadZone.addEventListener('dragleave', () => {
            DOM.uploadZone.style.borderColor = 'rgba(255, 255, 255, 0.15)';
        });
        DOM.uploadZone.addEventListener('drop', (e) => {
            e.preventDefault();
            DOM.uploadZone.style.borderColor = 'rgba(255, 255, 255, 0.15)';
            if (e.dataTransfer.files.length > 0) {
                handleFileSelect(e.dataTransfer.files[0]);
            }
        });
        DOM.imageFileInput.addEventListener('change', (e) => {
            if (e.target.files.length > 0) {
                handleFileSelect(e.target.files[0]);
            }
        });
        DOM.removeUploadBtn.addEventListener('click', removeUploadedFile);
        DOM.runUploadDiagnoseBtn.addEventListener('click', runImageDiagnosis);

        // --- Webcam Scanner ---
        DOM.startWebcamBtn.addEventListener('click', startWebcam);
        DOM.stopWebcamBtn.addEventListener('click', stopWebcam);
    }

    // ---------- Start ----------
    document.addEventListener('DOMContentLoaded', init);

})();
