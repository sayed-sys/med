// Symptom Registry — AI Medical Symptom Checker
// 100+ symptoms with aliases, icons, body systems, and follow-up questions

window.SYMPTOMS = {
  // ===== GENERAL =====
  fever: { name: "Fever", nameHi: "बुखार", aliases: ["temperature", "pyrexia", "hot", "burning up", "feverish"], bodySystem: "general", icon: "🌡️", followUp: ["How high is the fever?", "Is it constant or comes and goes?"] },
  high_fever: { name: "High Fever (>103°F)", nameHi: "तेज़ बुखार", aliases: ["very high temperature", "burning fever", "104 fever", "extreme fever"], bodySystem: "general", icon: "🔥", followUp: ["Have you measured the exact temperature?", "How long has it been this high?"] },
  mild_fever: { name: "Mild Fever", nameHi: "हल्का बुखार", aliases: ["low grade fever", "slight temperature", "low fever", "warm"], bodySystem: "general", icon: "🌡️", followUp: ["Is it below 100°F?"] },
  chills: { name: "Chills", nameHi: "कंपकंपी", aliases: ["shivering", "rigors", "cold chills", "shaking"], bodySystem: "general", icon: "🥶", followUp: ["Do chills come with fever?"] },
  fatigue: { name: "Fatigue", nameHi: "थकान", aliases: ["tiredness", "exhaustion", "low energy", "tired", "lethargic", "lethargy"], bodySystem: "general", icon: "😴", followUp: ["Is it constant or after activity?", "How long have you felt this way?"] },
  weakness: { name: "Weakness", nameHi: "कमज़ोरी", aliases: ["feeling weak", "no strength", "feeble", "frail"], bodySystem: "general", icon: "💤", followUp: ["Is weakness in a specific area or all over?"] },
  weight_loss: { name: "Weight Loss", nameHi: "वज़न कम होना", aliases: ["losing weight", "unintentional weight loss", "getting thin"], bodySystem: "general", icon: "⚖️", followUp: ["How much weight have you lost?", "Over what period?"] },
  weight_gain: { name: "Weight Gain", nameHi: "वज़न बढ़ना", aliases: ["gaining weight", "getting heavy", "putting on weight"], bodySystem: "general", icon: "⚖️", followUp: ["How much weight have you gained?"] },
  night_sweats: { name: "Night Sweats", nameHi: "रात को पसीना", aliases: ["sweating at night", "drenching sweats", "waking up sweaty"], bodySystem: "general", icon: "🌙", followUp: ["Do you need to change clothes/sheets?"] },
  loss_of_appetite: { name: "Loss of Appetite", nameHi: "भूख न लगना", aliases: ["no appetite", "not hungry", "dont feel like eating", "anorexia"], bodySystem: "general", icon: "🍽️", followUp: ["How long has this been going on?"] },
  dehydration: { name: "Dehydration", nameHi: "पानी की कमी", aliases: ["dry mouth", "thirsty", "not enough water", "dehydrated"], bodySystem: "general", icon: "💧", followUp: ["Are you urinating less than usual?"] },
  swollen_lymph_nodes: { name: "Swollen Lymph Nodes", nameHi: "गांठें सूजना", aliases: ["swollen glands", "lumps in neck", "swollen nodes", "lymph node"], bodySystem: "general", icon: "🔴", followUp: ["Where are the swollen nodes? Neck, armpit, or groin?"] },
  body_ache: { name: "Body Ache", nameHi: "बदन दर्द", aliases: ["body pain", "aching all over", "general pain", "full body pain"], bodySystem: "general", icon: "🤕", followUp: ["Is it all over or specific areas?"] },
  malaise: { name: "Malaise", nameHi: "अस्वस्थता", aliases: ["feeling unwell", "not feeling right", "general discomfort", "sick feeling"], bodySystem: "general", icon: "😷", followUp: ["Can you describe the feeling more?"] },

  // ===== HEAD =====
  headache: { name: "Headache", nameHi: "सिरदर्द", aliases: ["head pain", "head hurts", "cephalalgia", "head ache"], bodySystem: "head", icon: "🤕", followUp: ["Where exactly does it hurt?", "Is it throbbing or constant?"] },
  severe_headache: { name: "Severe Headache", nameHi: "तेज़ सिरदर्द", aliases: ["intense headache", "worst headache", "splitting headache", "terrible head pain"], bodySystem: "head", icon: "💥", followUp: ["Is this the worst headache of your life?", "Did it come on suddenly?"] },
  dizziness: { name: "Dizziness", nameHi: "चक्कर आना", aliases: ["dizzy", "giddy", "woozy", "unsteady", "lightheaded"], bodySystem: "head", icon: "💫", followUp: ["Does the room seem to spin?"] },
  lightheadedness: { name: "Lightheadedness", nameHi: "सिर हल्का लगना", aliases: ["feeling faint", "about to faint", "head feels light"], bodySystem: "head", icon: "💫", followUp: ["Does it happen when you stand up?"] },
  confusion: { name: "Confusion", nameHi: "भ्रम", aliases: ["confused", "disoriented", "foggy thinking", "mental confusion"], bodySystem: "head", icon: "😵", followUp: ["Is the person aware of their surroundings?"] },
  fainting: { name: "Fainting", nameHi: "बेहोशी", aliases: ["loss of consciousness", "passed out", "blacked out", "syncope", "fainted"], bodySystem: "head", icon: "😵‍💫", followUp: ["How long were you unconscious?", "Did you injure yourself?"] },

  // ===== EYES =====
  red_eyes: { name: "Red Eyes", nameHi: "आँखें लाल होना", aliases: ["bloodshot eyes", "eye redness", "pink eye", "conjunctivitis"], bodySystem: "eyes", icon: "👁️", followUp: ["Is there discharge from the eyes?"] },
  watery_eyes: { name: "Watery Eyes", nameHi: "आँखों से पानी आना", aliases: ["tearing", "eyes watering", "excess tears", "lacrimation"], bodySystem: "eyes", icon: "😢", followUp: ["Is it in one eye or both?"] },
  blurred_vision: { name: "Blurred Vision", nameHi: "धुंधला दिखना", aliases: ["blurry vision", "cant see clearly", "fuzzy vision", "vision problems"], bodySystem: "eyes", icon: "👓", followUp: ["Is it constant or intermittent?", "One eye or both?"] },
  eye_pain: { name: "Eye Pain", nameHi: "आँख में दर्द", aliases: ["pain in eye", "eye hurts", "sore eyes", "ocular pain"], bodySystem: "eyes", icon: "👁️", followUp: ["Is there sensitivity to light?"] },
  light_sensitivity: { name: "Light Sensitivity", nameHi: "रोशनी से तकलीफ़", aliases: ["photophobia", "sensitive to light", "cant bear light", "light hurts eyes"], bodySystem: "eyes", icon: "☀️", followUp: ["Does it come with headache?"] },

  // ===== EAR/NOSE/THROAT =====
  runny_nose: { name: "Runny Nose", nameHi: "नाक बहना", aliases: ["running nose", "nasal discharge", "nose dripping", "rhinorrhea"], bodySystem: "ent", icon: "🤧", followUp: ["What color is the discharge?"] },
  blocked_nose: { name: "Blocked Nose", nameHi: "नाक बंद होना", aliases: ["stuffy nose", "nasal congestion", "cant breathe through nose", "congested"], bodySystem: "ent", icon: "👃", followUp: ["Is it one side or both?"] },
  sneezing: { name: "Sneezing", nameHi: "छींकें आना", aliases: ["frequent sneezing", "sneeze", "sneezy", "achoo"], bodySystem: "ent", icon: "🤧", followUp: ["Is it triggered by dust or pollen?"] },
  sore_throat: { name: "Sore Throat", nameHi: "गले में दर्द", aliases: ["throat pain", "painful throat", "scratchy throat", "pharyngitis", "throat hurts"], bodySystem: "ent", icon: "🗣️", followUp: ["Is it painful to swallow?"] },
  dry_cough: { name: "Dry Cough", nameHi: "सूखी खांसी", aliases: ["non-productive cough", "tickly cough", "hacking cough", "cough without phlegm"], bodySystem: "ent", icon: "😤", followUp: ["How long have you had it?", "Is it worse at night?"] },
  wet_cough: { name: "Wet Cough (with phlegm)", nameHi: "बलगम वाली खांसी", aliases: ["productive cough", "cough with mucus", "phlegmy cough", "chest cough"], bodySystem: "ent", icon: "🤮", followUp: ["What color is the phlegm?"] },
  cough_with_blood: { name: "Coughing Blood", nameHi: "खांसी में खून", aliases: ["blood in cough", "hemoptysis", "bloody sputum", "spitting blood"], bodySystem: "ent", icon: "🩸", followUp: ["How much blood?", "Is it mixed with phlegm?"] },
  post_nasal_drip: { name: "Post Nasal Drip", nameHi: "नाक से गले में बहना", aliases: ["mucus dripping down throat", "dripping in throat", "throat mucus"], bodySystem: "ent", icon: "💧", followUp: ["Does it cause cough at night?"] },
  ear_pain: { name: "Ear Pain", nameHi: "कान में दर्द", aliases: ["earache", "pain in ear", "ear hurts", "otalgia"], bodySystem: "ent", icon: "👂", followUp: ["Is there any discharge?", "Is hearing affected?"] },
  loss_of_smell: { name: "Loss of Smell", nameHi: "सूंघने की शक्ति कम होना", aliases: ["cant smell", "anosmia", "no sense of smell", "lost smell"], bodySystem: "ent", icon: "👃", followUp: ["Did it come on suddenly?"] },
  loss_of_taste: { name: "Loss of Taste", nameHi: "स्वाद न आना", aliases: ["cant taste", "ageusia", "no taste", "lost taste", "food tasteless"], bodySystem: "ent", icon: "👅", followUp: ["Can you taste anything at all?"] },
  hoarse_voice: { name: "Hoarse Voice", nameHi: "आवाज़ बैठना", aliases: ["voice change", "raspy voice", "lost voice", "laryngitis", "croaky"], bodySystem: "ent", icon: "🗣️", followUp: ["How long has your voice been hoarse?"] },
  swollen_face: { name: "Swollen Face", nameHi: "चेहरा सूजना", aliases: ["face swelling", "puffy face", "facial edema", "face puffiness"], bodySystem: "ent", icon: "😮", followUp: ["Is it around the eyes or entire face?"] },

  // ===== CHEST =====
  chest_pain: { name: "Chest Pain", nameHi: "सीने में दर्द", aliases: ["pain in chest", "chest hurts", "chest tightness pain", "heart pain"], bodySystem: "chest", icon: "💔", followUp: ["Is it sharp or dull?", "Does it spread to arm or jaw?"] },
  chest_tightness: { name: "Chest Tightness", nameHi: "सीने में जकड़न", aliases: ["tight chest", "pressure in chest", "chest pressure", "heavy chest"], bodySystem: "chest", icon: "😤", followUp: ["Does it worsen with activity?"] },
  shortness_of_breath: { name: "Shortness of Breath", nameHi: "सांस फूलना", aliases: ["breathlessness", "difficulty breathing", "cant breathe", "dyspnea", "breathing difficulty", "hard to breathe"], bodySystem: "chest", icon: "🫁", followUp: ["At rest or during activity?", "Can you complete a sentence?"] },
  rapid_breathing: { name: "Rapid Breathing", nameHi: "तेज़ सांस चलना", aliases: ["fast breathing", "hyperventilation", "breathing fast", "tachypnea"], bodySystem: "chest", icon: "💨", followUp: ["Are you feeling anxious?"] },
  wheezing: { name: "Wheezing", nameHi: "सांस में सीटी", aliases: ["whistling breath", "noisy breathing", "wheeze", "chest whistle"], bodySystem: "chest", icon: "🌬️", followUp: ["Is it worse at night or morning?"] },
  palpitations: { name: "Palpitations", nameHi: "दिल की धड़कन तेज़", aliases: ["heart racing", "rapid heartbeat", "heart pounding", "heart flutter", "tachycardia"], bodySystem: "chest", icon: "💓", followUp: ["How long do episodes last?"] },
  irregular_heartbeat: { name: "Irregular Heartbeat", nameHi: "अनियमित धड़कन", aliases: ["skipped beats", "arrhythmia", "heart skipping", "uneven heartbeat"], bodySystem: "chest", icon: "💗", followUp: ["Do you feel dizzy with it?"] },

  // ===== ABDOMEN =====
  abdominal_pain: { name: "Abdominal Pain", nameHi: "पेट दर्द", aliases: ["stomach pain", "belly pain", "tummy ache", "gut pain", "stomach ache"], bodySystem: "abdomen", icon: "🤢", followUp: ["Where exactly does it hurt?", "Is it crampy or constant?"] },
  stomach_cramps: { name: "Stomach Cramps", nameHi: "पेट में ऐंठन", aliases: ["cramping", "abdominal cramps", "belly cramps", "spasms"], bodySystem: "abdomen", icon: "😣", followUp: ["Do cramps come and go?"] },
  nausea: { name: "Nausea", nameHi: "मतली", aliases: ["feeling sick", "queasy", "want to vomit", "nauseous", "sick to stomach"], bodySystem: "abdomen", icon: "🤢", followUp: ["Does anything make it better or worse?"] },
  vomiting: { name: "Vomiting", nameHi: "उल्टी", aliases: ["throwing up", "puking", "emesis", "being sick", "vomit"], bodySystem: "abdomen", icon: "🤮", followUp: ["How many times?", "What color is the vomit?"] },
  bloating: { name: "Bloating", nameHi: "पेट फूलना", aliases: ["feeling bloated", "gas", "distended stomach", "puffy belly", "gassy"], bodySystem: "abdomen", icon: "🎈", followUp: ["Does it worsen after eating?"] },
  acidity: { name: "Acidity", nameHi: "एसिडिटी", aliases: ["acid", "sour stomach", "acid stomach", "hyperacidity"], bodySystem: "abdomen", icon: "🔥", followUp: ["Is it worse after spicy food?"] },
  heartburn: { name: "Heartburn", nameHi: "सीने में जलन", aliases: ["acid reflux", "burning in chest", "reflux", "burning sensation"], bodySystem: "abdomen", icon: "🔥", followUp: ["Does it worsen when lying down?"] },
  blood_in_vomit: { name: "Blood in Vomit", nameHi: "उल्टी में खून", aliases: ["vomiting blood", "hematemesis", "bloody vomit"], bodySystem: "abdomen", icon: "🩸", followUp: ["How much blood?", "What color — red or dark?"] },
  upper_abdominal_pain: { name: "Upper Abdominal Pain", nameHi: "ऊपरी पेट दर्द", aliases: ["pain in upper stomach", "epigastric pain", "upper belly pain"], bodySystem: "abdomen", icon: "⬆️", followUp: ["Is it related to meals?"] },
  lower_right_abdominal_pain: { name: "Lower Right Abdominal Pain", nameHi: "दाएं निचले पेट में दर्द", aliases: ["right side pain", "appendix pain", "right lower belly"], bodySystem: "abdomen", icon: "➡️", followUp: ["Does it hurt more when you press and release?"] },

  // ===== BOWEL =====
  diarrhoea: { name: "Diarrhoea", nameHi: "दस्त", aliases: ["loose motions", "watery stool", "loose stool", "runny stomach", "diarrhea"], bodySystem: "bowel", icon: "🚽", followUp: ["How many times a day?", "Is there blood or mucus?"] },
  constipation: { name: "Constipation", nameHi: "कब्ज़", aliases: ["hard stool", "cant pass stool", "difficulty passing stool", "no bowel movement"], bodySystem: "bowel", icon: "😣", followUp: ["How many days since last bowel movement?"] },
  blood_in_stool: { name: "Blood in Stool", nameHi: "मल में खून", aliases: ["bloody stool", "rectal bleeding", "blood when passing stool", "red stool"], bodySystem: "bowel", icon: "🩸", followUp: ["Is the blood red or dark/black?"] },
  mucus_in_stool: { name: "Mucus in Stool", nameHi: "मल में बलगम", aliases: ["slimy stool", "mucousy stool", "jelly in stool"], bodySystem: "bowel", icon: "💧", followUp: ["Is there also blood?"] },
  dark_stool: { name: "Dark/Black Stool", nameHi: "काला मल", aliases: ["black stool", "tarry stool", "melena", "dark poop"], bodySystem: "bowel", icon: "⚫", followUp: ["Are you taking iron supplements?"] },
  frequent_bowel_movements: { name: "Frequent Bowel Movements", nameHi: "बार-बार शौच जाना", aliases: ["going to toilet often", "frequent toilet", "many times stool"], bodySystem: "bowel", icon: "🔄", followUp: ["How many times per day?"] },

  // ===== URINARY =====
  painful_urination: { name: "Painful Urination", nameHi: "पेशाब में जलन", aliases: ["burning urine", "dysuria", "pain when peeing", "stinging urine", "burning while urinating"], bodySystem: "urinary", icon: "🔥", followUp: ["Is there blood in urine?"] },
  frequent_urination: { name: "Frequent Urination", nameHi: "बार-बार पेशाब आना", aliases: ["peeing often", "urinary frequency", "going to bathroom a lot", "frequent peeing"], bodySystem: "urinary", icon: "🚻", followUp: ["Also at night?", "How many times per day?"] },
  blood_in_urine: { name: "Blood in Urine", nameHi: "पेशाब में खून", aliases: ["bloody urine", "hematuria", "red urine", "pink urine"], bodySystem: "urinary", icon: "🩸", followUp: ["Is it painful?"] },
  cloudy_urine: { name: "Cloudy Urine", nameHi: "धुंधला पेशाब", aliases: ["murky urine", "urine not clear", "turbid urine"], bodySystem: "urinary", icon: "☁️", followUp: ["Does it have a strong smell?"] },
  strong_urine_odor: { name: "Strong Urine Odor", nameHi: "पेशाब में तेज़ गंध", aliases: ["smelly urine", "foul smelling urine", "bad urine smell"], bodySystem: "urinary", icon: "👃", followUp: ["Are you drinking enough water?"] },
  lower_back_pain_urinary: { name: "Lower Back Pain (Kidney area)", nameHi: "कमर दर्द (किडनी क्षेत्र)", aliases: ["kidney pain", "flank pain", "side pain near kidney", "loin pain"], bodySystem: "urinary", icon: "🔙", followUp: ["Is it one side or both?", "Does it radiate to groin?"] },
  excessive_thirst: { name: "Excessive Thirst", nameHi: "बहुत ज़्यादा प्यास", aliases: ["always thirsty", "polydipsia", "extreme thirst", "drinking lots of water"], bodySystem: "urinary", icon: "🥤", followUp: ["Are you also urinating more?"] },
  excessive_urination: { name: "Excessive Urination", nameHi: "ज़्यादा पेशाब आना", aliases: ["polyuria", "too much urine", "large amounts of urine"], bodySystem: "urinary", icon: "💧", followUp: ["Is it also at night?"] },

  // ===== SKIN =====
  skin_rash: { name: "Skin Rash", nameHi: "त्वचा पर दाने", aliases: ["rash", "skin eruption", "rashes", "breakout", "skin spots"], bodySystem: "skin", icon: "🩹", followUp: ["Where on the body?", "Is it itchy?"] },
  itching: { name: "Itching", nameHi: "खुजली", aliases: ["pruritus", "itchy skin", "scratching", "itch"], bodySystem: "skin", icon: "🤏", followUp: ["Is it all over or in specific areas?"] },
  dry_skin: { name: "Dry Skin", nameHi: "रूखी त्वचा", aliases: ["flaky skin", "skin dryness", "cracked skin", "rough skin"], bodySystem: "skin", icon: "🏜️", followUp: ["Does it crack or bleed?"] },
  skin_patches: { name: "Skin Patches", nameHi: "त्वचा पर धब्बे", aliases: ["discolored patches", "white patches", "patches on skin"], bodySystem: "skin", icon: "🔲", followUp: ["What color are the patches?"] },
  red_patches: { name: "Red Patches", nameHi: "लाल चकत्ते", aliases: ["red spots", "red marks", "erythema", "red skin areas"], bodySystem: "skin", icon: "🔴", followUp: ["Are they raised or flat?"] },
  scaly_skin: { name: "Scaly Skin", nameHi: "पपड़ीदार त्वचा", aliases: ["flaking skin", "peeling skin", "scales on skin", "skin peeling"], bodySystem: "skin", icon: "🐍", followUp: ["Is it on joints like elbows/knees?"] },
  blisters: { name: "Blisters", nameHi: "फफोले", aliases: ["fluid filled bumps", "vesicles", "water blisters", "skin bubbles"], bodySystem: "skin", icon: "💧", followUp: ["Are they painful or itchy?"] },
  hives: { name: "Hives", nameHi: "पित्ती", aliases: ["urticaria", "welts", "wheals", "allergic bumps"], bodySystem: "skin", icon: "🔴", followUp: ["Did you eat anything new?", "Any new medication?"] },
  swelling: { name: "Swelling", nameHi: "सूजन", aliases: ["edema", "puffiness", "swollen", "inflammation"], bodySystem: "skin", icon: "🫧", followUp: ["Where is the swelling?"] },
  bruising: { name: "Bruising", nameHi: "नील पड़ना", aliases: ["bruises", "black and blue", "contusion", "easy bruising"], bodySystem: "skin", icon: "🟣", followUp: ["Do you bruise easily without injury?"] },
  pale_skin: { name: "Pale Skin", nameHi: "पीली/फीकी त्वचा", aliases: ["pallor", "looking pale", "white skin", "colorless skin"], bodySystem: "skin", icon: "😶", followUp: ["Do your nails and inner eyelids also look pale?"] },
  yellowish_skin: { name: "Yellowish Skin", nameHi: "त्वचा पीली पड़ना", aliases: ["jaundice", "yellow skin", "yellowing", "icteric"], bodySystem: "skin", icon: "🟡", followUp: ["Are your eyes also yellow?"] },
  yellowish_eyes: { name: "Yellowish Eyes", nameHi: "आँखें पीली होना", aliases: ["yellow eyes", "jaundice eyes", "scleral icterus"], bodySystem: "skin", icon: "🟡", followUp: ["Is your urine also dark?"] },
  acne_pimples: { name: "Acne/Pimples", nameHi: "मुँहासे", aliases: ["pimples", "zits", "acne", "breakouts", "spots on face"], bodySystem: "skin", icon: "😤", followUp: ["Where are they mostly?", "Are they painful or just bumps?"] },
  ring_shaped_rash: { name: "Ring-Shaped Rash", nameHi: "गोलाकार दाने", aliases: ["circular rash", "ring rash", "annular rash", "ringworm rash"], bodySystem: "skin", icon: "⭕", followUp: ["Is it itchy?", "Is the center clear?"] },
  burrow_marks: { name: "Burrow Marks", nameHi: "खुदाई के निशान", aliases: ["tiny lines on skin", "track marks", "scabies lines", "thin lines"], bodySystem: "skin", icon: "〰️", followUp: ["Is itching worse at night?"] },
  dark_spots: { name: "Dark Spots", nameHi: "काले धब्बे", aliases: ["hyperpigmentation", "dark marks", "brown spots", "dark patches"], bodySystem: "skin", icon: "⚫", followUp: ["Are they getting bigger?"] },

  // ===== MUSCULOSKELETAL =====
  joint_pain: { name: "Joint Pain", nameHi: "जोड़ों में दर्द", aliases: ["arthralgia", "pain in joints", "achy joints", "joint ache"], bodySystem: "musculoskeletal", icon: "🦴", followUp: ["Which joints?", "Is there swelling too?"] },
  joint_swelling: { name: "Joint Swelling", nameHi: "जोड़ों में सूजन", aliases: ["swollen joints", "puffy joints", "joints puffed up"], bodySystem: "musculoskeletal", icon: "🫧", followUp: ["Is it warm to touch?"] },
  joint_stiffness: { name: "Joint Stiffness", nameHi: "जोड़ों में अकड़न", aliases: ["stiff joints", "cant bend joints", "morning stiffness", "rigid joints"], bodySystem: "musculoskeletal", icon: "🔒", followUp: ["Is it worse in the morning?"] },
  muscle_pain: { name: "Muscle Pain", nameHi: "मांसपेशियों में दर्द", aliases: ["myalgia", "sore muscles", "muscle ache", "muscle soreness"], bodySystem: "musculoskeletal", icon: "💪", followUp: ["Did you exercise recently?"] },
  muscle_cramps: { name: "Muscle Cramps", nameHi: "मांसपेशियों में ऐंठन", aliases: ["charley horse", "muscle spasm", "leg cramps", "cramp"], bodySystem: "musculoskeletal", icon: "⚡", followUp: ["Which muscles?", "Do they happen at night?"] },
  back_pain: { name: "Back Pain", nameHi: "कमर दर्द", aliases: ["backache", "lower back pain", "upper back pain", "spine pain"], bodySystem: "musculoskeletal", icon: "🔙", followUp: ["Upper or lower back?", "Does it radiate to legs?"] },
  neck_stiffness: { name: "Neck Stiffness", nameHi: "गर्दन में अकड़न", aliases: ["stiff neck", "cant move neck", "neck pain", "rigid neck"], bodySystem: "musculoskeletal", icon: "🦒", followUp: ["Can you touch your chin to your chest?", "Do you have fever too?"] },
  bone_pain: { name: "Bone Pain", nameHi: "हड्डी में दर्द", aliases: ["deep bone ache", "pain in bone", "osseous pain"], bodySystem: "musculoskeletal", icon: "🦴", followUp: ["Is it in one spot or multiple?"] },
  swollen_joints: { name: "Swollen Joints", nameHi: "सूजे हुए जोड़", aliases: ["joint inflammation", "inflamed joints", "big joints"], bodySystem: "musculoskeletal", icon: "🔴", followUp: ["Is the joint red and warm?"] },
  reduced_mobility: { name: "Reduced Mobility", nameHi: "हिलने-डुलने में कठिनाई", aliases: ["cant move well", "limited movement", "stiffness", "difficulty walking"], bodySystem: "musculoskeletal", icon: "🚶", followUp: ["Which part is affected?"] },
  tingling_numbness: { name: "Tingling/Numbness", nameHi: "झनझनाहट/सुन्नपन", aliases: ["pins and needles", "numbness", "tingling sensation", "prickling"], bodySystem: "musculoskeletal", icon: "⚡", followUp: ["Where do you feel it?", "Is it in hands or feet?"] },

  // ===== NEUROLOGICAL =====
  seizures: { name: "Seizures", nameHi: "दौरे/मिर्गी", aliases: ["fits", "convulsions", "epileptic fit", "seizure", "fitting"], bodySystem: "neurological", icon: "⚡", followUp: ["How long did it last?", "Was consciousness lost?"] },
  tremors: { name: "Tremors", nameHi: "कंपन", aliases: ["shaking hands", "trembling", "shaky", "involuntary shaking"], bodySystem: "neurological", icon: "🫨", followUp: ["Is it at rest or during movement?"] },
  memory_problems: { name: "Memory Problems", nameHi: "याददाश्त कमज़ोर होना", aliases: ["forgetfulness", "memory loss", "cant remember", "poor memory"], bodySystem: "neurological", icon: "🧠", followUp: ["Is it recent or long-standing?"] },
  difficulty_concentrating: { name: "Difficulty Concentrating", nameHi: "ध्यान लगाने में कठिनाई", aliases: ["cant focus", "brain fog", "poor concentration", "unfocused"], bodySystem: "neurological", icon: "🎯", followUp: ["Is it affecting your work?"] },
  numbness: { name: "Numbness", nameHi: "सुन्न होना", aliases: ["numb", "no feeling", "loss of sensation", "dead feeling"], bodySystem: "neurological", icon: "🚫", followUp: ["Where is the numbness?"] },
  pins_and_needles: { name: "Pins and Needles", nameHi: "चुभन का एहसास", aliases: ["tingling", "prickling", "paresthesia", "pricking feeling"], bodySystem: "neurological", icon: "📌", followUp: ["Is it in hands or feet?"] },

  // ===== MENTAL =====
  anxiety: { name: "Anxiety", nameHi: "चिंता", aliases: ["worried", "anxious", "nervous", "apprehensive", "worry"], bodySystem: "mental", icon: "😰", followUp: ["How long have you been feeling this way?", "Is it affecting your daily life?"] },
  restlessness: { name: "Restlessness", nameHi: "बेचैनी", aliases: ["cant sit still", "agitated", "fidgety", "uneasy"], bodySystem: "mental", icon: "😤", followUp: ["Is it constant?"] },
  irritability: { name: "Irritability", nameHi: "चिड़चिड़ापन", aliases: ["easily annoyed", "short tempered", "cranky", "grumpy", "irritated"], bodySystem: "mental", icon: "😠", followUp: ["Is this a change from your usual behavior?"] },
  mood_swings: { name: "Mood Swings", nameHi: "मूड बदलना", aliases: ["emotional changes", "up and down mood", "mood changes", "emotional instability"], bodySystem: "mental", icon: "🎭", followUp: ["How often do they occur?"] },
  sadness: { name: "Sadness", nameHi: "उदासी", aliases: ["feeling sad", "unhappy", "feeling down", "low mood", "depressed feeling"], bodySystem: "mental", icon: "😢", followUp: ["How long have you been feeling sad?"] },
  hopelessness: { name: "Hopelessness", nameHi: "निराशा", aliases: ["no hope", "feeling hopeless", "nothing matters", "giving up"], bodySystem: "mental", icon: "😔", followUp: ["Have you had thoughts of harming yourself?"] },
  loss_of_interest: { name: "Loss of Interest", nameHi: "रुचि कम होना", aliases: ["no interest", "dont enjoy things", "anhedonia", "nothing interests me"], bodySystem: "mental", icon: "😶", followUp: ["In activities you used to enjoy?"] },
  sleep_difficulty: { name: "Sleep Difficulty", nameHi: "नींद न आना", aliases: ["insomnia", "cant sleep", "trouble sleeping", "sleeplessness", "difficulty sleeping"], bodySystem: "mental", icon: "🌙", followUp: ["Trouble falling asleep or staying asleep?"] },
  excessive_sleep: { name: "Excessive Sleep", nameHi: "बहुत ज़्यादा नींद", aliases: ["sleeping too much", "hypersomnia", "always sleepy", "oversleeping"], bodySystem: "mental", icon: "😴", followUp: ["How many hours are you sleeping?"] },
  panic_attacks: { name: "Panic Attacks", nameHi: "पैनिक अटैक", aliases: ["panic", "sudden fear", "anxiety attack", "feeling of doom"], bodySystem: "mental", icon: "😱", followUp: ["Do you get chest pain or shortness of breath during them?"] },
  racing_thoughts: { name: "Racing Thoughts", nameHi: "तेज़ी से विचार आना", aliases: ["mind racing", "cant stop thinking", "thoughts too fast", "overthinking"], bodySystem: "mental", icon: "💭", followUp: ["Does it affect your sleep?"] },

  // ===== OTHER =====
  excessive_sweating: { name: "Excessive Sweating", nameHi: "ज़्यादा पसीना आना", aliases: ["hyperhidrosis", "sweating a lot", "profuse sweating", "drenched in sweat"], bodySystem: "other", icon: "💦", followUp: ["Is it all over or in specific areas?"] },
  hair_loss: { name: "Hair Loss", nameHi: "बालों का झड़ना", aliases: ["hair falling", "balding", "alopecia", "thinning hair", "hair fall"], bodySystem: "other", icon: "💇", followUp: ["Is it patchy or all over?"] },
  brittle_nails: { name: "Brittle Nails", nameHi: "नाखून टूटना", aliases: ["weak nails", "breaking nails", "fragile nails", "nail problems"], bodySystem: "other", icon: "💅", followUp: ["Are they also discolored?"] },
  cold_intolerance: { name: "Cold Intolerance", nameHi: "ठंड बर्दाश्त न होना", aliases: ["always cold", "cant tolerate cold", "feeling cold", "sensitive to cold"], bodySystem: "other", icon: "❄️", followUp: ["Do others around you also feel cold?"] },
  heat_intolerance: { name: "Heat Intolerance", nameHi: "गर्मी बर्दाश्त न होना", aliases: ["always hot", "cant tolerate heat", "overheating", "sensitive to heat"], bodySystem: "other", icon: "🥵", followUp: ["Are you also sweating more?"] },
  slow_healing_wounds: { name: "Slow Healing Wounds", nameHi: "घाव देर से भरना", aliases: ["wounds not healing", "slow recovery", "cuts take long to heal"], bodySystem: "other", icon: "🩹", followUp: ["Do you have diabetes?"] },
  increased_hunger: { name: "Increased Hunger", nameHi: "ज़्यादा भूख लगना", aliases: ["always hungry", "polyphagia", "excessive appetite", "eating a lot"], bodySystem: "other", icon: "🍔", followUp: ["Are you also losing weight despite eating more?"] },
  dry_mouth: { name: "Dry Mouth", nameHi: "मुँह सूखना", aliases: ["mouth dryness", "xerostomia", "parched mouth", "no saliva"], bodySystem: "other", icon: "👄", followUp: ["Are you on any medications?"] },
  swollen_neck: { name: "Swollen Neck", nameHi: "गर्दन में सूजन", aliases: ["neck swelling", "goiter", "lump in neck", "thyroid swelling", "enlarged thyroid"], bodySystem: "other", icon: "🦒", followUp: ["Is it painful?", "Is it getting bigger?"] }
};
