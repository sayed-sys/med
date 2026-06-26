// Diseases Database — MedicAI Smart Health Assistant
// 64 diseases across 10 categories with symptoms, weights, home care, diet, and prevention

window.DISEASES = [
  // =========================================================================
  // 1. INFECTIOUS DISEASES (15 Diseases)
  // =========================================================================
  {
    id: "common_cold",
    name: "Common Cold",
    nameHi: "सामान्य सर्दी-जुकाम",
    category: "Infectious Diseases",
    description: "A mild, self-limiting viral infection of the nose and throat, extremely common and highly contagious.",
    descriptionHi: "नाक और गले का एक हल्का, अपने आप ठीक होने वाला वायरल संक्रमण जो बहुत आम और संक्रामक है।",
    symptoms: ["fever", "mild_fever", "runny_nose", "blocked_nose", "sneezing", "sore_throat", "dry_cough", "headache", "fatigue", "watery_eyes"],
    keySymptoms: ["runny_nose", "sneezing", "sore_throat"],
    causes: [
      "Rhinoviruses (most common cause)",
      "Spread through airborne droplets from coughs/sneezes",
      "Direct contact with contaminated surfaces"
    ],
    homeCare: [
      "Steam inhalation once or twice a day to relieve nasal congestion.",
      "Warm saline gargles (salt water) to soothe a sore throat.",
      "Drink warm ginger-tulsi-pepper tea or warm water with honey.",
      "Get plenty of bed rest to help your body fight the virus."
    ],
    diet: [
      "Warm vegetable soups, chicken broth, and herbal teas.",
      "Stay hydrated with warm water, coconut water, or fresh juices.",
      "Avoid cold drinks, ice creams, and excessively oily food."
    ],
    lifestyleTips: [
      "Wash your hands frequently with soap to avoid spreading the virus.",
      "Use a handkerchief or tissue while sneezing/coughing.",
      "Get 7-8 hours of sleep to support the immune system."
    ],
    warningSignsForDoctor: [
      "Fever lasting more than 4-5 days",
      "Difficulty breathing or severe chest tightness",
      "Severe wheezing or persistent high fever"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Maintain distance from infected people.",
      "Keep hands clean and avoid touching your eyes, nose, or mouth.",
      "Boost immunity with a balanced vitamin-rich diet."
    ],
    ageNotes: {
      child: "Very common in kids. Avoid giving aspirin. Monitor for ear pain or breathing trouble.",
      adult: "Usually resolves in 7-10 days with simple home care.",
      elderly: "Monitor closely as it can sometimes progress to chest infections."
    },
    severity: "mild"
  },
  {
    id: "influenza",
    name: "Flu (Influenza)",
    nameHi: "इन्फ्लूएंजा (फ्लू)",
    category: "Infectious Diseases",
    description: "A highly contagious respiratory viral infection causing sudden fever, body aches, headache, and severe fatigue.",
    descriptionHi: "एक अत्यधिक संक्रामक श्वसन वायरल संक्रमण जो अचानक बुखार, बदन दर्द, सिरदर्द और गंभीर थकान का कारण बनता है।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "dry_cough", "sore_throat", "runny_nose", "nausea"],
    keySymptoms: ["high_fever", "body_ache", "fatigue"],
    causes: [
      "Influenza viruses (Types A, B, and C)",
      "Inhaling droplets from infected individuals",
      "Touching contaminated surfaces and then touching face"
    ],
    homeCare: [
      "Take Paracetamol under medical advice to manage high fever and body ache.",
      "Complete rest in bed is essential; avoid physical exertion.",
      "Steam inhalation with eucalyptus oil can ease dry cough."
    ],
    diet: [
      "Drink plenty of warm liquids like herbal decoctions (Kadha), warm milk with turmeric, and soups.",
      "Electrolytes or ORS to prevent dehydration from high fever.",
      "Light, easily digestible foods like porridge, khichdi."
    ],
    lifestyleTips: [
      "Isolate yourself from family members to prevent spread.",
      "Use a mask if you need to interact with others.",
      "Ensure the room is well-ventilated."
    ],
    warningSignsForDoctor: [
      "Shortness of breath or difficulty breathing",
      "Persistent chest pain or pressure",
      "Confusion or inability to wake up fully"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Annual influenza vaccination (Flu shot).",
      "Frequent hand washing and sanitizing.",
      "Avoiding close contact with sick individuals."
    ],
    ageNotes: {
      child: "High risk of complications. Watch for rapid breathing, dehydration, or lethargy.",
      adult: "Usually resolves in 1-2 weeks, though fatigue may linger.",
      elderly: "Highly vulnerable. Early antiviral treatment is often recommended."
    },
    severity: "moderate"
  },
  {
    id: "covid_19",
    name: "COVID-19",
    nameHi: "कोविड-19",
    category: "Infectious Diseases",
    description: "A viral respiratory disease caused by the SARS-CoV-2 virus, ranging from mild cold-like symptoms to severe respiratory distress.",
    descriptionHi: "SARS-CoV-2 वायरस के कारण होने वाली एक वायरल सांस की बीमारी, जो हल्के सर्दी जैसे लक्षणों से लेकर गंभीर सांस की तकलीफ तक हो सकती है।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "sore_throat", "dry_cough", "shortness_of_breath", "loss_of_smell", "loss_of_taste", "diarrhoea"],
    keySymptoms: ["dry_cough", "loss_of_smell", "loss_of_taste", "shortness_of_breath"],
    causes: [
      "Infection with SARS-CoV-2 virus",
      "Airborne transmission via respiratory droplets or aerosols",
      "Close personal contact with an infected person"
    ],
    homeCare: [
      "Isolate in a well-ventilated single room immediately.",
      "Monitor blood oxygen saturation (SpO2) using a pulse oximeter every 6 hours.",
      "Proning (lying on belly) can help improve oxygen levels if breathlessness is mild.",
      "Take Paracetamol for fever as advised by a doctor."
    ],
    diet: [
      "Protein-rich, balanced meals to aid tissue recovery.",
      "Plenty of warm water, citrus juices (Vitamin C), and warm broths.",
      "Easy-to-digest cooked grains."
    ],
    lifestyleTips: [
      "Strict double-masking if leaving the isolation room.",
      "Disinfect high-touch surfaces regularly.",
      "Practice deep breathing exercises once fever subsides."
    ],
    warningSignsForDoctor: [
      "Oxygen levels (SpO2) dropping below 94%",
      "Severe shortness of breath or persistent chest pain",
      "Bluish lips or face, confusion, or severe weakness"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Complete vaccination and booster doses.",
      "Wear high-quality masks (N95) in crowded indoor spaces.",
      "Maintain physical distance and wash hands regularly."
    ],
    ageNotes: {
      child: "Often mild, but watch for persistent high fever, rash, or red eyes (MIS-C signs).",
      adult: "Monitor symptoms daily; most recover fully within 2-3 weeks.",
      elderly: "High risk of rapid deterioration. Monitor oxygen saturation closely."
    },
    severity: "moderate"
  },
  {
    id: "typhoid",
    name: "Typhoid Fever",
    nameHi: "टाइफाइड (मियादी बुखार)",
    category: "Infectious Diseases",
    description: "A serious bacterial infection caused by Salmonella Typhi, characterized by prolonged high fever, abdominal pain, and headache.",
    descriptionHi: "साल्मोनेला टाइफी बैक्टीरिया के कारण होने वाला एक गंभीर संक्रमण, जिसमें लंबे समय तक रहने वाला तेज़ बुखार, पेट दर्द और सिरदर्द होता है।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "loss_of_appetite", "abdominal_pain", "constipation", "diarrhoea", "skin_rash"],
    keySymptoms: ["high_fever", "abdominal_pain", "loss_of_appetite", "weakness"],
    causes: [
      "Salmonella Typhi bacterial infection",
      "Consuming contaminated food or water (fecal-oral route)",
      "Poor sanitation and hygiene standards"
    ],
    homeCare: [
      "Seek medical advice for antibiotic prescription; complete the full course even if you feel better.",
      "Sponge the body with cool tap water to reduce high fever.",
      "Absolute rest is vital to prevent intestinal complications."
    ],
    diet: [
      "Drink boiled and cooled water only. Use ORS generously.",
      "Eat soft, bland foods: khichdi, porridge, mashed bananas, and yogurt.",
      "Avoid raw vegetables, unpeeled fruits, and spicy or fried items."
    ],
    lifestyleTips: [
      "Wash hands thoroughly before eating or preparing food.",
      "Avoid eating food from street vendors.",
      "Keep patient's utensils and towels separate."
    ],
    warningSignsForDoctor: [
      "Severe, sudden abdominal pain",
      "Blood in stool or vomit",
      "Persistent vomiting and inability to keep fluids down"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Typhoid vaccination.",
      "Drink only boiled, filtered, or bottled water.",
      "Maintain strict personal hygiene and food cleanliness."
    ],
    ageNotes: {
      child: "Can cause severe weakness. Early diagnosis via blood test (Widal/blood culture) is key.",
      adult: "Requires 10-14 days of antibiotics and rest.",
      elderly: "Can weaken the heart and GI tract; monitor vital signs closely."
    },
    severity: "severe"
  },
  {
    id: "malaria",
    name: "Malaria",
    nameHi: "मलेरिया",
    category: "Infectious Diseases",
    description: "A mosquito-borne parasitic disease causing episodes of high fever with shivering chills, sweating, and headache.",
    descriptionHi: "मच्छरों द्वारा फैलने वाली एक परजीवी बीमारी जिसके कारण कंपकंपी के साथ तेज़ बुखार, पसीना और सिरदर्द के दौरे पड़ते हैं।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "loss_of_appetite", "nausea", "vomiting", "excessive_sweating"],
    keySymptoms: ["high_fever", "chills", "excessive_sweating"],
    causes: [
      "Plasmodium parasites transmitted via female Anopheles mosquito bite",
      "Blood transfusion from an infected donor (rare)",
      "Congenital transmission (mother to fetus)"
    ],
    homeCare: [
      "Consult a doctor immediately for malaria testing (smear/antigen) and specific anti-malarial drugs.",
      "Keep the patient warm during the shivering phase; sponge with cool water during high fever.",
      "Stay hydrated to replace water lost through sweating."
    ],
    diet: [
      "High-carbohydrate, easily digestible food like rice, toast, boiled potatoes.",
      "Fluids like coconut water, fresh orange juice, and glucose water.",
      "Avoid heavy fats and spicy dishes."
    ],
    lifestyleTips: [
      "Sleep under insecticidal mosquito nets (ITNs).",
      "Use mosquito repellent creams or patches.",
      "Ensure no stagnant water pools exist near your home."
    ],
    warningSignsForDoctor: [
      "Extreme confusion, drowsiness, or fits (signs of Cerebral Malaria)",
      "Yellowing of skin/eyes (Jaundice) or dark-colored urine",
      "Severe vomiting and inability to swallow medicines"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Use mosquito screens on windows.",
      "Spray insecticides in dark corners of the house.",
      "Prophylactic medicines if traveling to highly endemic areas."
    ],
    ageNotes: {
      child: "High risk of rapid anemia and seizures. Get tested immediately.",
      adult: "Requires prompt treatment to prevent progression to severe malaria.",
      elderly: "At risk of kidney or liver complications; closely monitor urine output."
    },
    severity: "severe"
  },
  {
    id: "dengue",
    name: "Dengue Fever",
    nameHi: "डेंगू बुखार",
    category: "Infectious Diseases",
    description: "A painful viral infection spread by Aedes mosquitoes, often called 'breakbone fever' due to severe joint and muscle pain.",
    descriptionHi: "एडीज मच्छरों द्वारा फैलने वाला एक दर्दनाक वायरल संक्रमण, जिसे जोड़ों और मांसपेशियों में तेज़ दर्द के कारण 'हड्डी तोड़ बुखार' भी कहा जाता है।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "severe_headache", "red_eyes", "nausea", "vomiting", "skin_rash", "joint_pain", "muscle_pain", "pain_behind_eyes"],
    keySymptoms: ["high_fever", "joint_pain", "skin_rash", "severe_headache"],
    causes: [
      "Dengue virus (DENV, 4 serotypes)",
      "Bite of an infected Aedes aegypti mosquito (usually bites during daytime)",
      "Aedes albopictus mosquito transmission"
    ],
    homeCare: [
      "Take ONLY Paracetamol for pain/fever. Avoid Ibuprofen, Aspirin, or Diclofenac as they increase bleeding risk.",
      "Drink fresh papaya leaf juice (10-20ml twice daily) under guidance; it may help improve platelet count.",
      "Absolute bed rest is mandatory; monitor platelet counts daily as per doctor's advice."
    ],
    diet: [
      "Aggressive hydration: Drink ORS, coconut water, fresh pomegranate/kiwi juice, and clear soups.",
      "Eat light, nutrient-dense food like boiled lentils (dal) and soft rice.",
      "Avoid dark-colored foods (like chocolate or dark juices) which can mask blood in stools."
    ],
    lifestyleTips: [
      "Wear full-sleeved clothing and long pants, especially during the day.",
      "Empty, clean, and dry water storage containers weekly to prevent mosquito breeding.",
      "Use mosquito nets and repellent vaporizers."
    ],
    warningSignsForDoctor: [
      "Bleeding from gums or nose, or tiny red spots on skin (petechiae)",
      "Severe abdominal pain and persistent vomiting",
      "Sudden drop in platelet count, cold clammy hands, or extreme weakness"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Eliminate standing water in flowerpots, coolers, and old tires.",
      "Support municipal fogging and larvae control programs."
    ],
    ageNotes: {
      child: "At higher risk of Dengue Hemorrhagic Fever. Watch for extreme lethargy or bleeding signs.",
      adult: "Muscle and joint pains can be very severe and persist for weeks during recovery.",
      elderly: "Underlying cardiovascular conditions require careful fluid monitoring to avoid overload."
    },
    severity: "severe"
  },
  {
    id: "chikungunya",
    name: "Chikungunya",
    nameHi: "चिकनगुनिया",
    category: "Infectious Diseases",
    description: "A viral disease spread by mosquitoes, causing sudden high fever and debilitating, long-lasting joint pain.",
    descriptionHi: "मच्छरों द्वारा फैलने वाली एक वायरल बीमारी, जिसके कारण अचानक तेज़ बुखार और जोड़ों में बहुत तेज़ व लंबे समय तक रहने वाला दर्द होता है।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "nausea", "skin_rash", "joint_pain", "joint_swelling", "joint_stiffness", "muscle_pain"],
    keySymptoms: ["high_fever", "joint_pain", "joint_swelling", "joint_stiffness"],
    causes: [
      "Chikungunya virus (CHIKV)",
      "Bite of infected Aedes aegypti or Aedes albopictus mosquitoes"
    ],
    homeCare: [
      "Take Paracetamol for fever. Consult a doctor for anti-inflammatory medications if joint pain is severe.",
      "Apply cold compresses or ice packs to swollen, painful joints.",
      "Gentle stretching exercises once the acute fever phase passes."
    ],
    diet: [
      "Stay well-hydrated with water, coconut water, and herbal broths.",
      "Eat foods rich in Omega-3 (walnuts, flaxseeds) and Vitamin C to combat inflammation.",
      "Bland, easy-to-chew diet."
    ],
    lifestyleTips: [
      "Rest joints in comfortable positions.",
      "Avoid heavy physical work or intense workouts during recovery.",
      "Use mosquito nets and repellents at home."
    ],
    warningSignsForDoctor: [
      "Inability to move due to extreme pain",
      "High fever not responding to medication",
      "Neurological symptoms like confusion or extreme drowsiness"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Prevent mosquito breeding by eliminating standing water.",
      "Keep windows screened and wear protective clothing."
    ],
    ageNotes: {
      child: "Usually milder, but can present with skin blistering or rashes.",
      adult: "Joint pains can become chronic, lasting for months or even years.",
      elderly: "Severe joint stiffness can significantly restrict mobility. Physiotherapy may be needed."
    },
    severity: "moderate"
  },
  {
    id: "tuberculosis",
    name: "Tuberculosis (TB)",
    nameHi: "तपेदिक (टीबी)",
    category: "Infectious Diseases",
    description: "A serious bacterial infection primarily affecting the lungs, causing persistent wet cough, blood in sputum, fever, and weight loss.",
    descriptionHi: "फेफड़ों को प्रभावित करने वाला एक गंभीर जीवाणु संक्रमण, जिससे लंबे समय तक बलगम वाली खांसी, थूक में खून आना, बुखार और वज़न कम होना होता है।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "weight_loss", "night_sweats", "loss_of_appetite", "wet_cough", "cough_with_blood", "chest_pain", "shortness_of_breath"],
    keySymptoms: ["wet_cough", "cough_with_blood", "weight_loss", "night_sweats"],
    causes: [
      "Mycobacterium tuberculosis bacterial infection",
      "Inhaling microscopic droplets from coughs/sneezes of an infected person",
      "Weakened immune system (malnutrition, HIV, diabetes)"
    ],
    homeCare: [
      "Must consult a doctor immediately for sputum and chest X-ray testing.",
      "Strictly adhere to the DOTS (Directly Observed Treatment Short-course) regimen; never skip doses.",
      "Cover your mouth with a mask or cloth to prevent transmitting the bacteria to family."
    ],
    diet: [
      "High-protein, high-calorie diet is crucial: milk, eggs, paneer, sprouts, lentils, and bananas.",
      "Ensure adequate intake of vitamins (especially A, B-complex, C, D) and zinc.",
      "Avoid alcohol, smoking, and highly processed junk foods."
    ],
    lifestyleTips: [
      "Ensure excellent ventilation and sunlight in the patient's room (UV rays kill TB bacteria).",
      "Dispose of sputum/tissues safely in closed bins.",
      "Get plenty of rest and avoid strenuous physical labor."
    ],
    warningSignsForDoctor: [
      "Coughing up large quantities of blood",
      "Severe chest pain or extreme shortness of breath",
      "Yellowing of skin or eyes (can be a side effect of TB drugs)"
    ],
    urgency: "within_24hrs",
    prevention: [
      "BCG vaccination in infants.",
      "Maintain a healthy immune system.",
      "Early screening of close contacts of active TB patients."
    ],
    ageNotes: {
      child: "Can manifest as swollen neck glands or abdominal symptoms. Needs early pediatric evaluation.",
      adult: "Requires 6-9 months of daily medication. Compliance is the single most important factor.",
      elderly: "May present with atypical symptoms like general decline, confusion, or low fever; often misdiagnosed."
    },
    severity: "severe"
  },
  {
    id: "hepatitis_a",
    name: "Hepatitis A",
    nameHi: "हेपेटाइटिस ए",
    category: "Infectious Diseases",
    description: "A highly contagious liver infection caused by the Hepatitis A virus, leading to severe fatigue, jaundice, and dark urine.",
    descriptionHi: "हेपेटाइटिस ए वायरस के कारण होने वाला एक अत्यधिक संक्रामक यकृत (लीवर) संक्रमण, जिससे गंभीर थकान, पीलिया और गहरा मूत्र होता है।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "loss_of_appetite", "nausea", "vomiting", "abdominal_pain", "upper_abdominal_pain", "yellowish_skin", "yellowish_eyes", "strong_urine_odor", "itching"],
    keySymptoms: ["yellowish_eyes", "yellowish_skin", "loss_of_appetite", "nausea"],
    causes: [
      "Hepatitis A Virus (HAV) infection",
      "Consuming water or food contaminated with infected fecal matter",
      "Poor hand hygiene and close contact with an infected person"
    ],
    homeCare: [
      "Rest is primary; the liver needs time to heal. Avoid any self-medication as the liver is inflamed.",
      "Do NOT take paracetamol or other pain remedies without doctor's permission.",
      "Apply cool damp cloths for itching if present."
    ],
    diet: [
      "Eat small, frequent, low-fat, and easily digestible meals.",
      "High carbohydrate intake: sugarcane juice (fresh and hygienic), coconut water, glucose water, honey.",
      "Avoid all fats, ghee, oil, butter, and heavy spices until liver enzymes normalize."
    ],
    lifestyleTips: [
      "Wash hands thoroughly after using the washroom and before handling food.",
      "Strictly avoid alcohol, which puts severe pressure on the inflamed liver.",
      "Keep toilets clean and sanitized."
    ],
    warningSignsForDoctor: [
      "Severe, persistent vomiting causing dehydration",
      "Extreme drowsiness, confusion, or changes in mental state (signs of liver failure)",
      "Bleeding from nose or gums"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Hepatitis A vaccine.",
      "Drink purified, filtered, or boiled water.",
      "Maintain hygiene in kitchens and clean vegetables/fruits thoroughly."
    ],
    ageNotes: {
      child: "Often very mild or asymptomatic in children under 6 years.",
      adult: "Can cause severe illness lasting several weeks or months, though recovery is usually complete.",
      elderly: "Higher risk of acute liver failure. Requires close monitoring."
    },
    severity: "moderate"
  },
  {
    id: "hepatitis_b",
    name: "Hepatitis B",
    nameHi: "हेपेटाइटिस बी",
    category: "Infectious Diseases",
    description: "A serious liver infection caused by the Hepatitis B virus, which can become chronic and lead to liver cirrhosis or cancer.",
    descriptionHi: "हेपेटाइटिस बी वायरस के कारण होने वाला एक गंभीर यकृत संक्रमण, जो पुराना (क्रोनिक) हो सकता है और लीवर सिरोसिस या कैंसर का रूप ले सकता है।",
    symptoms: ["fever", "fatigue", "weakness", "loss_of_appetite", "nausea", "vomiting", "abdominal_pain", "yellowish_skin", "yellowish_eyes", "joint_pain", "strong_urine_odor"],
    keySymptoms: ["yellowish_eyes", "yellowish_skin", "fatigue", "abdominal_pain"],
    causes: [
      "Hepatitis B Virus (HBV)",
      "Contact with infectious blood, semen, or other body fluids",
      "Sharing contaminated needles or syringes",
      "Mother to child during childbirth"
    ],
    homeCare: [
      "Consult a gastroenterologist/hepatologist for specific blood tests (HBsAg, viral load).",
      "Avoid any unnecessary medications, herbal supplements, or alcohol that stress the liver.",
      "Inform sexual partners so they can get tested and vaccinated."
    ],
    diet: [
      "Bland, low-fat diet. Fresh fruits, green leafy vegetables (well-cooked), and whole grains.",
      "Adequate hydration but avoid sugary soda drinks.",
      "Avoid oily, fried, and highly processed food."
    ],
    lifestyleTips: [
      "Cover all open cuts or wounds.",
      "Do not share razors, toothbrushes, or nail clippers.",
      "Practice safe sex (use condoms)."
    ],
    warningSignsForDoctor: [
      "Swelling in abdomen (ascites) or legs",
      "Confusion, disorientation, or extreme lethargy",
      "Vomiting blood or passing black, tarry stools"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Hepatitis B vaccination (highly effective 3-dose series).",
      "Screening blood donations.",
      "Using sterile needles and syringes."
    ],
    ageNotes: {
      child: "Infants infected at birth have a 90% risk of developing chronic infection. Immediate vaccination is vital.",
      adult: "Most adults (95%) recover completely from acute HBV and develop immunity.",
      elderly: "Increased risk of chronic liver damage and complications."
    },
    severity: "severe"
  },
  {
    id: "hepatitis_e",
    name: "Hepatitis E",
    nameHi: "हेपेटाइटिस ई",
    category: "Infectious Diseases",
    description: "A waterborne viral liver infection causing jaundice, common in developing regions due to contaminated drinking water.",
    descriptionHi: "पानी के ज़रिए फैलने वाला यकृत का एक वायरल संक्रमण जिसके कारण पीलिया होता है, यह दूषित पेयजल के कारण बहुत आम है।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "loss_of_appetite", "nausea", "vomiting", "abdominal_pain", "yellowish_skin", "yellowish_eyes", "joint_pain", "strong_urine_odor"],
    keySymptoms: ["yellowish_eyes", "yellowish_skin", "loss_of_appetite", "nausea"],
    causes: [
      "Hepatitis E Virus (HEV)",
      "Drinking water contaminated with fecal matter",
      "Consuming undercooked meat from infected animals (less common in India)"
    ],
    homeCare: [
      "Rest and avoid self-medication.",
      "Pregnant women with jaundice must be hospitalized immediately.",
      "Monitor liver function tests (bilirubin, SGOT, SGPT) under medical guidance."
    ],
    diet: [
      "Easily digestible, carbohydrate-rich, low-protein, low-fat diet.",
      "Sugarcane juice (prepared hygienically), glucose water, radish juice, coconut water.",
      "Avoid fatty foods, heavy pulses, spices, and ghee."
    ],
    lifestyleTips: [
      "Ensure all drinking water is boiled or treated.",
      "Wash hands with soap before eating and after toilet use.",
      "Keep household water storage covered."
    ],
    warningSignsForDoctor: [
      "Pregnancy with any signs of jaundice",
      "Confusion, persistent vomiting, or bleeding",
      "Progressively darkening urine or worsening jaundice"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Safe disposal of sewage and clean public water supply.",
      "Avoiding untreated water, especially during monsoon season.",
      "Good hygiene in food handling."
    ],
    ageNotes: {
      child: "Often asymptomatic or very mild in young children.",
      adult: "Usually self-limiting, resolving in 2-6 weeks.",
      elderly: "Can cause severe acute liver failure, especially in those with pre-existing liver diseases."
    },
    severity: "severe"
  },
  {
    id: "chicken_pox",
    name: "Chickenpox",
    nameHi: "चेचक (छोटी माता)",
    category: "Infectious Diseases",
    description: "A highly contagious viral disease causing an itchy, blister-like rash all over the body, accompanied by fever.",
    descriptionHi: "एक अत्यधिक संक्रामक वायरल बीमारी जिसके कारण पूरे शरीर पर खुजली वाले, पानी से भरे दाने (फफोले) हो जाते हैं और साथ में बुखार आता है।",
    symptoms: ["fever", "mild_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "loss_of_appetite", "skin_rash", "itching", "blisters"],
    keySymptoms: ["blisters", "itching", "mild_fever"],
    causes: [
      "Varicella-Zoster Virus (VZV) infection",
      "Direct contact with chickenpox blisters",
      "Inhaling droplets from coughs/sneezes of an infected person"
    ],
    homeCare: [
      "Apply Calamine lotion to rashes to soothe itching.",
      "Lukewarm baths with baking soda or colloidal oatmeal can reduce itching.",
      "Keep fingernails short to prevent scratching, which causes scarring and secondary infections.",
      "Wear loose, soft cotton clothing."
    ],
    diet: [
      "Cold, soft, bland foods (like yogurt, porridge) if blisters develop inside the mouth.",
      "Drink plenty of fluids (coconut water, milkshakes, water) to stay hydrated.",
      "Avoid spicy, salty, or acidic foods."
    ],
    lifestyleTips: [
      "Isolate the patient until all blisters have crusted over (usually 5-7 days).",
      "Wash the patient's clothes, bedding, and towels separately in warm water.",
      "Do not give Aspirin to children with chickenpox (risk of Reye's Syndrome)."
    ],
    warningSignsForDoctor: [
      "Rash spreading to the eyes",
      "Severe redness, warmth, or pus in the blisters (signs of bacterial infection)",
      "Difficulty breathing, severe cough, or high fever with confusion"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Varicella vaccination (2 doses).",
      "Avoiding contact with infected individuals."
    ],
    ageNotes: {
      child: "Commonly mild, but requires care. Use paracetamol for fever; never aspirin.",
      adult: "Can be severe and lead to pneumonia. Antiviral treatment (Acyclovir) is often prescribed.",
      elderly: "If exposed, they can develop Shingles (Herpes Zoster) later in life."
    },
    severity: "moderate"
  },
  {
    id: "measles",
    name: "Measles",
    nameHi: "खसरा",
    category: "Infectious Diseases",
    description: "A serious viral infection common in children, characterized by high fever, dry cough, runny nose, and a red skin rash.",
    descriptionHi: "बच्चों में होने वाला एक गंभीर वायरल संक्रमण, जिसमें तेज़ बुखार, सूखी खांसी, बहती नाक और त्वचा पर लाल दाने होते हैं।",
    symptoms: ["fever", "high_fever", "fatigue", "weakness", "red_eyes", "watery_eyes", "light_sensitivity", "runny_nose", "sneezing", "sore_throat", "dry_cough", "skin_rash", "body_ache"],
    keySymptoms: ["skin_rash", "high_fever", "red_eyes", "dry_cough"],
    causes: [
      "Measles virus (a paramyxovirus)",
      "Inhaling respiratory droplets from an infected person's cough or sneeze",
      "Touching contaminated surfaces and then touching face"
    ],
    homeCare: [
      "Keep the patient in a dim room; light sensitivity is common.",
      "Give Paracetamol for fever as recommended by a doctor.",
      "Vitamin A supplementation (prescribed by doctor) is critical to prevent complications."
    ],
    diet: [
      "Plenty of fluids to prevent dehydration: warm broths, ORS, juices.",
      "Soft, easily digestible meals: khichdi, mashed rice, banana.",
      "Warm milk."
    ],
    lifestyleTips: [
      "Isolate the child/adult from non-immunized people.",
      "Ensure proper rest and minimal physical activity."
    ],
    warningSignsForDoctor: [
      "Shortness of breath or rapid breathing",
      "Severe ear pain (otitis media) or persistent vomiting",
      "Extreme sleepiness, confusion, or fits"
    ],
    urgency: "within_24hrs",
    prevention: [
      "MMR (Measles, Mumps, Rubella) vaccine.",
      "Proper isolation of cases."
    ],
    ageNotes: {
      child: "High risk of complications (pneumonia, brain inflammation) in malnourished children.",
      adult: "Can be severe with high fever and respiratory problems.",
      elderly: "Highly dangerous if unvaccinated; immediate medical care required."
    },
    severity: "severe"
  },
  {
    id: "mumps",
    name: "Mumps",
    nameHi: "गलसुआ",
    category: "Infectious Diseases",
    description: "A contagious viral illness causing painful swelling of the salivary glands (parotid glands) below and in front of the ears.",
    descriptionHi: "एक संक्रामक वायरल बीमारी जिसके कारण कानों के नीचे और सामने स्थित लार ग्रंथियों (पैरोटिड ग्रंथियों) में दर्दनाक सूजन हो जाती है।",
    symptoms: ["fever", "mild_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "loss_of_appetite", "sore_throat", "swollen_face", "ear_pain"],
    keySymptoms: ["swollen_face", "ear_pain", "mild_fever"],
    causes: [
      "Mumps virus (paramyxovirus family)",
      "Direct contact with saliva or respiratory droplets of an infected person",
      "Sharing cups, plates, or utensils with an infected person"
    ],
    homeCare: [
      "Apply warm or cold compresses to the swollen jaw to relieve pain.",
      "Take Paracetamol for pain and fever under medical supervision.",
      "Avoid acidic foods and beverages that stimulate salivary flow and cause pain."
    ],
    diet: [
      "Eat soft foods that require minimal chewing: yogurt, soups, mashed potatoes, porridge.",
      "Stay hydrated by drinking plenty of water, milk, or non-acidic juices."
    ],
    lifestyleTips: [
      "Isolate the patient for at least 5 days after the swelling begins.",
      "Ensure rest and restrict physical activities."
    ],
    warningSignsForDoctor: [
      "Severe headache, stiff neck, or confusion (meningitis signs)",
      "Painful, swollen testicles in post-pubertal males (orchitis)",
      "Severe abdominal pain or vomiting (pancreatitis signs)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "MMR vaccine.",
      "Good personal hygiene."
    ],
    ageNotes: {
      child: "Generally mild, swelling typically subsides in 7-10 days.",
      adult: "Higher risk of complications like testicular inflammation in men, or ovarian inflammation in women.",
      elderly: "Rare, but requires careful symptom management."
    },
    severity: "moderate"
  },
  {
    id: "rabies",
    name: "Rabies",
    nameHi: "रेबीज",
    category: "Infectious Diseases",
    description: "A fatal viral disease transmitted through the bite of an infected animal, affecting the central nervous system.",
    descriptionHi: "एक घातक वायरल बीमारी जो संक्रमित जानवर के काटने से फैलती है और केंद्रीय तंत्रिका तंत्र को प्रभावित करती है।",
    symptoms: ["fever", "headache", "fatigue", "weakness", "nausea", "vomiting", "anxiety", "restlessness", "difficulty_concentrating", "pins_and_needles", "muscle_pain"],
    keySymptoms: ["fever", "anxiety", "pins_and_needles"],
    causes: [
      "Rabies virus transmitted through saliva of infected mammals (dogs, monkeys, bats, cats)",
      "Animal bites or deep scratches",
      "Licks on broken skin or mucous membranes"
    ],
    homeCare: [
      "IMMEDIATE FIRST AID: Wash the animal bite wound thoroughly with soap and running water for at least 15 minutes.",
      "Apply antiseptic liquid (like Povidone-Iodine or alcohol) to the wound.",
      "Go to a hospital or vaccination center IMMEDIATELY. Do not tie, bandage, or stitch the wound unless advised by a doctor.",
      "Never attempt any home remedies or traditional treatments for animal bites."
    ],
    diet: [
      "Normal diet as tolerated before symptoms develop.",
      "No food restrictions, but prompt medical prophylaxis is the only lifesaver."
    ],
    lifestyleTips: [
      "Keep domestic pets vaccinated.",
      "Avoid handling wild or stray animals.",
      "Supervise children around animals."
    ],
    warningSignsForDoctor: [
      "ANY animal bite, scratch, or lick on broken skin is an emergency",
      "Fear of water (hydrophobia) or fear of air (aerophobia)",
      "Aggression, confusion, or difficulty swallowing"
    ],
    urgency: "emergency",
    prevention: [
      "Post-Exposure Prophylaxis (PEP): Rabies vaccine + Rabies Immunoglobulin (HRIG) as prescribed.",
      "Pre-exposure vaccination for high-risk workers."
    ],
    ageNotes: {
      child: "High risk as they may hide bites or scratches. Always check kids after stray animal interactions.",
      adult: "Immediate vaccination is 100% effective; once symptoms appear, it is fatal.",
      elderly: "Immediate post-exposure vaccination is required regardless of age."
    },
    severity: "severe"
  },

  // =========================================================================
  // 2. DIGESTIVE DISORDERS (9 Diseases)
  // =========================================================================
  {
    id: "gastroenteritis",
    name: "Gastroenteritis (Stomach Flu)",
    nameHi: "गैस्ट्रोएंटेराइटिस (पेट का संक्रमण)",
    category: "Digestive Disorders",
    description: "Inflammation of the stomach and intestines caused by viral or bacterial infection, causing vomiting and watery diarrhoea.",
    descriptionHi: "वायरल या बैक्टीरियर संक्रमण के कारण पेट और आंतों में सूजन, जिससे उल्टी और दस्त होते हैं।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "dehydration", "headache", "abdominal_pain", "stomach_cramps", "nausea", "vomiting", "diarrhoea"],
    keySymptoms: ["diarrhoea", "vomiting", "stomach_cramps"],
    causes: [
      "Rotavirus or Norovirus infection",
      "Bacterial infections (E. coli, Campylobacter)",
      "Consuming contaminated water or food"
    ],
    homeCare: [
      "Drink ORS (Oral Rehydration Salts) solution slowly in sips.",
      "Take rest and keep stomach warm.",
      "Avoid anti-diarrheal medicines unless specifically prescribed by a doctor."
    ],
    diet: [
      "BRAT diet: Bananas, Rice (soft boiled), Applesauce, Toast.",
      "Buttermilk (chaas) with roasted cumin powder, coconut water.",
      "Avoid dairy products, caffeine, alcohol, and spicy/oily food."
    ],
    lifestyleTips: [
      "Wash hands thoroughly after washroom and before meals.",
      "Sanitize toilets and shared areas.",
      "Drink boiled or RO-purified water."
    ],
    warningSignsForDoctor: [
      "Signs of severe dehydration: no urine for 8 hours, dry mouth, sunken eyes",
      "Inability to keep any fluids down for over 24 hours",
      "High fever or blood in stool"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Practice good hand hygiene.",
      "Avoid eating uncovered food from outside.",
      "Ensure clean drinking water supply."
    ],
    ageNotes: {
      child: "Dehydration can happen rapidly. Give ORS after every loose motion. Consult a pediatrician.",
      adult: "Usually resolves in 2-3 days with hydration.",
      elderly: "Highly susceptible to kidney strain from dehydration; monitor fluid intake closely."
    },
    severity: "moderate"
  },
  {
    id: "food_poisoning",
    name: "Food Poisoning",
    nameHi: "फूड पॉइजनिंग (खाद्य विषाक्तता)",
    category: "Digestive Disorders",
    description: "An illness caused by eating contaminated, spoiled, or toxic food, presenting with rapid onset of nausea, vomiting, and diarrhoea.",
    descriptionHi: "दूषित, सड़ा हुआ या विषैला भोजन खाने से होने वाली बीमारी, जिसमें मतली, उल्टी और दस्त की समस्या तुरंत शुरू हो जाती है।",
    symptoms: ["fever", "mild_fever", "chills", "fatigue", "weakness", "dehydration", "abdominal_pain", "stomach_cramps", "nausea", "vomiting", "diarrhoea"],
    keySymptoms: ["vomiting", "diarrhoea", "stomach_cramps", "nausea"],
    causes: [
      "Toxins produced by bacteria (Staphylococcus, Bacillus cereus) in food",
      "Eating stale, undercooked, or unhygienic food",
      "Improper refrigeration of cooked food"
    ],
    homeCare: [
      "Allow the stomach to settle; avoid solid food for a few hours.",
      "Sip water, weak tea, or ORS to maintain fluid balance.",
      "Rest is essential."
    ],
    diet: [
      "Gradually introduce bland foods: crackers, rice, bananas, porridge.",
      "Coconut water, barley water, ORS.",
      "Strictly avoid spicy, oily, fatty foods, milk, and cheese."
    ],
    lifestyleTips: [
      "Never eat food that smells off or has been left open.",
      "Wash hands, cutting boards, and knives before cooking.",
      "Reheat food thoroughly before consumption."
    ],
    warningSignsForDoctor: [
      "Frequent vomiting and inability to keep liquids down",
      "Bloody stools or blood in vomit",
      "Extreme abdominal pain, high fever, or blurry vision"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Keep hot foods hot and cold foods cold.",
      "Avoid street food during hot, humid summers and monsoons.",
      "Check expiration dates."
    ],
    ageNotes: {
      child: "Can lead to quick dehydration. Seek medical advice if vomiting persists.",
      adult: "Often recovers in 24-48 hours without specific treatment.",
      elderly: "Monitor closely for heart/kidney stress due to sudden fluid loss."
    },
    severity: "moderate"
  },
  {
    id: "appendicitis",
    name: "Appendicitis",
    nameHi: "अपेंडिसाइटिस (अपेंडिक्स में सूजन)",
    category: "Digestive Disorders",
    description: "A painful inflammation of the appendix that requires emergency surgical removal to prevent rupture.",
    descriptionHi: "अपेंडिक्स की एक दर्दनाक सूजन जिसके फटने से रोकने के लिए तुरंत सर्जरी द्वारा बाहर निकालने की आवश्यकता होती है।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "loss_of_appetite", "abdominal_pain", "nausea", "vomiting", "lower_right_abdominal_pain", "constipation", "diarrhoea"],
    keySymptoms: ["lower_right_abdominal_pain", "nausea", "vomiting", "loss_of_appetite"],
    causes: [
      "Blockage in the lining of the appendix (by stool, foreign bodies, or infection)",
      "Bacterial multiplication leading to swelling and pus formation"
    ],
    homeCare: [
      "Do NOT take any laxatives, pain killers, or apply heating pads to the abdomen (this can cause the appendix to rupture).",
      "Go to a hospital surgical emergency immediately.",
      "Keep fasting (do not eat or drink anything) in case surgery is needed."
    ],
    diet: [
      "Nothing by mouth (NPO) until evaluated by a surgeon."
    ],
    lifestyleTips: [
      "Recognize the pain path: starts around the belly button and shifts to the lower right abdomen.",
      "Seek emergency medical evaluation."
    ],
    warningSignsForDoctor: [
      "Severe pain in the lower right abdomen",
      "Pain increases with coughing, walking, or sudden movements",
      "High fever with worsening abdominal rigidity"
    ],
    urgency: "emergency",
    prevention: [
      "No specific prevention; a high-fiber diet may help lower risk of fecal blockage."
    ],
    ageNotes: {
      child: "Often presents with atypical pain, crying, or vomiting. Always get abdominal pain in children evaluated.",
      adult: "Classic symptoms; requires immediate ultrasound/CT scan and surgery.",
      elderly: "Symptoms may be milder, but risk of rupture is higher. Prompt check-up is key."
    },
    severity: "severe"
  },
  {
    id: "ibs",
    name: "Irritable Bowel Syndrome (IBS)",
    nameHi: "इरिटेबल बॉवेल सिंड्रोम (आईबीएस)",
    category: "Digestive Disorders",
    description: "A common chronic gastrointestinal disorder affecting the large intestine, causing cramping, bloating, gas, and altered bowel habits.",
    descriptionHi: "बड़ी आंत को प्रभावित करने वाला एक सामान्य पुराना रोग, जिससे पेट में ऐंठन, गैस, पेट फूलना और दस्त या कब्ज की समस्या होती है।",
    symptoms: ["fatigue", "abdominal_pain", "stomach_cramps", "bloating", "diarrhoea", "constipation", "mucus_in_stool", "frequent_bowel_movements", "anxiety", "sleep_difficulty"],
    keySymptoms: ["abdominal_pain", "bloating", "diarrhoea", "constipation"],
    causes: [
      "Abnormal muscle contractions in the intestine",
      "Nervous system abnormalities in the gut",
      "Gut dysbiosis (microbiome imbalance)",
      "Triggered by stress, anxiety, and specific foods"
    ],
    homeCare: [
      "Keep a food diary to identify trigger foods.",
      "Practice stress-relief techniques like meditation, deep breathing, or yoga.",
      "Apply warm water bottle to abdomen during cramp episodes."
    ],
    diet: [
      "Increase dietary fiber gradually (if constipation-prone).",
      "Try a low-FODMAP diet (limit wheat, onions, garlic, dairy, certain fruits).",
      "Drink peppermint tea or warm water; eat small, regular meals.",
      "Avoid carbonated drinks, alcohol, caffeine, and gas-producing foods (cabbage, beans)."
    ],
    lifestyleTips: [
      "Maintain a regular sleep schedule.",
      "Exercise regularly (e.g., 30 minutes of walking daily).",
      "Avoid eating meals in a hurry."
    ],
    warningSignsForDoctor: [
      "Unintentional weight loss",
      "Blood in stool or rectal bleeding",
      "Persistent diarrhea at night that wakes you up"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Cannot be prevented entirely, but lifestyle changes can reduce flare-up frequency."
    ],
    ageNotes: {
      child: "Can affect school-going kids. Focus on stress relief and dietary adjustments.",
      adult: "Commonly diagnosed in young adults under 45. Linked with stress and anxiety.",
      elderly: "New onset of bowel symptoms in elderly always requires diagnostic testing to rule out other pathology."
    },
    severity: "moderate"
  },
  {
    id: "gerd",
    name: "GERD (Acid Reflux)",
    nameHi: "जीईआरडी (अम्ल पित्त/एसिड रिफ्लक्स)",
    category: "Digestive Disorders",
    description: "A chronic digestive disease where stomach acid frequently flows back into the food pipe, irritating the lining.",
    descriptionHi: "एक पुरानी पाचन संबंधी बीमारी जिसमें पेट का एसिड बार-बार भोजन नली में वापस चला जाता है, जिससे भोजन नली में जलन होती है।",
    symptoms: ["headache", "sore_throat", "dry_cough", "hoarse_voice", "chest_pain", "chest_tightness", "abdominal_pain", "nausea", "bloating", "acidity", "heartburn"],
    keySymptoms: ["heartburn", "acidity", "chest_pain", "nausea"],
    causes: [
      "Weakness or relaxation of the lower esophageal sphincter (LES)",
      "Hiatal hernia",
      "Obesity and smoking",
      "Eating heavy meals and lying down immediately"
    ],
    homeCare: [
      "Elevate the head of your bed by 6-9 inches using blocks.",
      "Do not lie down for at least 2-3 hours after eating a meal.",
      "Wear loose-fitting clothing around the waist."
    ],
    diet: [
      "Eat smaller, more frequent meals.",
      "Drink cold milk (without sugar) or coconut water for immediate acidity relief.",
      "Avoid spicy foods, tomatoes, citrus fruits, chocolate, caffeine, mint, and fried items."
    ],
    lifestyleTips: [
      "Quit smoking and limit alcohol consumption.",
      "Maintain a healthy weight.",
      "Avoid late-night dinners."
    ],
    warningSignsForDoctor: [
      "Difficulty swallowing (dysphagia) or feeling like food is stuck",
      "Unexplained weight loss",
      "Chest pain that radiates to the arm or jaw (always rule out cardiac issues first)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Adopt a healthy diet and eat slowly.",
      "Avoid tight belts or clothing.",
      "Stay active."
    ],
    ageNotes: {
      child: "Can occur in infants; consult pediatrician for feeding advice.",
      adult: "Very common due to modern dietary habits and stress.",
      elderly: "Increased risk of esophageal damage. May present with respiratory symptoms like night cough."
    },
    severity: "mild"
  },
  {
    id: "peptic_ulcer",
    name: "Peptic Ulcer",
    nameHi: "पेप्टिक अल्सर (पेट का छाला)",
    category: "Digestive Disorders",
    description: "Painful sores that develop on the lining of the stomach, small intestine, or esophagus, often causing burning stomach pain.",
    descriptionHi: "पेट, छोटी आंत या भोजन नली के अंदर होने वाले दर्दनाक घाव (नाले), जो अक्सर पेट में जलन और दर्द का कारण बनते हैं।",
    symptoms: ["fatigue", "weakness", "weight_loss", "loss_of_appetite", "headache", "abdominal_pain", "nausea", "vomiting", "acidity", "heartburn", "blood_in_vomit", "upper_abdominal_pain", "blood_in_stool", "dark_stool"],
    keySymptoms: ["upper_abdominal_pain", "heartburn", "nausea", "dark_stool"],
    causes: [
      "Infection with Helicobacter pylori (H. pylori) bacteria",
      "Long-term use of NSAID painkillers (Aspirin, Ibuprofen, Diclofenac)",
      "Excessive alcohol, smoking, and stress (can worsen symptoms)"
    ],
    homeCare: [
      "Consult a doctor for H. pylori testing and proton pump inhibitors (PPIs) prescription.",
      "Strictly avoid self-medicating with NSAID painkillers; use Paracetamol if pain relief is needed.",
      "Avoid smoking and alcohol as they prevent ulcer healing."
    ],
    diet: [
      "Eat foods rich in antioxidants: apples, berries, broccoli, yogurt.",
      "Drink cabbage juice (known to support gut healing), cold milk, and plenty of water.",
      "Avoid chilies, black pepper, caffeine, citrus juices, and fried food."
    ],
    lifestyleTips: [
      "Practice stress management through deep breathing or yoga.",
      "Eat meals at fixed times daily.",
      "Wash hands properly to avoid H. pylori infection."
    ],
    warningSignsForDoctor: [
      "Sudden, severe, sharp stomach pain (indicates ulcer perforation - Emergency)",
      "Vomiting blood (looks like coffee grounds)",
      "Black, tarry stools (indicates internal bleeding)"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Limit the use of NSAID painkillers.",
      "Maintain food and water hygiene."
    ],
    ageNotes: {
      child: "Rare in children, but can occur. Pediatric specialist consult is required.",
      adult: "Often related to stress, H. pylori, or painkillers.",
      elderly: "Ulcers are more likely to bleed silently in the elderly. Watch for anemia, pale skin, or dark stools."
    },
    severity: "severe"
  },
  {
    id: "jaundice",
    name: "Jaundice",
    nameHi: "पीलिया",
    category: "Digestive Disorders",
    description: "A yellow discoloration of the skin and eyes caused by high levels of bilirubin in the blood, indicating liver or gallbladder dysfunction.",
    descriptionHi: "रक्त में बिलीरुबिन का स्तर बढ़ने के कारण त्वचा और आँखों का पीला होना, जो लीवर या पित्ताशय की खराबी का संकेत है।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "loss_of_appetite", "nausea", "vomiting", "abdominal_pain", "upper_abdominal_pain", "yellowish_skin", "yellowish_eyes", "strong_urine_odor", "itching"],
    keySymptoms: ["yellowish_eyes", "yellowish_skin", "strong_urine_odor", "loss_of_appetite"],
    causes: [
      "Viral Hepatitis (A, B, C, D, E)",
      "Alcohol-induced liver damage or fatty liver disease",
      "Gallstones blocking the bile duct",
      "Hemolytic anemia (rapid breakdown of red blood cells)"
    ],
    homeCare: [
      "Consult a doctor immediately to identify the underlying cause (blood tests, ultrasound).",
      "Complete physical rest is mandatory; do not indulge in physical work.",
      "Do NOT take any indigenous powders or unverified herbal medicines, which can cause acute liver failure."
    ],
    diet: [
      "Hydration is key: Drink boiled water, coconut water, sugarcane juice (hygienically prepared).",
      "Eat carbohydrate-rich, fat-free foods: boiled rice, boiled potatoes, porridge, radishes.",
      "Strictly avoid ghee, oil, butter, cream, meat, and yellow spices (turmeric) for a few weeks."
    ],
    lifestyleTips: [
      "Strictly avoid alcohol.",
      "Maintain strict personal hygiene to prevent transmission of viral hepatitis.",
      "Check color of stools and urine daily."
    ],
    warningSignsForDoctor: [
      "Extreme sleepiness, altered behavior, or confusion (Hepatic Encephalopathy)",
      "Persistent severe vomiting and inability to digest food",
      "Abdomen swelling or bleeding from nose/gums"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Get vaccinated against Hepatitis A and B.",
      "Drink clean, purified water; avoid street foods.",
      "Limit alcohol consumption."
    ],
    ageNotes: {
      child: "Neonatal jaundice is common in newborns. Needs phototherapy if levels are high. Pediatric consult is mandatory.",
      adult: "Often a sign of acute hepatitis or alcohol use.",
      elderly: "Commonly caused by gallstones or biliary tract obstructions. Needs urgent ultrasound."
    },
    severity: "severe"
  },
  {
    id: "constipation",
    name: "Constipation",
    nameHi: "कब्ज़",
    category: "Digestive Disorders",
    description: "A common condition characterized by infrequent bowel movements, difficulty passing stool, and dry, hard feces.",
    descriptionHi: "एक आम समस्या जिसमें मल त्याग बहुत कम होता है, मल पास करने में कठिनाई होती है, और मल सूखा व कठोर हो जाता है।",
    symptoms: ["abdominal_pain", "stomach_cramps", "bloating", "constipation", "mucus_in_stool"],
    keySymptoms: ["constipation", "bloating", "abdominal_pain"],
    causes: [
      "Lack of fiber in the diet",
      "Insufficient water intake (dehydration)",
      "Lack of physical activity or sedentary lifestyle",
      "Ignoring the urge to pass stool"
    ],
    homeCare: [
      "Drink 3-4 liters of water daily, especially a glass of warm water in the morning.",
      "Incorporate physical movement like walking or abdominal exercises.",
      "Try natural laxatives like Isabgol (Psyllium husk) with warm milk at bedtime."
    ],
    diet: [
      "High-fiber diet: whole grains, oats, green leafy vegetables, papayas, guavas, and figs.",
      "Drink prunes juice, warm water, and buttermilk.",
      "Avoid processed foods, white flour (maida), bakery products, and excessive dairy."
    ],
    lifestyleTips: [
      "Establish a regular time for bowel movements.",
      "Do not rush while passing stools.",
      "Avoid overuse of stimulant laxatives."
    ],
    warningSignsForDoctor: [
      "Severe abdominal pain with vomiting and inability to pass gas (indicates bowel obstruction)",
      "Blood in stool or black stools",
      "Unexplained weight loss or constipation alternating with diarrhea"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Maintain a fiber-rich diet and high fluid intake.",
      "Exercise regularly."
    ],
    ageNotes: {
      child: "Often behavioral or due to low fiber. Encourage toilet training and fruits. Do not give laxatives without pediatrician advice.",
      adult: "Usually resolves with dietary changes and hydration.",
      elderly: "Very common due to reduced bowel motility and medication side effects. Encourage gentle walking and Isabgol."
    },
    severity: "mild"
  },
  {
    id: "diarrhoea",
    name: "Diarrhoea",
    nameHi: "दस्त",
    category: "Digestive Disorders",
    description: "Frequent passage of loose, watery stools, which can quickly lead to dangerous dehydration and electrolyte imbalance.",
    descriptionHi: "बार-बार ढीला और पानी जैसा मल आना, जिससे तेजी से शरीर में पानी की कमी (निर्जलीकरण) और कमजोरी हो सकती है।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "dehydration", "loss_of_appetite", "abdominal_pain", "stomach_cramps", "nausea", "vomiting", "diarrhoea", "blood_in_stool", "mucus_in_stool"],
    keySymptoms: ["diarrhoea", "dehydration", "stomach_cramps"],
    causes: [
      "Viral infections (Rotavirus, Adenovirus)",
      "Bacterial food/water contamination (Cholera, E. coli)",
      "Parasitic infections (Amoebiasis, Giardiasis)"
    ],
    homeCare: [
      "Start ORS solution immediately. Take small sips frequently.",
      "Homemade solutions: Salted buttermilk, lemon water with sugar and salt, rice water (Kanji).",
      "Do NOT take antibiotics or anti-diarrheals without a doctor's advice."
    ],
    diet: [
      "Eat bananas (helps bind stool and replenishes potassium), plain boiled rice, yogurt (probiotics).",
      "Khichdi with a little salt.",
      "Avoid milk, ghee, oil, spicy food, coffee, and sugary fruit juices."
    ],
    lifestyleTips: [
      "Wash hands thoroughly after using the toilet and before eating.",
      "Drink only purified or boiled water.",
      "Keep food covered and fresh."
    ],
    warningSignsForDoctor: [
      "Severe dehydration signs: dry tongue, no urine for 6 hours, dizziness",
      "High fever or blood/mucus in stool (dysentery)",
      "Vomiting that prevents retention of oral fluids"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Rotavirus vaccination for infants.",
      "Strict food and water hygiene."
    ],
    ageNotes: {
      child: "A leading cause of mortality in kids. Give ORS + Zinc supplements (as advised by pediatrician) for 14 days.",
      adult: "Usually self-resolving within 2-3 days with proper hydration.",
      elderly: "Can cause rapid cardiac and renal strain. Seek early medical attention."
    },
    severity: "moderate"
  },

  // =========================================================================
  // 3. RESPIRATORY DISEASES (6 Diseases)
  // =========================================================================
  {
    id: "asthma",
    name: "Asthma",
    nameHi: "दमा (अस्थमा)",
    category: "Respiratory Diseases",
    description: "A chronic inflammatory condition of the airways causing periodic wheezing, shortness of breath, chest tightness, and coughing.",
    descriptionHi: "श्वसन नली की एक पुरानी सूजन वाली स्थिति जिसके कारण समय-समय पर सांस में सीटी की आवाज (घरघराहट), सांस फूलना और खांसी होती है।",
    symptoms: ["fatigue", "weakness", "dry_cough", "chest_tightness", "shortness_of_breath", "rapid_breathing", "wheezing", "anxiety", "sleep_difficulty"],
    keySymptoms: ["wheezing", "shortness_of_breath", "chest_tightness", "dry_cough"],
    causes: [
      "Hyper-reactive airways triggered by allergens (dust, pollen, pet dander, mold)",
      "Air pollution, smoke, cold air, or chemical fumes",
      "Physical exertion or respiratory infections"
    ],
    homeCare: [
      "Use your prescribed rescue inhaler (bronchodilator) immediately during an attack.",
      "Sit upright and try to remain calm; anxiety worsens chest tightness.",
      "Keep a warm water humidifier or take steam to ease breathing.",
      "Identify and stay away from known triggers (dust, smoke)."
    ],
    diet: [
      "Warm water and herbal teas (ginger-licorice).",
      "Foods high in Vitamin D and Magnesium (spinach, seeds, fish).",
      "Avoid cold foods, carbonated drinks, and foods containing preservatives (sulfites)."
    ],
    lifestyleTips: [
      "Keep your house dust-free; vacuum carpets and wash curtains regularly.",
      "Avoid active and passive smoking.",
      "Perform gentle breathing exercises (Pranayama - Anulom Vilom) when stable."
    ],
    warningSignsForDoctor: [
      "Inhaler does not provide relief within 15 minutes",
      "Inability to speak in full sentences due to breathlessness",
      "Bluish lips or fingernails, chest retractions (Emergency)"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Use controller inhalers daily as prescribed.",
      "Get annual flu vaccine.",
      "Wear a mask in highly polluted areas."
    ],
    ageNotes: {
      child: "Common cause of school absence. Learn to use a spacer with inhaler correctly. Watch for chest pulling in.",
      adult: "Requires regular trigger tracking and work environment evaluation.",
      elderly: "Can mimic or overlap with heart failure. Needs careful diagnostic differentiation."
    },
    severity: "moderate"
  },
  {
    id: "bronchitis",
    name: "Bronchitis",
    nameHi: "ब्रोंकाइटिस (श्वसन नली में सूजन)",
    category: "Respiratory Diseases",
    description: "Inflammation of the bronchial tubes, usually following a cold, causing a persistent wet cough with mucus and chest discomfort.",
    descriptionHi: "ब्रोंकियल नलियों में सूजन, जो आमतौर पर सर्दी-जुकाम के बाद होती है और बलगम वाली लगातार खांसी तथा छाती में तकलीफ का कारण बनती है।",
    symptoms: ["fever", "mild_fever", "chills", "fatigue", "weakness", "body_ache", "headache", "sore_throat", "dry_cough", "wet_cough", "chest_pain", "chest_tightness", "shortness_of_breath", "wheezing"],
    keySymptoms: ["wet_cough", "chest_tightness", "mild_fever"],
    causes: [
      "Viral infections (same viruses that cause cold and flu)",
      "Bacterial infections (less common)",
      "Irritants like tobacco smoke, dust, air pollution"
    ],
    homeCare: [
      "Inhale steam twice a day to loosen chest mucus.",
      "Drink warm water throughout the day.",
      "Use a humidifier in the bedroom.",
      "Take OTC cough expectorants under medical guidance if the cough is wet."
    ],
    diet: [
      "Warm vegetable soups, ginger-honey mixture, herbal teas.",
      "Turmeric milk (haldi doodh) to reduce airway inflammation.",
      "Avoid cold products, dairy if it thickens mucus, and fried items."
    ],
    lifestyleTips: [
      "Avoid smoking and exposure to secondhand smoke.",
      "Rest well and avoid dry, dusty places.",
      "Wear a scarf or mask around your face in cold weather."
    ],
    warningSignsForDoctor: [
      "Cough lasting more than 3 weeks",
      "Fever above 101°F or coughing up blood",
      "Shortness of breath or chest pain while coughing"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Avoid smoking.",
      "Wash hands regularly.",
      "Get vaccinated against flu and pneumonia."
    ],
    ageNotes: {
      child: "Often presents as 'wheezy bronchitis' in toddlers. Do not give strong cough suppressants.",
      adult: "Acute cases resolve in 10-14 days. Chronic bronchitis requires long-term therapy.",
      elderly: "High risk of converting into pneumonia. Monitor chest sounds and oxygen levels."
    },
    severity: "moderate"
  },
  {
    id: "pneumonia",
    name: "Pneumonia",
    nameHi: "निमोनिया (फेफड़ों का संक्रमण)",
    category: "Respiratory Diseases",
    description: "A severe lung infection that inflames the air sacs, filling them with pus and fluid, causing high fever, painful cough, and breathlessness.",
    descriptionHi: "फेफड़ों का एक गंभीर संक्रमण जो वायु थैलियों में सूजन पैदा करता है, जिससे वे मवाद और तरल पदार्थ से भर जाती हैं, जिससे तेज़ बुखार, दर्दनाक खांसी और सांस लेने में कठिनाई होती है।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "loss_of_appetite", "dehydration", "body_ache", "headache", "confusion", "wet_cough", "cough_with_blood", "chest_pain", "chest_tightness", "shortness_of_breath", "rapid_breathing", "wheezing", "excessive_sweating"],
    keySymptoms: ["high_fever", "chest_pain", "shortness_of_breath", "wet_cough"],
    causes: [
      "Bacterial infections (Streptococcus pneumoniae) - most severe",
      "Viral infections (Influenza, RSV, COVID-19)",
      "Fungal infections (in immunocompromised individuals)"
    ],
    homeCare: [
      "Consult a doctor immediately. Bacterial pneumonia requires specific antibiotics.",
      "Take complete rest. Avoid lying flat; prop yourself up with pillows to make breathing easier.",
      "Use a nebulizer or steam to clear secretions.",
      "Monitor temperature and oxygen levels regularly."
    ],
    diet: [
      "Protein-rich soups, boiled eggs, soft lentils.",
      "Warm water with honey-lemon, fresh warm citrus juices (Vitamin C).",
      "Avoid oily foods and cold dairy."
    ],
    lifestyleTips: [
      "Do not smoke.",
      "Dispose of phlegm-soaked tissues carefully.",
      "Keep the surroundings dust-free."
    ],
    warningSignsForDoctor: [
      "Difficulty breathing or respiratory rate above 24 breaths per minute",
      "Chest pain that worsens with deep breathing",
      "Oxygen saturation (SpO2) dropping below 94% or confusion in elderly"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Pneumococcal vaccine.",
      "Annual influenza vaccine.",
      "Good hygiene."
    ],
    ageNotes: {
      child: "Can be fatal. Look for nostril flaring, grunting sounds, or chest drawing in. Seek immediate care.",
      adult: "Requires intensive rest and antibiotics for 7-10 days.",
      elderly: "May not have high fever, but can show confusion, hypothermia, and extreme weakness. Very dangerous."
    },
    severity: "severe"
  },
  {
    id: "sinusitis",
    name: "Sinusitis",
    nameHi: "साइनसाइटिस (साइनस संक्रमण)",
    category: "Respiratory Diseases",
    description: "Inflammation of the nasal sinuses causing facial pain, pressure around the eyes and forehead, blocked nose, and headache.",
    descriptionHi: "नाक के साइनस की सूजन जिसके कारण चेहरे पर दर्द, आँखों और माथे के आसपास दबाव, बंद नाक और सिरदर्द की समस्या होती है।",
    symptoms: ["fever", "mild_fever", "fatigue", "headache", "runny_nose", "blocked_nose", "sneezing", "sore_throat", "dry_cough", "post_nasal_drip", "ear_pain", "loss_of_smell", "swollen_face"],
    keySymptoms: ["headache", "blocked_nose", "swollen_face", "post_nasal_drip"],
    causes: [
      "Viral infection (common cold complication)",
      "Nasal polyps or deviated nasal septum (DNS)",
      "Environmental allergies (dust, pollen)"
    ],
    homeCare: [
      "Apply warm, moist towels to your face around your eyes and nose.",
      "Perform steam inhalation 2-3 times daily to drain sinuses.",
      "Use saline nasal sprays or a Neti pot to flush out mucus.",
      "Sleep with your head elevated."
    ],
    diet: [
      "Drink warm fluids: herbal teas (mint, ginger), hot soups.",
      "Include garlic, onions, and horseradish (helps open nasal passages).",
      "Limit dairy products if they increase mucus thickness."
    ],
    lifestyleTips: [
      "Avoid sudden temperature changes.",
      "Stay hydrated to keep mucus thin.",
      "Avoid swimming or diving during active sinus congestion."
    ],
    warningSignsForDoctor: [
      "High fever or severe facial swelling",
      "Vision changes, double vision, or swelling/redness around eyes",
      "Stiff neck or severe headache not relieved by pain medications"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Treat colds promptly.",
      "Manage allergies effectively.",
      "Use a humidifier in dry indoor environments."
    ],
    ageNotes: {
      child: "Check if child has foul-smelling nasal discharge or swelling near eyes.",
      adult: "Common chronic issue. Avoid overuse of decongestant sprays (limit to 3 days).",
      elderly: "Ensure proper hydration; dry nasal passages can exacerbate symptoms."
    },
    severity: "mild"
  },
  {
    id: "allergic_rhinitis",
    name: "Allergic Rhinitis (Hay Fever)",
    nameHi: "एलर्जिक राइनाइटिस (एलर्जी)",
    category: "Respiratory Diseases",
    description: "An allergic reaction to airborne particles, causing sneezing, runny nose, itchy watery eyes, and nasal congestion.",
    descriptionHi: "हवा में मौजूद कणों के प्रति एक एलर्जी प्रतिक्रिया, जिससे छींकें आना, नाक बहना, आँखों में खुजली व पानी आना और बंद नाक की समस्या होती है।",
    symptoms: ["fatigue", "headache", "red_eyes", "watery_eyes", "itching", "runny_nose", "blocked_nose", "sneezing", "sore_throat", "dry_cough", "post_nasal_drip"],
    keySymptoms: ["sneezing", "runny_nose", "watery_eyes", "itching"],
    causes: [
      "Immune response to allergens (pollens, dust mites, mold, animal dander)",
      "Seasonal pollen surges (spring/autumn)",
      "Indoor dust and pollution"
    ],
    homeCare: [
      "Use saline nasal sprays to wash out allergens from nasal passages.",
      "Use a Neti pot with boiled cooled saline water.",
      "Keep windows closed during high pollen seasons.",
      "Take steam to relieve congestion."
    ],
    diet: [
      "Include anti-inflammatory foods: ginger, turmeric, berries, citrus fruits.",
      "Green tea (contains natural antihistamine properties).",
      "Avoid cold items."
    ],
    lifestyleTips: [
      "Wear a mask when sweeping, gardening, or outdoors on windy days.",
      "Wash bedding in hot water weekly to kill dust mites.",
      "Avoid carpets in the bedroom if allergies are chronic."
    ],
    warningSignsForDoctor: [
      "Symptoms interfere with sleep or daily activities",
      "Over-the-counter antihistamines do not work",
      "Development of wheezing or shortness of breath (allergic asthma)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Identify and avoid allergens.",
      "Keep indoor air clean using HEPA air purifiers."
    ],
    ageNotes: {
      child: "Very common. May see the 'allergic salute' (rubbing nose upward). Pediatric consult for proper allergy medications.",
      adult: "Often requires combination of nasal steroid sprays and oral antihistamines.",
      elderly: "Antihistamines can cause drowsiness and increase fall risks; use non-drowsy options."
    },
    severity: "mild"
  },
  {
    id: "copd",
    name: "COPD (Chronic Obstructive Pulmonary Disease)",
    nameHi: "सीओपीडी (फेफड़ों का पुराना रोग)",
    category: "Respiratory Diseases",
    description: "A progressive chronic lung disease causing restricted airflow, chronic wet cough with phlegm, and long-term breathlessness.",
    descriptionHi: "फेफड़ों की एक बढ़ती हुई पुरानी बीमारी जिसके कारण हवा का प्रवाह सीमित हो जाता है, बलगम वाली खांसी और लंबे समय तक सांस की तकलीफ रहती है।",
    symptoms: ["fatigue", "weakness", "weight_loss", "wet_cough", "chest_tightness", "shortness_of_breath", "rapid_breathing", "wheezing"],
    keySymptoms: ["shortness_of_breath", "wet_cough", "wheezing", "chest_tightness"],
    causes: [
      "Long-term tobacco smoking (primary cause)",
      "Exposure to indoor air pollution (chulha smoke, biomass fuel)",
      "Industrial dust and chemical fumes"
    ],
    homeCare: [
      "Use prescribed bronchodilator inhalers and oxygen therapy exactly as directed.",
      "Practice pursed-lip breathing (inhale through nose, exhale slowly through pursed lips).",
      "Keep your living environment free from smoke, incense, and strong odors.",
      "Perform pulmonary rehabilitation exercises under supervision."
    ],
    diet: [
      "Eat small, high-calorie, nutrient-dense meals; chewing can be tiring when breathless.",
      "Adequate protein to prevent muscle wasting.",
      "Drink warm fluids; avoid gas-inducing foods which push up on the diaphragm."
    ],
    lifestyleTips: [
      "Quit smoking immediately (most critical step).",
      "Use clean cooking stoves; avoid indoor biomass smoke.",
      "Stay active with light walking."
    ],
    warningSignsForDoctor: [
      "Sudden increase in shortness of breath or cough severity",
      "Change in color or volume of phlegm (indicates chest infection)",
      "Bluish nails/lips, confusion, or severe leg swelling"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Never smoke; avoid secondhand smoke.",
      "Use protective gear if working with chemicals/dust."
    ],
    ageNotes: {
      child: "Not applicable. Extremely rare unless congenital alpha-1 antitrypsin deficiency exists.",
      adult: "Usually diagnosed after age 40 in smokers. Symptoms develop gradually.",
      elderly: "Highly vulnerable to severe exacerbations. Needs home oxygen monitoring and regular vaccines."
    },
    severity: "severe"
  },

  // =========================================================================
  // 4. CARDIAC & CIRCULATORY (4 Diseases)
  // =========================================================================
  {
    id: "hypertension",
    name: "Hypertension (High Blood Pressure)",
    nameHi: "उच्च रक्तचाप (हाइपरटेंशन)",
    category: "Cardiac & Circulatory",
    description: "A common condition where the force of blood against artery walls is consistently too high, often called a 'silent killer' due to lack of early symptoms.",
    descriptionHi: "एक आम स्थिति जिसमें धमनियों की दीवारों पर रक्त का दबाव बहुत अधिक होता है, शुरुआती लक्षणों की कमी के कारण इसे 'साइलेंट किलर' भी कहा जाता है।",
    symptoms: ["fatigue", "headache", "dizziness", "lightheadedness", "blurred_vision", "shortness_of_breath", "palpitations", "irregular_heartbeat", "sleep_difficulty"],
    keySymptoms: ["headache", "dizziness", "palpitations"],
    causes: [
      "Genetic factors and family history",
      "High salt intake, obesity, and lack of exercise",
      "Chronic stress, alcohol intake, and smoking",
      "Secondary to kidney disease or hormonal disorders"
    ],
    homeCare: [
      "Monitor blood pressure regularly at home using a digital BP monitor.",
      "Take prescribed antihypertensive medications daily without skipping.",
      "Practice stress-relief techniques like meditation or deep breathing."
    ],
    diet: [
      "DASH diet (Dietary Approaches to Stop Hypertension).",
      "Strictly limit sodium intake (salt < 5g or 1 tsp per day).",
      "Increase potassium-rich foods: bananas, spinach, coconut water.",
      "Avoid processed foods, pickles, papads, and salted snacks."
    ],
    lifestyleTips: [
      "Perform 30 minutes of moderate exercise (brisk walking) 5 days a week.",
      "Maintain a healthy weight.",
      "Limit alcohol and quit smoking."
    ],
    warningSignsForDoctor: [
      "BP reading above 180/120 mmHg (Hypertensive Crisis - Emergency)",
      "Severe headache accompanied by confusion, chest pain, or blurred vision",
      "Sudden weakness or numbness in face, arm, or leg"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Adopt a low-sodium, healthy diet.",
      "Keep body weight under control.",
      "Get routine health check-ups."
    ],
    ageNotes: {
      child: "Rare. Requires pediatric nephrology review if present.",
      adult: "Very common due to stress and lifestyle. Routine screening is advised.",
      elderly: "Common due to stiffening of arteries. Watch for orthostatic hypotension (dizziness when standing up)."
    },
    severity: "moderate"
  },
  {
    id: "heart_attack",
    name: "Heart Attack (Myocardial Infarction)",
    nameHi: "दिल का दौरा (हार्ट अटैक)",
    category: "Cardiac & Circulatory",
    description: "A medical emergency where blood flow to a part of the heart muscle is blocked, causing chest pain radiating to the arm/jaw, and shortness of breath.",
    descriptionHi: "एक चिकित्सा आपातकाल जिसमें हृदय की मांसपेशियों के एक हिस्से में रक्त का प्रवाह अवरुद्ध हो जाता है, जिससे छाती में दर्द, सांस फूलना और पसीना आता है।",
    symptoms: ["fatigue", "weakness", "dizziness", "lightheadedness", "fainting", "chest_pain", "chest_tightness", "shortness_of_breath", "palpitations", "nausea", "vomiting", "excessive_sweating"],
    keySymptoms: ["chest_pain", "chest_tightness", "shortness_of_breath", "excessive_sweating", "fainting"],
    causes: [
      "Blockage of coronary arteries by fatty deposits (plaque/atherosclerosis)",
      "Sudden blood clot formation blocking arterial flow",
      "Coronary artery spasm"
    ],
    homeCare: [
      "This is a 100% medical emergency. Call 108 immediately.",
      "Have the patient sit down, stay calm, and loosen tight clothing.",
      "Chew an Aspirin tablet (300mg) immediately if available and not allergic.",
      "Perform CPR (Cardiopulmonary Resuscitation) if the patient becomes unconscious and stops breathing."
    ],
    diet: [
      "No food or drink during the emergency.",
      "After recovery: Heart-healthy low-sodium, low-cholesterol diet."
    ],
    lifestyleTips: [
      "Never ignore chest discomfort.",
      "Know the nearest hospital with a cath lab (for angioplasty)."
    ],
    warningSignsForDoctor: [
      "Crushing chest pain (feels like heavy squeezing or pressure) lasting more than 5 minutes",
      "Pain radiating to left shoulder, arm, neck, jaw, or back",
      "Chest pain accompanied by sweating, shortness of breath, or dizziness"
    ],
    urgency: "emergency",
    prevention: [
      "Regular physical activity and weight management.",
      "Avoid smoking and limit alcohol.",
      "Control cholesterol, blood pressure, and diabetes."
    ],
    ageNotes: {
      child: "Extremely rare; typically due to congenital heart disease or Kawasaki disease.",
      adult: "Increasing incidence in young adults due to stressful lifestyles. Needs quick action.",
      elderly: "May present with atypical symptoms like breathlessness, nausea, or confusion without clear chest pain ('silent' heart attack)."
    },
    severity: "severe"
  },
  {
    id: "anaemia",
    name: "Anaemia",
    nameHi: "एनीमिया (खून की कमी)",
    category: "Cardiac & Circulatory",
    description: "A condition characterized by a lack of healthy red blood cells or hemoglobin in the blood, leading to reduced oxygen flow, fatigue, and pale skin.",
    descriptionHi: "रक्त में स्वस्थ लाल रक्त कोशिकाओं या हीमोग्लोबिन की कमी, जिससे शरीर में ऑक्सीजन का प्रवाह कम हो जाता है और थकान व पीलापन रहता है।",
    symptoms: ["fatigue", "weakness", "dizziness", "lightheadedness", "fainting", "shortness_of_breath", "palpitations", "irregular_heartbeat", "pale_skin", "cold_intolerance", "brittle_nails", "hair_loss"],
    keySymptoms: ["fatigue", "pale_skin", "weakness", "shortness_of_breath"],
    causes: [
      "Iron deficiency (most common cause globally and in India)",
      "Vitamin B12 or Folate deficiency",
      "Chronic blood loss (heavy menstruation, piles, stomach ulcers)",
      "Chronic diseases (kidney failure, cancer, bone marrow disorders)"
    ],
    homeCare: [
      "Consult a doctor for a Complete Blood Count (CBC) test.",
      "Take prescribed iron and folic acid supplements; take them with Vitamin C (lemon juice) to enhance absorption.",
      "Do not take iron supplements with tea, coffee, or calcium, as they block absorption.",
      "Ensure proper rest."
    ],
    diet: [
      "Eat iron-rich foods: green leafy vegetables (spinach, fenugreek), dates, jaggery, beetroot, pomegranates, and sesame seeds.",
      "Include Vitamin C foods (amla, oranges, lemons) to boost iron uptake.",
      "Lentils, beans, and fortified grains."
    ],
    lifestyleTips: [
      "Avoid tea/coffee immediately after meals.",
      "Check for hookworm infection (common in rural areas; take deworming tablet like Albendazole as advised by doctor)."
    ],
    warningSignsForDoctor: [
      "Severe breathlessness even at rest",
      "Chest pain, rapid heartbeat, or fainting episodes",
      "Passing black, tarry stools (indicates active bleeding in stomach)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Eat a balanced diet rich in iron and vitamins.",
      "Periodic deworming.",
      "Prenatal iron supplements for pregnant women."
    ],
    ageNotes: {
      child: "Can affect cognitive development. Ensure age-appropriate diet and deworming.",
      adult: "Very common in menstruating women. Routine Hb testing is recommended.",
      elderly: "Usually secondary to chronic disease or minor GI bleeding. Requires thorough investigation."
    },
    severity: "moderate"
  },
  {
    id: "arrhythmia",
    name: "Arrhythmia",
    nameHi: "अतालता (दिल की धड़कन की गड़बड़ी)",
    category: "Cardiac & Circulatory",
    description: "A condition where the heart beats with an irregular, too fast, or too slow rhythm, causing palpitations and lightheadedness.",
    descriptionHi: "एक ऐसी स्थिति जिसमें दिल बहुत तेज़, बहुत धीमा या अनियमित रूप से धड़कता है, जिससे घबराहट और चक्कर आते हैं।",
    symptoms: ["fatigue", "weakness", "dizziness", "lightheadedness", "fainting", "chest_pain", "chest_tightness", "shortness_of_breath", "palpitations", "irregular_heartbeat"],
    keySymptoms: ["irregular_heartbeat", "palpitations", "dizziness", "shortness_of_breath"],
    causes: [
      "Coronary artery disease or heart valve disorders",
      "High blood pressure or diabetes",
      "Excessive caffeine, alcohol, stress, or smoking",
      "Electrolyte imbalances (potassium/sodium)"
    ],
    homeCare: [
      "Consult a cardiologist for an ECG and Holter monitor test.",
      "Keep a log of when palpitations occur, their duration, and any triggers.",
      "Sit down immediately during an episode of palpitations or dizziness."
    ],
    diet: [
      "Heart-healthy diet: low fat, rich in potassium and magnesium.",
      "Strictly limit caffeine, energy drinks, and alcohol.",
      "Maintain hydration."
    ],
    lifestyleTips: [
      "Practice vagal maneuvers (like coughing or bearing down) only if taught by your doctor to slow a fast heart rate.",
      "Reduce stress through deep breathing.",
      "Avoid over-the-counter cold medicines containing stimulants."
    ],
    warningSignsForDoctor: [
      "Palpitations accompanied by chest pain or severe shortness of breath",
      "Fainting (syncope) or near-fainting episodes",
      "Sudden heart rate above 150 bpm or below 45 bpm at rest"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Manage blood pressure and cholesterol.",
      "Avoid smoking and excessive stimulants.",
      "Regular cardiac screening."
    ],
    ageNotes: {
      child: "Rare; usually congenital or due to high fever/myocarditis.",
      adult: "Can be triggered by stress, caffeine, thyroid disorders, or anxiety.",
      elderly: "Highly common (especially Atrial Fibrillation). Increased stroke risk; requires blood thinners under doctor's guidance."
    },
    severity: "severe"
  },

  // =========================================================================
  // 5. URINARY & KIDNEY (3 Diseases)
  // =========================================================================
  {
    id: "uti",
    name: "Urinary Tract Infection (UTI)",
    nameHi: "मूत्र मार्ग में संक्रमण (यूटीआई)",
    category: "Urinary & Kidney",
    description: "An infection in any part of the urinary system, usually the bladder, causing a burning sensation during urination and frequent urges to pee.",
    descriptionHi: "मूत्र प्रणाली के किसी भी हिस्से में होने वाला संक्रमण, जिसके कारण पेशाब में जलन और बार-बार पेशाब आने की समस्या होती है।",
    symptoms: ["fever", "mild_fever", "fatigue", "weakness", "abdominal_pain", "painful_urination", "frequent_urination", "blood_in_urine", "cloudy_urine", "strong_urine_odor", "lower_back_pain_urinary"],
    keySymptoms: ["painful_urination", "frequent_urination", "cloudy_urine", "strong_urine_odor"],
    causes: [
      "Escherichia coli (E. coli) bacteria entering the urethra",
      "Poor toilet hygiene (wiping back to front in females)",
      "Holding urine for long periods",
      "Dehydration"
    ],
    homeCare: [
      "Consult a doctor for antibiotics; complete the full course to prevent recurrence.",
      "Drink plenty of water to flush out the bacteria from the bladder.",
      "Apply a warm heating pad to your lower abdomen to relieve discomfort."
    ],
    diet: [
      "Drink cranberry juice (unsweetened) - helps prevent bacteria from sticking to bladder walls.",
      "Drink coconut water, barley water (jo ka paani), and lemon water.",
      "Avoid coffee, alcohol, carbonated drinks, and spicy foods which irritate the bladder."
    ],
    lifestyleTips: [
      "Urinate immediately after sexual intercourse.",
      "Maintain good personal hygiene; keep the genital area dry and clean.",
      "Wear loose, breathable cotton underwear."
    ],
    warningSignsForDoctor: [
      "High fever with chills",
      "Severe lower back/flank pain (indicates infection has reached the kidneys - Pyelonephritis)",
      "Nausea, vomiting, and inability to keep fluids down"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Drink at least 2.5 - 3 liters of fluids daily.",
      "Wipe from front to back after using the toilet.",
      "Don't hold urine when you feel the urge."
    ],
    ageNotes: {
      child: "Can present as unexplained fever or bedwetting. Needs pediatric evaluation.",
      adult: "Highly common in young, sexually active females.",
      elderly: "Can cause sudden confusion, disorientation, or behavioral changes without fever. Check urine promptly."
    },
    severity: "moderate"
  },
  {
    id: "kidney_stones",
    name: "Kidney Stones",
    nameHi: "गुर्दे की पथरी (किडनी स्टोन)",
    category: "Urinary & Kidney",
    description: "Hard deposits of minerals and acid salts that form inside the kidneys, causing excruciating side/lower back pain when passing through the urinary tract.",
    descriptionHi: "खनिजों और लवणों के ठोस जमाव जो किडनी के अंदर बनते हैं, और मूत्र मार्ग से गुजरते समय पीठ या बगल में असहनीय दर्द पैदा करते हैं।",
    symptoms: ["fever", "mild_fever", "abdominal_pain", "nausea", "vomiting", "painful_urination", "frequent_urination", "blood_in_urine", "cloudy_urine", "strong_urine_odor", "lower_back_pain_urinary"],
    keySymptoms: ["lower_back_pain_urinary", "blood_in_urine", "nausea", "vomiting"],
    causes: [
      "Low water intake leading to concentrated urine",
      "Excessive intake of calcium oxalates, sodium, or animal protein",
      "Family history of kidney stones",
      "Underlying metabolic disorders"
    ],
    homeCare: [
      "Seek medical advice (ultrasound/CT scan to check stone size).",
      "Drink up to 3-4 liters of water to help flush out small stones (<5mm).",
      "Take prescribed spasmolytic and pain medications.",
      "Use warm water fermentation on the side of the back where it hurts."
    ],
    diet: [
      "Drink lemon water (citrate helps break down calcium stones).",
      "Reduce salt and animal protein intake.",
      "Limit foods high in oxalates: spinach, chocolate, tea, nuts, and tomatoes (seeds).",
      "Avoid aerated drinks."
    ],
    lifestyleTips: [
      "Avoid sitting for long hours; stay active.",
      "Monitor the color of your urine (should be clear, not yellow)."
    ],
    warningSignsForDoctor: [
      "Inability to pass urine at all (indicates complete blockage)",
      "High fever with chills (indicates urinary infection with stone obstruction - Emergency)",
      "Severe, intractable pain not controlled by medication"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Drink adequate water throughout the day.",
      "Limit dietary sodium."
    ],
    ageNotes: {
      child: "Rare; requires metabolic evaluation if present.",
      adult: "Most common between ages 20 and 50. Recurrence is common without dietary changes.",
      elderly: "Increased risk of UTI and kidney damage; needs careful monitoring."
    },
    severity: "severe"
  },
  {
    id: "chronic_kidney_disease",
    name: "Chronic Kidney Disease (CKD)",
    nameHi: "क्रोनिक किडनी रोग (सीकेडी)",
    category: "Urinary & Kidney",
    description: "A long-term, gradual loss of kidney function, leading to fluid retention, swelling, anemia, and accumulation of waste in the blood.",
    descriptionHi: "किडनी की कार्यक्षमता में लंबे समय तक होने वाली कमी, जिससे शरीर में पानी जमा होना, सूजन, एनीमिया और रक्त में कचरा जमा होने लगता है।",
    symptoms: ["fatigue", "weakness", "loss_of_appetite", "dehydration", "headache", "shortness_of_breath", "nausea", "vomiting", "frequent_urination", "blood_in_urine", "cloudy_urine", "strong_urine_odor", "lower_back_pain_urinary", "itching", "swelling", "pale_skin", "reduced_mobility"],
    keySymptoms: ["swelling", "fatigue", "shortness_of_breath", "cloudy_urine"],
    causes: [
      "Long-standing uncontrolled Diabetes Mellitus (Diabetic Nephropathy)",
      "Chronic uncontrolled Hypertension",
      "Glomerulonephritis (inflammation of kidney filters)",
      "Polycystic Kidney Disease (PKD)"
    ],
    homeCare: [
      "Consult a nephrologist regularly. Monitor kidney function tests (Creatinine, Urea, eGFR) and urine protein.",
      "Strictly control blood sugar and blood pressure levels.",
      "Avoid ALL self-prescribed painkillers (NSAIDs like Diclofenac, Ibuprofen) which are highly toxic to kidneys (Nephrotoxic)."
    ],
    diet: [
      "Strictly limit salt, sodium, and potassium-rich foods (limit bananas, oranges, coconut water) if advised.",
      "Control protein intake as recommended by your dietician.",
      "Limit fluid intake (water, tea, soups) if you have swelling (edema) or shortness of breath."
    ],
    lifestyleTips: [
      "Weigh yourself daily to monitor fluid retention.",
      "Avoid smoking and alcohol.",
      "Walk regularly within comfort limits."
    ],
    warningSignsForDoctor: [
      "Sudden shortness of breath or inability to lie flat (fluid in lungs - Emergency)",
      "Chest pain or irregular heartbeat",
      "Severe confusion, seizures, or complete lack of urine output"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Keep diabetes and hypertension under tight control.",
      "Avoid unnecessary medications."
    ],
    ageNotes: {
      child: "Usually due to congenital anomalies of the kidney and urinary tract (CAKUT). Needs specialized pediatric care.",
      adult: "Often a complication of diabetes and high BP. Regular screening is key.",
      elderly: "Kidney function naturally declines with age. Careful dose adjustment of all medications is necessary."
    },
    severity: "severe"
  },

  // =========================================================================
  // 6. NEUROLOGICAL (5 Diseases)
  // =========================================================================
  {
    id: "migraine",
    name: "Migraine",
    nameHi: "माइग्रेन (आधासीसी का दर्द)",
    category: "Neurological",
    description: "A neurological condition causing severe, throbbing headache, typically on one side of the head, with nausea and sensitivity to light/sound.",
    descriptionHi: "एक तंत्रिका संबंधी स्थिति जिसमें सिर के एक तरफ तेज़, धड़कता हुआ सिरदर्द होता है और साथ में मतली तथा रोशनी/आवाज़ से परेशानी होती है।",
    symptoms: ["fatigue", "weakness", "headache", "severe_headache", "dizziness", "lightheadedness", "watery_eyes", "blurred_vision", "eye_pain", "light_sensitivity", "nausea", "vomiting", "sleep_difficulty"],
    keySymptoms: ["severe_headache", "nausea", "light_sensitivity", "blurred_vision"],
    causes: [
      "Abnormal brain activity affecting nerve signals and blood vessels",
      "Triggers: stress, hormonal changes (menstruation), sensory stimuli",
      "Certain foods (aged cheese, MSG, caffeine, chocolate) and lack of sleep"
    ],
    homeCare: [
      "Lie down in a quiet, dark, cool room during an attack.",
      "Apply a cold pack or ice wrap to your forehead or temples.",
      "Take prescribed migraine abortive medications (triptans, pain relief) at the very onset of symptoms.",
      "Gently massage your scalp or temples."
    ],
    diet: [
      "Drink plenty of water to avoid dehydration-triggered migraine.",
      "Include magnesium-rich foods (whole grains, green vegetables).",
      "Avoid processed meats, alcohol (especially red wine), caffeine excess, and aged foods."
    ],
    lifestyleTips: [
      "Maintain a strict, consistent sleep-wake schedule.",
      "Eat meals at regular times; skipping meals is a major trigger.",
      "Practice relaxation therapies (yoga, meditation)."
    ],
    warningSignsForDoctor: [
      "First or worst headache of your life, especially if sudden ('thunderclap')",
      "Headache with fever, stiff neck, confusion, or weakness on one side of body (stroke/meningitis signs)",
      "New headache after age 50"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Keep a headache diary to identify and avoid triggers.",
      "Prophylactic medicines prescribed by neurologist if attacks are frequent."
    ],
    ageNotes: {
      child: "Can present as recurrent abdominal pain or motion sickness, later developing into typical headache.",
      adult: "Most common between ages 15 and 45, especially in women due to hormonal fluctuations.",
      elderly: "New onset migraine in elderly is rare and always requires an MRI to rule out other causes."
    },
    severity: "moderate"
  },
  {
    id: "tension_headache",
    name: "Tension Headache",
    nameHi: "तनाव का सिरदर्द",
    category: "Neurological",
    description: "The most common type of headache, felt as a constant, dull ache or tight band around the forehead, usually caused by muscle tension or stress.",
    descriptionHi: "सिरदर्द का सबसे आम प्रकार, जिसमें माथे के चारों ओर एक कसाव या हल्का दर्द महसूस होता है, जो आमतौर पर मांसपेशियों के तनाव या मानसिक तनाव से होता है।",
    symptoms: ["fatigue", "headache", "dizziness", "lightheadedness", "neck_stiffness", "sleep_difficulty", "anxiety"],
    keySymptoms: ["headache", "neck_stiffness", "fatigue"],
    causes: [
      "Muscle contraction in the neck, shoulders, and jaw",
      "Physical or emotional stress, anxiety, and fatigue",
      "Poor posture (prolonged computer/mobile screen use)",
      "Eye strain"
    ],
    homeCare: [
      "Take a warm bath or apply a heating pad to neck/shoulders to relax muscles.",
      "Practice gentle neck stretches and shoulder shrugs.",
      "Massage the temples, forehead, and neck muscles.",
      "Take rest in a quiet environment."
    ],
    diet: [
      "Stay hydrated.",
      "Avoid skipping meals.",
      "Limit caffeine intake."
    ],
    lifestyleTips: [
      "Improve posture at your workspace; take frequent breaks.",
      "Reduce screen time, especially before bed.",
      "Ensure a comfortable pillow and mattress."
    ],
    warningSignsForDoctor: [
      "Headache worsening over days or weeks",
      "Headache accompanied by fever, neck stiffness, or rash",
      "Headache after a recent head injury"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Manage stress levels.",
      "Maintain physical activity and correct posture."
    ],
    ageNotes: {
      child: "Can occur in school-going kids due to stress, lack of sleep, or vision problems.",
      adult: "Very common in working adults with desk jobs.",
      elderly: "Ensure it is not temporal arteritis (pain on side of head with vision issues)."
    },
    severity: "mild"
  },
  {
    id: "epilepsy",
    name: "Epilepsy",
    nameHi: "मिर्गी (दौरे आना)",
    category: "Neurological",
    description: "A neurological disorder characterized by recurrent, unprovoked seizures due to abnormal electrical activity in the brain.",
    descriptionHi: "एक तंत्रिका संबंधी विकार जिसमें मस्तिष्क में असामान्य विद्युत गतिविधि के कारण बार-बार बिना किसी स्पष्ट कारण के दौरे आते हैं।",
    symptoms: ["fatigue", "weakness", "dizziness", "confusion", "fainting", "seizures", "tremors", "tingling_numbness", "anxiety", "mood_swings"],
    keySymptoms: ["seizures", "fainting", "confusion"],
    causes: [
      "Brain injury, trauma, or stroke",
      "Brain infections (Neurocysticercosis - very common in India, Meningitis)",
      "Genetic factors or developmental disorders",
      "Brain tumors or oxygen deprivation during birth"
    ],
    homeCare: [
      "FIRST AID DURING A SEIZURE: Gently roll the person onto one side (recovery position) to keep the airway clear.",
      "Place something soft under their head (pillow/folded jacket).",
      "Do NOT put anything in the person's mouth (no keys, spoon, or cloth) and do not try to hold them down.",
      "Time the seizure. Stay with them until it ends and they are fully conscious."
    ],
    diet: [
      "Ketogenic diet (high fat, low carb) under strict clinical supervision may help in refractory cases.",
      "Avoid alcohol and excessive caffeine, which can trigger seizures."
    ],
    lifestyleTips: [
      "Strict compliance with anti-epileptic drugs (AEDs) is mandatory; never skip a single dose.",
      "Avoid sleep deprivation (one of the biggest seizure triggers).",
      "Do not drive, swim alone, or work near open machinery if seizures are uncontrolled."
    ],
    warningSignsForDoctor: [
      "Seizure lasting more than 5 minutes (Status Epilepticus - Emergency)",
      "Second seizure starts immediately after the first one",
      "Patient does not regain consciousness, or has difficulty breathing after the seizure"
    ],
    urgency: "emergency",
    prevention: [
      "Avoid head injuries (wear helmets).",
      "Proper prenatal care to avoid birth complications.",
      "Hygiene to avoid neurocysticercosis (wash pork/vegetables properly)."
    ],
    ageNotes: {
      child: "Needs careful pediatric neurology workup. Febrile seizures can occur with high fever (usually harmless but needs evaluation).",
      adult: "Must focus on medication adherence, lifestyle stability, and employment safety.",
      elderly: "Often secondary to stroke or cardiovascular issues. Requires cautious dosing of medications."
    },
    severity: "severe"
  },
  {
    id: "vertigo",
    name: "Vertigo",
    nameHi: "चक्कर आना (वर्टिगो)",
    category: "Neurological",
    description: "A sensation of spinning or moving, causing dizziness, loss of balance, nausea, and vomiting, often due to inner ear problems.",
    descriptionHi: "सिर घूमने या चक्कर आने का अहसास, जिससे संतुलन बिगड़ना, मतली और उल्टी की समस्या होती है, यह अक्सर कान के अंदरूनी हिस्से की गड़बड़ी से होता है।",
    symptoms: ["fatigue", "headache", "dizziness", "lightheadedness", "fainting", "blurred_vision", "ear_pain", "nausea", "vomiting", "tingling_numbness", "tremors"],
    keySymptoms: ["dizziness", "nausea", "vomiting", "lightheadedness"],
    causes: [
      "Benign Paroxysmal Positional Vertigo (BPPV) - crystal displacement in inner ear",
      "Meniere's disease (fluid build-up in inner ear) or Vestibular Neuritis",
      "Migraine or neck muscle tension",
      "Reduced blood flow to the brain"
    ],
    homeCare: [
      "Lie down in a quiet, dark room during a vertigo attack.",
      "Sit on the edge of the bed for a minute before standing up.",
      "Avoid sudden neck movements or looking up/down quickly.",
      "Perform vestibular rehabilitation exercises (like the Epley maneuver) under doctor's guidance."
    ],
    diet: [
      "Low-salt diet (crucial for Meniere's disease).",
      "Stay hydrated throughout the day.",
      "Avoid caffeine, chocolate, alcohol, and high-sugar foods."
    ],
    lifestyleTips: [
      "Ensure proper lighting in corridors/stairs to prevent falls.",
      "Avoid driving or climbing ladders during active episodes."
    ],
    warningSignsForDoctor: [
      "Vertigo accompanied by double vision, slurred speech, or difficulty walking",
      "Weakness or numbness in arms/legs",
      "Sudden hearing loss or high fever"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Manage blood pressure and ear health.",
      "Avoid sudden head position changes if prone to BPPV."
    ],
    ageNotes: {
      child: "Rare. May present as travel sickness or transient imbalance.",
      adult: "BPPV and migraine-associated vertigo are common.",
      elderly: "Major cause of falls and fractures. Requires immediate medical evaluation and safety adjustments at home."
    },
    severity: "moderate"
  },
  {
    id: "meningitis",
    name: "Meningitis",
    nameHi: "मेनिनजाइटिस (मस्तिष्क ज्वर)",
    category: "Neurological",
    description: "A life-threatening inflammation of the protective membranes covering the brain and spinal cord, presenting with high fever, stiff neck, and confusion.",
    descriptionHi: "मस्तिष्क और रीढ़ की हड्डी को ढकने वाली झिल्लियों में होने वाली एक जानलेवा सूजन, जिसमें तेज़ बुखार, गर्दन में अकड़न और भ्रम होता है।",
    symptoms: ["fever", "high_fever", "chills", "fatigue", "weakness", "loss_of_appetite", "body_ache", "headache", "severe_headache", "dizziness", "lightheadedness", "confusion", "fainting", "red_eyes", "blurred_vision", "light_sensitivity", "sore_throat", "nausea", "vomiting", "skin_rash", "neck_stiffness", "seizures"],
    keySymptoms: ["neck_stiffness", "high_fever", "severe_headache", "light_sensitivity", "confusion"],
    causes: [
      "Bacterial infections (Neisseria meningitidis, Streptococcus pneumoniae) - medical emergency",
      "Viral infections (Enteroviruses, Herpes)",
      "Fungal infections (cryptococcal in immunocompromised)"
    ],
    homeCare: [
      "NO home care. This is a critical medical emergency.",
      "Go to the nearest hospital casualty immediately.",
      "Keep patient lying down, protect from bright light."
    ],
    diet: [
      "Intravenous fluids and medications in the hospital."
    ],
    lifestyleTips: [
      "Seek emergency medical help.",
      "Understand the key sign: inability to touch chin to chest due to neck stiffness."
    ],
    warningSignsForDoctor: [
      "High fever with severe splitting headache",
      "Stiff neck (rigidity) and light sensitivity",
      "Confusion, seizures, or a purple/red rash that does not fade under pressure"
    ],
    urgency: "emergency",
    prevention: [
      "Meningococcal and pneumococcal vaccines.",
      "Maintain hygiene, avoid sharing cups/utensils."
    ],
    ageNotes: {
      child: "High mortality. In infants, look for bulging soft spot on head (fontanelle), constant crying, or stiffness.",
      adult: "Classic signs present. Immediate lumbar puncture and IV antibiotics are required.",
      elderly: "May present with confusion and low fever without typical neck stiffness. High clinical suspicion is needed."
    },
    severity: "severe"
  },

  // =========================================================================
  // 7. SKIN CONDITIONS (6 Diseases)
  // =========================================================================
  {
    id: "fungal_infection",
    name: "Fungal Skin Infection",
    nameHi: "फंगल त्वचा संक्रमण",
    category: "Skin Conditions",
    description: "A common superficial skin infection caused by fungi, leading to itchy, red, scaly patches on warm, moist areas of the body.",
    descriptionHi: "फंगस के कारण होने वाला एक सामान्य त्वचा संक्रमण, जिससे शरीर के गर्म और नम हिस्सों पर खुजली वाले, लाल और पपड़ीदार धब्बे हो जाते हैं।",
    symptoms: ["skin_rash", "itching", "dry_skin", "skin_patches", "red_patches", "scaly_skin", "blisters"],
    keySymptoms: ["itching", "red_patches", "scaly_skin"],
    causes: [
      "Dermatophytes or yeast infection in warm, humid climates",
      "Excessive sweating and wearing tight, synthetic clothing",
      "Sharing personal items like towels, combs, or shoes with infected individuals",
      "Poor personal hygiene"
    ],
    homeCare: [
      "Apply prescribed antifungal creams (clotrimazole, miconazole) consistently; complete the course.",
      "Keep the affected skin clean and completely dry.",
      "Wash clothes, towels, and underwear daily; dry them in direct sunlight or iron them to kill fungal spores.",
      "Avoid scratching, which spreads the infection."
    ],
    diet: [
      "Limit sugary foods and refined carbs (yeast feeds on sugars).",
      "Include garlic and yogurt (natural antifungal/probiotics) in your diet.",
      "Drink plenty of water."
    ],
    lifestyleTips: [
      "Wear loose-fitting, breathable cotton clothing.",
      "Use antifungal dusting powder in skin folds (armpits, groin) if prone to sweating.",
      "Do not walk barefoot in public showers or locker rooms."
    ],
    warningSignsForDoctor: [
      "Infection spreading rapidly despite using antifungal creams",
      "Pus formation, swelling, or warm skin (indicates secondary bacterial infection)",
      "Infection in immunocompromised individuals (diabetic)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Keep body dry and clean.",
      "Change sweaty clothes promptly after workouts.",
      "Do not share personal clothing."
    ],
    ageNotes: {
      child: "Diaper rash is common; keep diaper area dry. Ringworm of the scalp (tinea capitis) needs oral meds.",
      adult: "Athlete's foot and jock itch are common. Avoid steroid-containing creams (like quadriderm) which worsen fungal infections.",
      elderly: "Skin folds need special care; ensure they are dried properly after baths."
    },
    severity: "mild"
  },
  {
    id: "eczema",
    name: "Eczema (Atopic Dermatitis)",
    nameHi: "एक्जिमा (सूखी खुजली)",
    category: "Skin Conditions",
    description: "A chronic inflammatory skin condition causing dry, intensely itchy, red, and inflamed skin patches, often linked to allergies.",
    descriptionHi: "एक पुरानी सूजन वाली त्वचा की स्थिति जिसके कारण त्वचा सूखी, लाल और अत्यधिक खुजलीदार हो जाती है, यह अक्सर एलर्जी से जुड़ी होती है।",
    symptoms: ["skin_rash", "itching", "dry_skin", "skin_patches", "red_patches", "scaly_skin", "blisters", "swelling", "anxiety", "sleep_difficulty"],
    keySymptoms: ["itching", "dry_skin", "red_patches", "scaly_skin"],
    causes: [
      "Genetic skin barrier dysfunction",
      "Immune system overreaction to environmental triggers (soaps, pollen, cold weather)",
      "Emotional stress and food allergies"
    ],
    homeCare: [
      "Apply thick, fragrance-free moisturizers (ceramide-based) immediately after bathing to lock in moisture.",
      "Take short, lukewarm baths instead of hot showers.",
      "Use mild, soap-free cleansers.",
      "Apply cool compresses to soothe severe itching."
    ],
    diet: [
      "Eat foods rich in anti-inflammatory omega-3 fatty acids (flaxseeds, walnuts).",
      "Avoid foods that seem to trigger flare-ups (common ones include dairy, gluten, nuts).",
      "Drink water."
    ],
    lifestyleTips: [
      "Wear soft, breathable cotton clothes; avoid wool or synthetic fabrics.",
      "Use fragrance-free laundry detergents.",
      "Keep fingernails short to prevent skin damage from scratching."
    ],
    warningSignsForDoctor: [
      "Skin looks infected (pus, yellow crusts, or severe pain)",
      "Itching is so intense that it prevents sleep",
      "Eczema rash spreads all over the body"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Keep skin moisturized daily.",
      "Identify and avoid allergens and trigger factors."
    ],
    ageNotes: {
      child: "Very common in infants, often appearing on cheeks and scalp. Keep skin moisturized. Avoid soap.",
      adult: "Often manifests on hands, elbows, and back of knees. Hand hygiene needs gentle products.",
      elderly: "Dry skin (xerosis) in elderly makes them highly prone. Liberal use of moisturizers is essential."
    },
    severity: "moderate"
  },
  {
    id: "psoriasis",
    name: "Psoriasis",
    nameHi: "सोरायसिस (अपरस)",
    category: "Skin Conditions",
    description: "An autoimmune disease that speeds up the growth cycle of skin cells, leading to thick, red patches covered with silvery scales.",
    descriptionHi: "एक ऑटोइम्यून बीमारी जो त्वचा कोशिकाओं के विकास चक्र को तेज कर देती है, जिससे त्वचा पर चांदी जैसी पपड़ीदार मोटी और लाल परत बन जाती है।",
    symptoms: ["fatigue", "skin_rash", "itching", "dry_skin", "skin_patches", "red_patches", "scaly_skin", "joint_pain", "joint_swelling", "joint_stiffness", "anxiety", "depression"],
    keySymptoms: ["scaly_skin", "skin_patches", "itching", "dry_skin"],
    causes: [
      "Autoimmune disorder where T-cells attack healthy skin cells",
      "Genetic predisposition",
      "Triggers: stress, skin injury, infections, cold dry weather, and certain drugs"
    ],
    homeCare: [
      "Apply moisturizing creams or ointments (salicylic acid or coal tar-based) under medical advice.",
      "Take daily baths with colloidal oatmeal or Epsom salts to soothe scales.",
      "Get moderate sunlight exposure (UV light helps slow cell growth), but avoid sunburn."
    ],
    diet: [
      "Anti-inflammatory diet: olive oil, spinach, turmeric, berries, nuts.",
      "Limit red meat, dairy, gluten, and highly processed foods.",
      "Strictly avoid alcohol, which can trigger severe flare-ups."
    ],
    lifestyleTips: [
      "Manage stress through meditation, yoga, or counseling.",
      "Avoid skin injuries (scratches, insect bites) which can trigger new patches (Koebner phenomenon).",
      "Use a humidifier in dry weather."
    ],
    warningSignsForDoctor: [
      "Development of joint pain, stiffness, or swelling (Psoriatic Arthritis)",
      "Psoriasis patches cover more than 10% of the body",
      "Pustular psoriasis (pus-filled blisters appearing all over)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "No cure, but avoiding known triggers like smoking, alcohol, and stress can prevent flares."
    ],
    ageNotes: {
      child: "Can present as scalp scaling or small spots (guttate psoriasis) after a strep throat infection.",
      adult: "Often develops between ages 15 and 35. Impact on mental health and self-esteem should be addressed.",
      elderly: "Requires careful selection of systemic medications due to potential kidney/liver interactions."
    },
    severity: "severe"
  },
  {
    id: "acne",
    name: "Acne Vulgaris",
    nameHi: "मुँहासे (एक्ने)",
    category: "Skin Conditions",
    description: "A common skin condition occurring when hair follicles become clogged with oil and dead skin cells, causing pimples and blackheads.",
    descriptionHi: "एक आम त्वचा की स्थिति जो तब होती है जब बाल कूप (रोमकूप) तेल और मृत कोशिकाओं से बंद हो जाते हैं, जिससे मुँहासे होते हैं।",
    symptoms: ["skin_rash", "itching", "red_patches", "acne_pimples", "dark_spots", "anxiety"],
    keySymptoms: ["acne_pimples", "dark_spots"],
    causes: [
      "Excess sebum (oil) production by sebaceous glands",
      "Clogged pores due to dead skin cells",
      "Bacterial growth (Propionibacterium acnes)",
      "Hormonal fluctuations (puberty, menstrual cycle, PCOS)"
    ],
    homeCare: [
      "Wash your face twice daily with a gentle, non-comedogenic cleanser.",
      "Do NOT pop, squeeze, or scratch pimples (leads to scarring and dark spots).",
      "Use OTC products containing salicylic acid, benzoyl peroxide, or tea tree oil.",
      "Keep hair clean and away from the face."
    ],
    diet: [
      "Drink 2-3 liters of water daily.",
      "Eat foods low in glycemic index (whole grains, vegetables).",
      "Limit dairy products and high-sugar foods, which can worsen acne."
    ],
    lifestyleTips: [
      "Choose oil-free (non-comedogenic) cosmetics and sunscreen.",
      "Wash pillowcases frequently.",
      "Avoid touching your face."
    ],
    warningSignsForDoctor: [
      "Severe, painful, deep cysts or nodules (Nodulocystic Acne)",
      "Acne causing significant emotional distress, anxiety, or depression",
      "Acne starting suddenly in adults (may indicate underlying hormonal disorder)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Keep face clean.",
      "Avoid heavy make-up.",
      "Maintain a balanced diet."
    ],
    ageNotes: {
      child: "Rare in pre-pubertal children. Consult if present.",
      adult: "Adult acne is common, especially in women due to hormonal imbalances (PCOS).",
      elderly: "Rare; check if medications like corticosteroids are causing drug-induced acne."
    },
    severity: "mild"
  },
  {
    id: "ringworm",
    name: "Ringworm (Tinea)",
    nameHi: "दाद",
    category: "Skin Conditions",
    description: "A contagious fungal infection characterized by a red, circular, itchy rash with clearer skin in the middle.",
    descriptionHi: "एक संक्रामक फंगल संक्रमण, जिसकी पहचान लाल, गोलाकार, खुजलीदार दानों से होती है, जिसके बीच की त्वचा साफ होती है।",
    symptoms: ["skin_rash", "itching", "dry_skin", "skin_patches", "red_patches", "scaly_skin", "ring_shaped_rash"],
    keySymptoms: ["ring_shaped_rash", "itching", "scaly_skin"],
    causes: [
      "Fungal infection (dermatophytes)",
      "Skin-to-skin contact with an infected person or animal",
      "Sharing contaminated towels, clothes, bedding, or combs",
      "Warm, humid environment"
    ],
    homeCare: [
      "Apply over-the-counter antifungal creams (terbinafine, clotrimazole) for at least 2 weeks.",
      "Keep the affected area clean and dry.",
      "Do not scratch the area; wash hands immediately if you touch the rash.",
      "Wash towels and sheets frequently in hot water."
    ],
    diet: [
      "No specific diet, but immunity-boosting foods help fight infections.",
      "Limit sugar."
    ],
    lifestyleTips: [
      "Wear loose, breathable cotton clothes.",
      "Avoid sharing personal items.",
      "Keep pets clean and treated if they show bald patches."
    ],
    warningSignsForDoctor: [
      "Rash does not improve after 2 weeks of antifungal treatment",
      "Signs of secondary bacterial infection (redness spreading, warm to touch, pus)",
      "Fungal infection on the scalp (needs oral prescription drugs)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Keep skin clean and dry.",
      "Shower immediately after sports/sweating.",
      "Avoid sharing towels/clothes."
    ],
    ageNotes: {
      child: "Very common in school-going kids. Teach them not to share hats or combs.",
      adult: "Commonly occurs in groin (jock itch) or feet (athlete's foot).",
      elderly: "Skin is thin; apply creams gently. Monitor for secondary infections."
    },
    severity: "mild"
  },
  {
    id: "scabies",
    name: "Scabies",
    nameHi: "खुजली (स्केबीज)",
    category: "Skin Conditions",
    description: "An intensely itchy skin infestation caused by microscopic mites that burrow into the skin, causing a rash that worsens at night.",
    descriptionHi: "सूक्ष्म कीड़ों (माइट्स) के कारण होने वाला त्वचा का एक अत्यधिक खुजलीदार संक्रमण, जो त्वचा में बिल बना लेते हैं, रात में खुजली बढ़ जाती है।",
    symptoms: ["skin_rash", "itching", "dry_skin", "skin_patches", "red_patches", "scaly_skin", "blisters", "burrow_marks"],
    keySymptoms: ["itching", "burrow_marks", "skin_rash"],
    causes: [
      "Infestation by Sarcoptes scabiei mites",
      "Prolonged, direct skin-to-skin contact with an infested person",
      "Sharing infested clothing, bedding, or towels (less common but possible)"
    ],
    homeCare: [
      "Consult a doctor for Permethrin 5% cream prescription. Apply from neck down to toes and wash off after 8-14 hours.",
      "ALL family members or close contacts must be treated at the same time, even if they don't have itching.",
      "Wash all clothing, bedding, and towels used in the last 3 days in hot water and dry in high heat (or sun-dry for 3 days)."
    ],
    diet: [
      "Normal diet. Stay hydrated."
    ],
    lifestyleTips: [
      "Keep fingernails short to prevent scratching skin raw.",
      "Avoid physical contact with others until treatment is complete."
    ],
    warningSignsForDoctor: [
      "Itching continues to worsen 2 weeks after treatment (may need repeat treatment)",
      "Pus, crusting, or severe pain in scratched skin patches",
      "Thick crusts on the skin (crusted scabies, highly contagious)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Avoid close contact with infested individuals.",
      "Treat all household contacts simultaneously."
    ],
    ageNotes: {
      child: "Rash can appear on palms, soles, head, and neck. Pediatric guidance for treatment is necessary.",
      adult: "Classic presentation in skin folds (between fingers, wrist, armpits).",
      elderly: "May present with severe itching but very little rash; often misdiagnosed as dry skin."
    },
    severity: "moderate"
  },

  // =========================================================================
  // 8. METABOLIC & HORMONAL (7 Diseases)
  // =========================================================================
  {
    id: "diabetes_type_1",
    name: "Diabetes Type 1",
    nameHi: "मधुमेह प्रकार 1 (टाइप 1 डायबिटीज)",
    category: "Metabolic & Hormonal",
    description: "A chronic autoimmune condition where the pancreas produces little or no insulin, requiring daily insulin therapy.",
    descriptionHi: "एक पुरानी ऑटोइम्यून स्थिति जिसमें अग्न्याशय बहुत कम या बिल्कुल भी इंसुलिन नहीं बनाता है, जिससे दैनिक इंसुलिन चिकित्सा की आवश्यकता होती है।",
    symptoms: ["fatigue", "weakness", "weight_loss", "loss_of_appetite", "dehydration", "blurred_vision", "frequent_urination", "excessive_thirst", "excessive_urination", "increased_hunger", "dry_mouth", "irritability", "mood_swings"],
    keySymptoms: ["excessive_thirst", "frequent_urination", "weight_loss", "increased_hunger"],
    causes: [
      "Autoimmune destruction of insulin-producing beta cells in pancreas",
      "Genetic predisposition",
      "Environmental triggers (viruses)"
    ],
    homeCare: [
      "Strictly follow the prescribed insulin regimen (injections/pump).",
      "Monitor blood glucose levels 3-4 times daily using a glucometer.",
      "Always carry fast-acting glucose tablets or candy for low blood sugar (hypoglycemia) emergencies."
    ],
    diet: [
      "Carbohydrate counting diet under dietician guidance.",
      "High fiber, complex carbs, vegetables, lean proteins.",
      "Avoid simple sugars, sweets, fruit juices, and refined flour."
    ],
    lifestyleTips: [
      "Wear medical ID stating you have Type 1 Diabetes.",
      "Check feet daily for cuts or blisters.",
      "Exercise regularly but monitor sugar before and after."
    ],
    warningSignsForDoctor: [
      "Fruity-smelling breath, rapid breathing, confusion, or vomiting (Diabetic Ketoacidosis - Emergency)",
      "Blood sugar levels consistently above 250 mg/dL or below 70 mg/dL",
      "Loss of consciousness or seizures due to low sugar"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Cannot be prevented."
    ],
    ageNotes: {
      child: "Often diagnosed in children/teens. Parents need thorough training on insulin and glucagon administration.",
      adult: "Requires lifelong management, glucose monitoring, and carb awareness.",
      elderly: "Needs tight monitoring to avoid dangerous hypoglycemia, which can trigger cardiac events."
    },
    severity: "severe"
  },
  {
    id: "diabetes_type_2",
    name: "Diabetes Type 2",
    nameHi: "मधुमेह प्रकार 2 (टाइप 2 डायबिटीज)",
    category: "Metabolic & Hormonal",
    description: "A chronic metabolic condition characterized by insulin resistance and high blood sugar, closely linked to obesity and lifestyle.",
    descriptionHi: "एक पुरानी चयापचय संबंधी स्थिति जिसमें शरीर में इंसुलिन का सही उपयोग नहीं हो पाता (इंसुलिन प्रतिरोध), यह जीवनशैली से जुड़ी बीमारी है।",
    symptoms: ["fatigue", "weakness", "blurred_vision", "frequent_urination", "excessive_thirst", "excessive_urination", "tingling_numbness", "slow_healing_wounds", "increased_hunger", "dry_mouth", "itching"],
    keySymptoms: ["excessive_thirst", "frequent_urination", "slow_healing_wounds", "tingling_numbness"],
    causes: [
      "Insulin resistance where body cells don't respond to insulin",
      "Sedentary lifestyle and obesity (excess abdominal fat)",
      "Genetic factors and family history",
      "Unhealthy diet high in refined carbohydrates"
    ],
    homeCare: [
      "Take prescribed oral hypoglycemic drugs (or insulin) regularly.",
      "Monitor fasting and post-prandial blood sugar levels as recommended.",
      "Check feet daily for any minor injuries to prevent diabetic foot ulcers."
    ],
    diet: [
      "Low glycemic index foods: whole grains (dalia, oats, brown rice), sprouts, green vegetables.",
      "High fiber, lean protein, healthy fats (nuts, seeds).",
      "Avoid sweets, white rice, maida, potatoes, sugary drinks, and junk food."
    ],
    lifestyleTips: [
      "Engage in at least 30-45 minutes of brisk walking or exercise daily.",
      "Focus on weight loss (even 5-10% weight loss significantly improves sugar levels).",
      "Manage stress levels."
    ],
    warningSignsForDoctor: [
      "Non-healing foot wound, cut, or ulcer",
      "Blood sugar readings consistently exceeding 300 mg/dL",
      "Extreme confusion, drowsiness, or dehydration"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Maintain a healthy weight.",
      "Stay physically active.",
      "Eat a balanced, low-sugar diet."
    ],
    ageNotes: {
      child: "Increasing incidence in obese adolescents. Requires lifestyle changes.",
      adult: "Most common type. Can be managed well with diet, exercise, and oral drugs.",
      elderly: "Look for vision changes, kidney function decline, and neuropathy symptoms. Manage gently."
    },
    severity: "severe"
  },
  {
    id: "hypothyroidism",
    name: "Hypothyroidism",
    nameHi: "हाइपोथायरायडिज्म (कम थायराइड होना)",
    category: "Metabolic & Hormonal",
    description: "An underactive thyroid gland that does not produce enough thyroid hormones, slowing down the body's metabolism.",
    descriptionHi: "थायराइड ग्रंथि का कम सक्रिय होना जिससे शरीर में पर्याप्त थायराइड हार्मोन नहीं बन पाता, और शरीर की चयापचय प्रक्रिया धीमी हो जाती है।",
    symptoms: ["fatigue", "weakness", "weight_gain", "constipation", "skin_rash", "dry_skin", "pale_skin", "joint_pain", "joint_stiffness", "muscle_pain", "muscle_cramps", "neck_stiffness", "sadness", "sleep_difficulty", "hair_loss", "brittle_nails", "cold_intolerance", "swollen_neck"],
    keySymptoms: ["weight_gain", "fatigue", "cold_intolerance", "swollen_neck"],
    causes: [
      "Hashimoto's thyroiditis (autoimmune destruction of thyroid)",
      "Iodine deficiency (common in certain hilly areas)",
      "Radiation therapy or surgical removal of thyroid gland"
    ],
    homeCare: [
      "Take prescribed Levothyroxine tablet daily in the morning on an empty stomach.",
      "Wait at least 30-60 minutes after taking thyroid medicine before drinking tea, coffee, or eating.",
      "Get blood tested for TSH (Thyroid Stimulating Hormone) every 3-6 months."
    ],
    diet: [
      "Use iodized salt.",
      "Include fiber-rich foods to manage constipation.",
      "Limit goitrogenic foods in raw form: cabbage, cauliflower, broccoli, soy products (cooked forms are generally fine)."
    ],
    lifestyleTips: [
      "Keep active to combat fatigue and weight gain.",
      "Ensure proper skin care with moisturizers for dry skin."
    ],
    warningSignsForDoctor: [
      "Extreme fatigue, coldness, confusion, or difficulty breathing (Myxedema coma - rare emergency)",
      "Heart rate dropping below 50 bpm",
      "Rapidly growing swelling in the neck (Goiter)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Ensure adequate dietary iodine intake."
    ],
    ageNotes: {
      child: "Congenital hypothyroidism can cause mental retardation. All newborns should be screened at birth.",
      adult: "Very common in women of childbearing age. Can affect fertility and pregnancy outcomes.",
      elderly: "Symptoms like memory lapses or slow movements can be mistaken for dementia. Check TSH."
    },
    severity: "moderate"
  },
  {
    id: "hyperthyroidism",
    name: "Hyperthyroidism",
    nameHi: "हाइपरथायरायडिज्म (अधिक थायराइड होना)",
    category: "Metabolic & Hormonal",
    description: "An overactive thyroid gland producing excessive thyroid hormones, accelerating the body's metabolic rate, causing weight loss and anxiety.",
    descriptionHi: "थायराइड ग्रंथि का अत्यधिक सक्रिय होना जिससे शरीर में बहुत ज़्यादा थायराइड हार्मोन बनता है, जिससे शरीर का मेटाबॉलिज्म बढ़ जाता है।",
    symptoms: ["fatigue", "weakness", "weight_loss", "night_sweats", "loss_of_appetite", "palpitations", "irregular_heartbeat", "diarrhoea", "frequent_bowel_movements", "itching", "fine_tremors", "tremors", "anxiety", "restlessness", "irritability", "mood_swings", "sleep_difficulty", "excessive_sweating", "heat_intolerance", "swollen_neck"],
    keySymptoms: ["weight_loss", "palpitations", "heat_intolerance", "tremors"],
    causes: [
      "Graves' disease (autoimmune stimulation of thyroid)",
      "Toxic multinodular goiter or thyroid nodules",
      "Thyroiditis (inflammation of thyroid)"
    ],
    homeCare: [
      "Consult an endocrinologist for antithyroid medications (methimazole, carbimazole) or radioactive iodine.",
      "Monitor heart rate and weight regularly.",
      "Avoid triggers like smoking, which can worsen eye symptoms (Graves' ophthalmopathy)."
    ],
    diet: [
      "High-calorie, nutrient-rich diet to compensate for weight loss.",
      "Avoid iodized salt and sea food if advised by doctor.",
      "Limit caffeine, cola, and tea, which exacerbate palpitations."
    ],
    lifestyleTips: [
      "Get plenty of rest.",
      "Use lubricating eye drops if eyes feel dry or protruding.",
      "Wear sunglasses to protect eyes."
    ],
    warningSignsForDoctor: [
      "Sudden high fever, rapid heart rate (>140 bpm), agitation, or delirium (Thyroid Storm - Emergency)",
      "Persistent severe vomiting and inability to digest food",
      "Difficulty swallowing or breathing"
    ],
    urgency: "within_24hrs",
    prevention: [
      "No direct prevention, but early diagnosis prevents cardiac complications."
    ],
    ageNotes: {
      child: "Can cause rapid growth, behavior issues, and poor concentration in school.",
      adult: "More common in women. Often presents with menstrual irregularities.",
      elderly: "Palpitations, weight loss, or depression may be the only symptoms. Often mistaken for heart disease."
    },
    severity: "severe"
  },
  {
    id: "vitamin_d_deficiency",
    name: "Vitamin D Deficiency",
    nameHi: "विटामिन डी की कमी",
    category: "Metabolic & Hormonal",
    description: "A common condition where the body has insufficient Vitamin D, leading to weak bones, muscle pain, fatigue, and lowered immunity.",
    descriptionHi: "एक आम समस्या जिसमें शरीर में पर्याप्त विटामिन डी नहीं होता, जिससे हड्डियां कमजोर होना, मांसपेशियों में दर्द और थकान होती है।",
    symptoms: ["fatigue", "weakness", "joint_pain", "muscle_pain", "muscle_cramps", "back_pain", "bone_pain", "depression", "hair_loss"],
    keySymptoms: ["bone_pain", "muscle_pain", "fatigue", "back_pain"],
    causes: [
      "Inadequate sun exposure (staying indoors, using sunscreen, pollution)",
      "Poor dietary intake of Vitamin D",
      "Malabsorption issues in the gut"
    ],
    homeCare: [
      "Spend 15-20 minutes in midday sunlight (11 AM to 2 PM) without sunscreen, exposing arms/legs.",
      "Take Vitamin D3 supplements (cholecalciferol) weekly as prescribed by a doctor."
    ],
    diet: [
      "Eat Vitamin D rich foods: egg yolks, mushrooms (exposed to sunlight), fortified milk, cheese, paneer, and fatty fish.",
      "Include calcium-rich foods (milk, yogurt, ragi) since Vitamin D is required for calcium absorption."
    ],
    lifestyleTips: [
      "Engage in outdoor physical activities (walking, jogging).",
      "Ensure proper posture."
    ],
    warningSignsForDoctor: [
      "Severe, generalized bone pain",
      "Recurrent bone fractures with minimal impact",
      "Severe muscle spasms or tetany (muscle twitching)"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Regular outdoor activity.",
      "Consume Vitamin D fortified foods."
    ],
    ageNotes: {
      child: "Causes Rickets (bowed legs, delayed teething). Infant Vitamin D drops are recommended.",
      adult: "Often causes general body ache, low back pain, and tiredness. Highly common in office workers.",
      elderly: "Increases risk of osteoporosis and falls. Supplementation is vital."
    },
    severity: "mild"
  },
  {
    id: "iron_deficiency_anaemia",
    name: "Iron Deficiency Anaemia",
    nameHi: "आयरन की कमी से एनीमिया",
    category: "Metabolic & Hormonal",
    description: "A type of anemia occurring when the body lacks sufficient iron to produce hemoglobin, leading to chronic tiredness and pale skin.",
    descriptionHi: "शरीर में आयरन की कमी के कारण होने वाला एनीमिया, जिससे हीमोग्लोबिन नहीं बन पाता और कमजोरी तथा पीलापन रहता है।",
    symptoms: ["fatigue", "weakness", "dizziness", "lightheadedness", "fainting", "shortness_of_breath", "palpitations", "irregular_heartbeat", "pale_skin", "cold_intolerance", "hair_loss", "brittle_nails"],
    keySymptoms: ["fatigue", "pale_skin", "weakness", "shortness_of_breath"],
    causes: [
      "Inadequate dietary iron intake (vegetarians need to plan iron intake carefully)",
      "Poor iron absorption in the gut (due to celiac disease, tea with meals)",
      "Blood loss from heavy periods, ulcers, hookworms, or frequent blood donations"
    ],
    homeCare: [
      "Take prescribed iron tablets with Vitamin C (e.g., lime water) on an empty stomach for better absorption.",
      "Do NOT take iron supplements with calcium, milk, tea, or antacids.",
      "Ensure adequate rest; do not overexert when feeling extremely fatigued."
    ],
    diet: [
      "Iron-rich foods: pomegranate, beetroot, dates, spinach, sesame seeds, beans, lentils, jaggery.",
      "Vitamin C rich foods: amla, guava, oranges, lemons.",
      "Avoid drinking tea or coffee within 1 hour of meals."
    ],
    lifestyleTips: [
      "Maintain kitchen hygiene.",
      "Routine deworming (Albendazole) once in 6 months to prevent blood-sucking hookworms in gut."
    ],
    warningSignsForDoctor: [
      "Severe shortness of breath with minor movement",
      "Chest pain or rapid pounding heartbeat",
      "Extreme dizziness or fainting when standing up"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Eat a balanced diet.",
      "Avoid routine tea consumption immediately after food."
    ],
    ageNotes: {
      child: "Can lead to poor focus, low attention span, and developmental delays. Pediatric evaluation is key.",
      adult: "Particularly common in pregnant and menstruating women. Screening is necessary.",
      elderly: "Check for occult blood in stools (to rule out colon polyps/cancer) if iron anemia develops."
    },
    severity: "moderate"
  },
  {
    id: "vitamin_b12_deficiency",
    name: "Vitamin B12 Deficiency",
    nameHi: "विटामिन बी12 की कमी",
    category: "Metabolic & Hormonal",
    description: "A deficiency of Vitamin B12 causing anemia, memory issues, and nerve damage (pins and needles in hands/feet).",
    descriptionHi: "विटामिन बी12 की कमी जिससे एनीमिया, याददाश्त में कमी और तंत्रिका क्षति (हाथ-पैरों में झनझनाहट) हो सकती है।",
    symptoms: ["fatigue", "weakness", "dizziness", "lightheadedness", "fainting", "shortness_of_breath", "palpitations", "pale_skin", "tingling_numbness", "numbness", "pins_and_needles", "memory_problems", "difficulty_concentrating", "anxiety", "depression"],
    keySymptoms: ["tingling_numbness", "pins_and_needles", "fatigue", "memory_problems"],
    causes: [
      "Strict vegetarian or vegan diet (B12 is only found naturally in animal products)",
      "Pernicious anemia (autoimmune lack of intrinsic factor needed for B12 absorption)",
      "Poor absorption due to stomach surgery or gut diseases"
    ],
    homeCare: [
      "Consult a doctor for serum B12 blood levels.",
      "Take prescribed B12 tablets or methylcobalamin injections as directed.",
      "Keep hands and feet warm; massage gently if numbness is present."
    ],
    diet: [
      "Include B12 fortified foods (cereals, yeast).",
      "Vegetarians should consume milk, yogurt, paneer, and cheese.",
      "Non-vegetarians can eat eggs, fish, poultry, and meat."
    ],
    lifestyleTips: [
      "Maintain a balanced diet.",
      "Avoid smoking and excessive alcohol, which reduce absorption."
    ],
    warningSignsForDoctor: [
      "Loss of balance or difficulty walking",
      "Severe memory loss, confusion, or hallucinations",
      "Progressive numbness or weakness in limbs"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Vegetarians should take regular B12 supplements or fortified foods."
    ],
    ageNotes: {
      child: "Can cause failure to thrive, developmental delays, and movement issues.",
      adult: "Very common in Indian vegetarians; requires routine checking.",
      elderly: "Highly common due to reduced stomach acid (needed to release B12 from food). Often presents with memory lapses."
    },
    severity: "moderate"
  },

  // =========================================================================
  // 9. MUSCULOSKELETAL (5 Diseases)
  // =========================================================================
  {
    id: "arthritis",
    name: "Arthritis (Joint Inflammation)",
    nameHi: "गठिया (आर्थराइटिस)",
    category: "Musculoskeletal",
    description: "Inflammation of one or more joints, causing pain, swelling, stiffness, and reduced range of motion, worsening with age.",
    descriptionHi: "एक या अधिक जोड़ों में सूजन, जिससे दर्द, सूजन, अकड़न और चलने-फिरने में कठिनाई होती है, जो उम्र के साथ बढ़ सकती है।",
    symptoms: ["fatigue", "weakness", "joint_pain", "joint_swelling", "joint_stiffness", "muscle_pain", "neck_stiffness", "swollen_joints", "reduced_mobility"],
    keySymptoms: ["joint_pain", "joint_stiffness", "joint_swelling", "reduced_mobility"],
    causes: [
      "Osteoarthritis: wear and tear of joint cartilage over time",
      "Rheumatoid Arthritis: autoimmune disorder attacking joint lining",
      "Joint injury or obesity placing excess stress on joints"
    ],
    homeCare: [
      "Apply warm compress for stiffness; apply cold gel/ice packs for acute joint swelling.",
      "Perform low-impact exercises (swimming, cycling, walking) to keep joints mobile.",
      "Maintain a healthy weight to reduce pressure on knees and hips.",
      "Avoid sitting in one position for too long."
    ],
    diet: [
      "Anti-inflammatory diet rich in Omega-3: walnuts, flaxseeds, chia seeds.",
      "Include garlic, ginger, and turmeric (contains curcumin which reduces inflammation).",
      "Avoid processed sugars, refined oils, and excessive salt."
    ],
    lifestyleTips: [
      "Wear supportive, comfortable footwear with good cushioning.",
      "Use assistive devices (like knee braces) if joints are unstable.",
      "Practice gentle yoga."
    ],
    warningSignsForDoctor: [
      "Joint is red, hot to touch, and accompanied by fever (indicates Septic Arthritis - Emergency)",
      "Inability to bear weight on the joint",
      "Sudden, severe joint deformity or severe swelling"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Maintain a healthy weight.",
      "Avoid joint injuries.",
      "Stay active."
    ],
    ageNotes: {
      child: "Juvenile idiopathic arthritis (JIA) can affect children. Needs early pediatric rheumatology check.",
      adult: "Rheumatoid arthritis often starts in young adults (30-50). Early treatment prevents joint damage.",
      elderly: "Osteoarthritis is highly prevalent. Focus on mobility, pain control, and fall prevention."
    },
    severity: "moderate"
  },
  {
    id: "back_pain",
    name: "Back Pain",
    nameHi: "कमर दर्द (पीठ दर्द)",
    category: "Musculoskeletal",
    description: "Pain in the spine or surrounding muscles, ranging from a dull ache to a sharp sensation, often due to muscle strain or poor posture.",
    descriptionHi: "रीढ़ की हड्डी या उसके आसपास की मांसपेशियों में दर्द, जो मांसपेशियों में खिंचाव या गलत तरीके से बैठने के कारण हो सकता है।",
    symptoms: ["fatigue", "muscle_pain", "muscle_cramps", "back_pain", "reduced_mobility", "tingling_numbness", "numbness", "pins_and_needles"],
    keySymptoms: ["back_pain", "reduced_mobility", "muscle_pain"],
    causes: [
      "Muscle or ligament strain from lifting heavy objects improperly",
      "Poor posture (slouching at desk, looking down at phone)",
      "Slipped disc (herniated disc) or sciatica",
      "Weak core muscles and sedentary lifestyle"
    ],
    homeCare: [
      "Apply a heating pad or hot water bottle to relax tense muscles.",
      "Apply pain-relieving gels containing diclofenac or methyl salicylate.",
      "Do NOT stay in bed for more than 1-2 days; light activity and gentle walking prevent stiffness.",
      "Sleep on a firm mattress."
    ],
    diet: [
      "Include calcium and Vitamin D rich foods for bone health.",
      "Ensure proper hydration."
    ],
    lifestyleTips: [
      "Learn to lift objects using your legs, not your back.",
      "Use an ergonomic chair with good lumbar support.",
      "Strengthen core muscles through exercise."
    ],
    warningSignsForDoctor: [
      "Back pain accompanied by loss of bowel or bladder control (Cauda Equina Syndrome - Emergency)",
      "Numbness, weakness, or sharp shooting pain radiating down one or both legs (Sciatica)",
      "Back pain with fever, unexplained weight loss, or pain that wakes you up at night"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Maintain correct posture.",
      "Exercise regularly to strengthen back and abdominal muscles."
    ],
    ageNotes: {
      child: "Uncommon. Check school bag weight; heavy bags can cause back pain in children.",
      adult: "Very common due to long office hours and lack of exercise.",
      elderly: "Could be a sign of osteoporosis (vertebral compression fracture) or spinal stenosis. Gentle care needed."
    },
    severity: "mild"
  },
  {
    id: "bone_fracture",
    name: "Bone Fracture",
    nameHi: "हड्डी टूटना (फ्रेक्चर)",
    category: "Musculoskeletal",
    description: "A medical condition where a bone is cracked or broken, usually following a fall, accident, or sports injury.",
    descriptionHi: "एक ऐसी स्थिति जिसमें हड्डी टूट जाती है या उसमें दरार आ जाती है, यह आमतौर पर गिरने, दुर्घटना या खेल की चोट के बाद होता है।",
    symptoms: ["weakness", "swelling", "bruising", "joint_pain", "joint_swelling", "bone_pain", "reduced_mobility"],
    keySymptoms: ["bone_pain", "swelling", "reduced_mobility", "bruising"],
    causes: [
      "High-impact trauma (falls, vehicular accidents)",
      "Sports injuries",
      "Osteoporosis (weak bones prone to breaking from minor falls)"
    ],
    homeCare: [
      "This requires orthopedic medical attention. Do not attempt to realign the bone.",
      "Immobilize the affected limb using a temporary splint (rolled newspaper, cardboard, or wooden board).",
      "Apply ice wrapped in a cloth to reduce swelling. Do not apply ice directly to skin.",
      "Elevate the injured limb if possible."
    ],
    diet: [
      "No food or drink if surgery might be required immediately.",
      "Post-fracture: Calcium, Vitamin D, Vitamin C, and protein-rich diet to support bone healing."
    ],
    lifestyleTips: [
      "Do not try to move or put weight on the injured limb.",
      "Seek medical help immediately."
    ],
    warningSignsForDoctor: [
      "Visible deformity in the limb or bone piercing through skin (Open/Compound Fracture - Emergency)",
      "Numbness, tingling, or skin turning blue or cold below the fracture site",
      "Severe, uncontrollable pain or massive swelling"
    ],
    urgency: "emergency",
    prevention: [
      "Ensure adequate calcium and Vitamin D intake for bone density.",
      "Use safety gear during sports/driving.",
      "Make home fall-proof for elderly."
    ],
    ageNotes: {
      child: "Greenstick fractures (incomplete bends) are common. Heal quickly but need proper plaster casting.",
      adult: "Often due to high-impact trauma; requires plaster or surgical fixation.",
      elderly: "Highly prone to hip, wrist, or spine fractures from simple falls due to osteoporosis. Very serious."
    },
    severity: "severe"
  },
  {
    id: "muscle_cramps",
    name: "Muscle Cramps",
    nameHi: "मांसपेशियों की ऐंठन (बायटें)",
    category: "Musculoskeletal",
    description: "Sudden, involuntary, and painful contractions of one or more muscles, commonly occurring in the calves, often due to dehydration or overuse.",
    descriptionHi: "एक या अधिक मांसपेशियों में अचानक, अनैच्छिक और दर्दनाक खिंचाव, जो अक्सर पानी की कमी या अधिक मेहनत से होता है।",
    symptoms: ["fatigue", "weakness", "muscle_pain", "muscle_cramps", "reduced_mobility"],
    keySymptoms: ["muscle_cramps", "muscle_pain"],
    causes: [
      "Dehydration and electrolyte loss (sodium, potassium, magnesium)",
      "Overuse of muscles or muscle fatigue during heavy exercise",
      "Poor blood circulation in limbs",
      "Side effect of certain medications"
    ],
    homeCare: [
      "Gently stretch and massage the cramped muscle.",
      "Apply heat to tense/tight muscles, or cold pack to sore muscles.",
      "Take a warm bath or shower to help soothe the muscle.",
      "Drink an electrolyte-rich solution or water."
    ],
    diet: [
      "Drink ORS or coconut water to replenish lost salts.",
      "Eat potassium-rich foods: bananas, melons, spinach.",
      "Stay hydrated (2.5-3 liters of water daily)."
    ],
    lifestyleTips: [
      "Stretch muscles before and after workouts.",
      "Avoid exercising in extreme heat.",
      "Wear supportive shoes."
    ],
    warningSignsForDoctor: [
      "Cramps are severe, frequent, and do not improve with stretching",
      "Cramps are accompanied by muscle swelling, redness, or skin changes",
      "Cramps occur with muscle weakness or spreading numbness"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Stay hydrated, especially during workouts.",
      "Do regular stretching exercises."
    ],
    ageNotes: {
      child: "Can happen after active play or due to growing pains. Hydrate well.",
      adult: "Common in athletes or those standing for long hours.",
      elderly: "Nocturnal leg cramps (cramps at night) are very common. Gentle stretching before bed helps."
    },
    severity: "mild"
  },
  {
    id: "gout",
    name: "Gout",
    nameHi: "गाउट (यूरिक एसिड बढ़ना)",
    category: "Musculoskeletal",
    description: "A painful form of inflammatory arthritis caused by the accumulation of uric acid crystals in joints, commonly affecting the big toe.",
    descriptionHi: "जोड़ों में यूरिक एसिड जमा होने से होने वाला एक दर्दनाक गठिया, जो आमतौर पर पैर के अंगूठे को प्रभावित करता है।",
    symptoms: ["fever", "mild_fever", "joint_pain", "joint_swelling", "joint_stiffness", "muscle_pain", "swollen_joints", "reduced_mobility"],
    keySymptoms: ["joint_pain", "swollen_joints", "joint_stiffness", "reduced_mobility"],
    causes: [
      "High levels of uric acid in the blood (hyperuricemia)",
      "Uric acid crystallizing in the joint space",
      "Diet high in purines (red meat, seafood, alcohol)",
      "Obesity and kidney dysfunction"
    ],
    homeCare: [
      "Rest and elevate the affected joint during an attack.",
      "Apply ice packs wrapped in a towel to the joint for 15-20 minutes to reduce inflammation.",
      "Drink plenty of water to help flush uric acid out of your system.",
      "Consult a doctor for anti-inflammatory medications (NSAIDs, colchicine)."
    ],
    diet: [
      "Drink 3-4 liters of water daily.",
      "Include low-fat dairy products, cherries, and vitamin C foods.",
      "Strictly avoid red meat, organ meats, shellfish, alcohol (especially beer), and foods containing high-fructose corn syrup."
    ],
    lifestyleTips: [
      "Avoid putting weight on the painful joint.",
      "Maintain a healthy weight, but avoid crash dieting (which can raise uric acid)."
    ],
    warningSignsForDoctor: [
      "High fever with chills and a hot, swollen joint (indicates joint infection)",
      "Unbearable pain not relieved by medication",
      "Frequent, recurring gout attacks"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Limit high-purine foods and alcohol.",
      "Stay hydrated.",
      "Take prescribed uric acid-lowering drugs (allopurinol, febuxostat) daily if advised."
    ],
    ageNotes: {
      child: "Extremely rare; suggests a genetic metabolic disorder.",
      adult: "Most common in middle-aged men and post-menopausal women.",
      elderly: "Often associated with kidney issues and diuretic medications (water pills). Needs careful monitoring."
    },
    severity: "moderate"
  },

  // =========================================================================
  // 10. MENTAL HEALTH (4 Conditions)
  // =========================================================================
  {
    id: "anxiety_disorder",
    name: "Anxiety Disorder",
    nameHi: "चिंता विकार (एंग्जायटी)",
    category: "Mental Health",
    description: "A mental health condition characterized by excessive, persistent worry, fear, and nervousness that interferes with daily activities.",
    descriptionHi: "एक मानसिक स्वास्थ्य स्थिति जिसमें अत्यधिक, लगातार चिंता, डर और घबराहट होती है जो दैनिक गतिविधियों को प्रभावित करती है।",
    symptoms: ["fatigue", "weakness", "headache", "dizziness", "lightheadedness", "chest_pain", "chest_tightness", "shortness_of_breath", "rapid_breathing", "palpitations", "abdominal_pain", "stomach_cramps", "nausea", "anxiety", "restlessness", "irritability", "mood_swings", "sleep_difficulty", "panic_attacks", "racing_thoughts", "excessive_sweating", "dry_mouth"],
    keySymptoms: ["anxiety", "restlessness", "palpitations", "panic_attacks", "racing_thoughts"],
    causes: [
      "Brain chemistry imbalances",
      "Environmental stress, trauma, or life changes",
      "Genetic predisposition",
      "Secondary to medical conditions (e.g., hyperthyroidism)"
    ],
    homeCare: [
      "Practice deep breathing exercises (e.g., 4-7-8 breathing) or Pranayama (Anulom Vilom).",
      "Use grounding techniques: Focus on 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, and 1 you can taste.",
      "Engage in regular physical activity.",
      "If you need someone to talk to, contact the free national helpline: iCall 9152987821 or Kiran helpline 1800-599-0019."
    ],
    diet: [
      "Limit caffeine, energy drinks, and tea (stimulants that mimic anxiety).",
      "Eat complex carbohydrates (oats, whole grains) which boost serotonin.",
      "Stay hydrated."
    ],
    lifestyleTips: [
      "Maintain a regular sleep schedule.",
      "Write down your worries in a journal to clear your mind.",
      "Limit screen time and news consumption."
    ],
    warningSignsForDoctor: [
      "Panic attacks causing chest pain and breathlessness (rule out heart issues)",
      "Anxiety leading to thoughts of self-harm or suicide",
      "Inability to leave the house or perform basic daily tasks"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Manage stress.",
      "Build a strong support system.",
      "Seek early counseling/therapy."
    ],
    ageNotes: {
      child: "Can present as school refusal, stomach aches, clinginess, or temper tantrums.",
      adult: "Very common due to work-life stress. Counseling (CBT) is highly effective.",
      elderly: "Often manifests as physical symptoms (chest tightness, dizziness) or worry about health/losses."
    },
    severity: "moderate"
  },
  {
    id: "depression",
    name: "Depression (Clinical Depression)",
    nameHi: "अवसाद (डिप्रेशन)",
    category: "Mental Health",
    description: "A mood disorder causing persistent feelings of sadness, loss of interest in activities, fatigue, and feelings of hopelessness.",
    descriptionHi: "एक मनोदशा विकार जिसके कारण लगातार उदासी, गतिविधियों में रुचि की कमी, अत्यधिक थकान और निराशा की भावना रहती है।",
    symptoms: ["fatigue", "weakness", "weight_loss", "weight_gain", "loss_of_appetite", "headache", "dizziness", "constipation", "anxiety", "restlessness", "irritability", "mood_swings", "sadness", "hopelessness", "loss_of_interest", "sleep_difficulty", "excessive_sleep", "racing_thoughts", "hair_loss"],
    keySymptoms: ["sadness", "hopelessness", "loss_of_interest", "fatigue"],
    causes: [
      "Complex interaction of social, psychological, and biological factors",
      "Brain neurotransmitter imbalances (serotonin, dopamine)",
      "Traumatic life events, loss, chronic illness, or financial stress",
      "Family history"
    ],
    homeCare: [
      "Reach out to close friends or family members; do not isolate yourself.",
      "Establish small, manageable daily goals (e.g., taking a 10-minute walk).",
      "Consult a psychiatrist or clinical psychologist for therapy (CBT) or medication.",
      "For immediate, free counseling, call the national mental health helpline: iCall 9152987821 or Kiran 1800-599-0019."
    ],
    diet: [
      "Eat foods rich in folate and B-vitamins.",
      "Include healthy omega-3 fats.",
      "Avoid alcohol, which is a depressant and worsens mood."
    ],
    lifestyleTips: [
      "Expose yourself to natural sunlight in the morning.",
      "Try to keep a consistent routine.",
      "Engage in hobbies or creative outlets."
    ],
    warningSignsForDoctor: [
      "Thoughts of suicide, self-harm, or feeling that life is not worth living (Emergency)",
      "Inability to eat, sleep, or care for personal hygiene",
      "Hearing voices or seeing things that aren't there"
    ],
    urgency: "within_24hrs",
    prevention: [
      "Early stress management.",
      "Regular exercise.",
      "Open conversations about mental health."
    ],
    ageNotes: {
      child: "May show irritability, poor school grades, withdrawal, or behavioral changes.",
      adult: "Requires professional therapy and/or medication. Very common.",
      elderly: "Often associated with physical illness and isolation. Do not dismiss it as normal aging."
    },
    severity: "severe"
  },
  {
    id: "insomnia",
    name: "Insomnia",
    nameHi: "अनिद्रा (नींद न आना)",
    category: "Mental Health",
    description: "A common sleep disorder characterized by persistent difficulty falling asleep, staying asleep, or getting quality sleep.",
    descriptionHi: "एक आम नींद का विकार जिसमें सोने में कठिनाई होती है, रात में बार-बार नींद खुलती है या गुणवत्तापूर्ण नींद नहीं मिल पाती।",
    symptoms: ["fatigue", "weakness", "headache", "dizziness", "difficulty_concentrating", "anxiety", "irritability", "mood_swings", "sleep_difficulty"],
    keySymptoms: ["sleep_difficulty", "fatigue", "irritability", "difficulty_concentrating"],
    causes: [
      "High stress, anxiety, or depression",
      "Poor sleep hygiene (using screens/phones in bed, irregular sleep times)",
      "Excessive consumption of caffeine, nicotine, or alcohol",
      "Physical pain, thyroid disorders, or medication side effects"
    ],
    homeCare: [
      "Go to bed and wake up at the exact same time every day, including weekends.",
      "Keep the bedroom dark, quiet, and cool.",
      "Avoid using mobile phones, tablets, or watching TV in bed for at least 1 hour before sleeping.",
      "Practice muscle relaxation or listen to soothing music before bed."
    ],
    diet: [
      "Drink warm milk (contains tryptophan which aids sleep) or chamomile tea before bed.",
      "Avoid heavy, spicy, or fatty meals within 3 hours of bedtime.",
      "Strictly avoid caffeine (tea, coffee, cola) after 4 PM."
    ],
    lifestyleTips: [
      "Use your bed only for sleep; do not work or study on bed.",
      "Exercise daily, but avoid intense workouts within 4 hours of bedtime.",
      "Avoid daytime naps longer than 20-30 minutes."
    ],
    warningSignsForDoctor: [
      "Severe sleep lack leading to daytime sleepiness that causes driving/work hazards",
      "Insomnia accompanied by gasping for air, loud snoring, or choking sounds during night (Sleep Apnea)",
      "Insomnia lasting more than 4 weeks and interfering with mental health"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Maintain a good sleep hygiene routine.",
      "Manage daytime stress."
    ],
    ageNotes: {
      child: "Check for screen time, caffeine, or school stress. Ensure a consistent bedtime routine.",
      adult: "Very common. Cognitive Behavioral Therapy for Insomnia (CBT-I) is the first-line treatment.",
      elderly: "Sleep patterns change naturally with age, but persistent insomnia needs evaluation to avoid fall risks."
    },
    severity: "mild"
  },
  {
    id: "stress_related",
    name: "Stress-Related Symptoms",
    nameHi: "तनाव से संबंधित लक्षण",
    category: "Mental Health",
    description: "Physical and emotional symptoms caused by acute or chronic stress, presenting as headache, fatigue, body ache, and irritability.",
    descriptionHi: "तीव्र या पुराने मानसिक तनाव के कारण होने वाले शारीरिक और भावनात्मक लक्षण, जैसे सिरदर्द, थकान, बदन दर्द और चिड़चिड़ापन।",
    symptoms: ["fatigue", "weakness", "headache", "dizziness", "body_ache", "chest_tightness", "palpitations", "stomach_cramps", "acidity", "heartburn", "constipation", "diarrhoea", "muscle_pain", "muscle_cramps", "difficulty_concentrating", "anxiety", "restlessness", "irritability", "mood_swings", "sleep_difficulty", "racing_thoughts", "excessive_sweating", "dry_mouth"],
    keySymptoms: ["fatigue", "headache", "racing_thoughts", "sleep_difficulty"],
    causes: [
      "High workload, financial difficulties, or relationship problems",
      "Major life changes or traumatic events",
      "Lack of coping mechanisms or support systems"
    ],
    homeCare: [
      "Engage in daily relaxation: meditation, yoga, or deep breathing for 10-15 minutes.",
      "Take small breaks during work to stretch or walk.",
      "Talk to a trusted friend or family member about your feelings.",
      "For professional support, contact mental health helpline iCall: 9152987821."
    ],
    diet: [
      "Balanced diet with fresh fruits, vegetables, and nuts.",
      "Avoid relying on sugary comfort foods or alcohol to cope with stress.",
      "Stay hydrated."
    ],
    lifestyleTips: [
      "Set healthy boundaries at work and in relationships.",
      "Incorporate a hobby into your weekly routine.",
      "Spend time in nature."
    ],
    warningSignsForDoctor: [
      "Stress leads to chest pain, high blood pressure, or panic attacks",
      "Inability to cope, leading to depression or thoughts of self-harm",
      "Physical symptoms like chronic stomach pain, vomiting, or severe sleep loss"
    ],
    urgency: "within_2_3_days",
    prevention: [
      "Learn and practice stress management techniques.",
      "Maintain a healthy work-life balance."
    ],
    ageNotes: {
      child: "Can show as stomach ache, nail-biting, bedwetting, or regression in behavior.",
      adult: "Work stress and financial burden are major causes. Therapy helps build coping skills.",
      elderly: "Stress from health issues or loss of peers can trigger anxiety. Supportive listening is key."
    },
    severity: "mild"
  }
];
