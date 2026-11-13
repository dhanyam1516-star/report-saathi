export const SAMPLE_REPORTS = [
  {
    id: 'cbc-01',
    title: 'Complete Blood Count (CBC) with Differential',
    labName: 'Apollo Diagnostics & Pathology Lab',
    testDate: '12 Nov 2026',
    patient: {
      name: 'Rohan Sharma',
      age: 38,
      gender: 'Male',
      patientId: 'PT-89421'
    },
    fileName: 'Rohan_CBC_Report_Nov2026.pdf',
    fileSize: '1.4 MB',
    summary: {
      headline: 'Mildly low hemoglobin with overall stable blood cellular counts',
      plainLanguageOverview: 'Your Complete Blood Count measures the three major cellular components of your blood: red cells (oxygen carriers), white cells (immune defenders), and platelets (clotting helpers). Overall, your immune cells and platelets are in healthy ranges. Your hemoglobin and red blood count are slightly below typical reference levels, which often indicates mild iron deficiency or nutritional needs. Discussing your dietary iron intake and energy levels with your physician is recommended.',
      overallStatus: 'borderline', // 'normal' | 'borderline' | 'attention'
      flagCount: 2,
      totalCount: 8,
    },
    metrics: [
      {
        id: 'hb',
        name: 'Hemoglobin (Hb)',
        category: 'Red Blood Cells',
        value: 12.1,
        unit: 'g/dL',
        referenceRange: '13.5 - 17.5',
        status: 'low',
        plainMeaning: 'Hemoglobin is the protein in red blood cells that ferries oxygen from your lungs to your muscles, brain, and tissues.',
        whyItMatters: 'A level slightly below 13.5 g/dL in adult males can cause mild tiredness, fatigue, or breathlessness after exercise. It is often related to dietary iron or B12 absorption.',
        recommendationQuestion: 'Ask your doctor whether a ferritin (iron store) check or dietary adjustment is suitable.'
      },
      {
        id: 'rbc',
        name: 'Red Blood Cell (RBC) Count',
        category: 'Red Blood Cells',
        value: 4.12,
        unit: 'million/mcL',
        referenceRange: '4.50 - 5.90',
        status: 'low',
        plainMeaning: 'The total number of red blood cells circulating in your bloodstream.',
        whyItMatters: 'Correlates directly with hemoglobin; when both are slightly low, doctors look into nutritional factors or recent minor blood loss.',
        recommendationQuestion: 'Should we recheck this in 8-12 weeks after addressing nutritional intake?'
      },
      {
        id: 'wbc',
        name: 'Total Leukocyte (WBC) Count',
        category: 'Immune System',
        value: 7800,
        unit: '/mcL',
        referenceRange: '4,000 - 11,000',
        status: 'normal',
        plainMeaning: 'The body\'s primary defense cells that fight bacterial, viral, and environmental infections.',
        whyItMatters: 'A normal count indicates your immune system is not actively fighting a major acute infection or showing immune distress.',
        recommendationQuestion: 'No immediate action needed; count is solidly within the normal physiological window.'
      },
      {
        id: 'plt',
        name: 'Platelet Count',
        category: 'Clotting & Bleeding',
        value: 245000,
        unit: '/mcL',
        referenceRange: '150,000 - 450,000',
        status: 'normal',
        plainMeaning: 'Tiny cellular fragments that clump together to stop bleeding when you have a cut or injury.',
        whyItMatters: 'Normal platelet levels ensure healthy clotting without forming abnormal clots inside blood vessels.',
        recommendationQuestion: 'Clotting capacity is healthy and within expected parameters.'
      },
      {
        id: 'hct',
        name: 'Hematocrit (PCV)',
        category: 'Red Blood Cells',
        value: 37.8,
        unit: '%',
        referenceRange: '41.0 - 50.0',
        status: 'low',
        plainMeaning: 'The proportion of your total blood volume that consists of red blood cells.',
        whyItMatters: 'Closely tracks with hemoglobin. Being slightly below 41% confirms a mild thinning of red cell volume.',
        recommendationQuestion: 'Discuss whether staying well hydrated or taking iron supplements is indicated.'
      },
      {
        id: 'mcv',
        name: 'Mean Corpuscular Volume (MCV)',
        category: 'Red Blood Cells',
        value: 86.4,
        unit: 'fL',
        referenceRange: '80.0 - 100.0',
        status: 'normal',
        plainMeaning: 'The average physical size of your individual red blood cells.',
        whyItMatters: 'Normal MCV suggests the cells are normal in size (normocytic), helping rule out certain types of vitamin deficiencies.',
        recommendationQuestion: 'Normal size helps pinpoint the most likely causes of mild low hemoglobin.'
      },
      {
        id: 'neutro',
        name: 'Neutrophils',
        category: 'Immune System',
        value: 62,
        unit: '%',
        referenceRange: '40 - 70',
        status: 'normal',
        plainMeaning: 'The frontline soldier white blood cells that defend against acute bacterial infections.',
        whyItMatters: 'Percentage is balanced, showing no signs of active acute bacterial infection.',
        recommendationQuestion: 'Healthy baseline.'
      },
      {
        id: 'lympho',
        name: 'Lymphocytes',
        category: 'Immune System',
        value: 30,
        unit: '%',
        referenceRange: '20 - 40',
        status: 'normal',
        plainMeaning: 'White blood cells that produce antibodies and remember previous infections (viral defense).',
        whyItMatters: 'Well within standard parameters.',
        recommendationQuestion: 'No action needed.'
      }
    ],
    doctorQuestions: [
      'My hemoglobin is 12.1 g/dL (reference: 13.5 - 17.5). Do you recommend checking serum ferritin or iron stores?',
      'Are there specific dietary changes (e.g., leafy greens, lentils, citrus for absorption) or supplements you suggest?',
      'Should we repeat the Complete Blood Count in 2 to 3 months to see if values improve?'
    ]
  },
  {
    id: 'lipid-02',
    title: 'Comprehensive Lipid & Cholesterol Profile',
    labName: 'Metropolis Healthcare Diagnostic Centre',
    testDate: '08 Nov 2026',
    patient: {
      name: 'Priya Patel',
      age: 46,
      gender: 'Female',
      patientId: 'PT-99230'
    },
    fileName: 'Priya_Lipid_Panel_Nov2026.pdf',
    fileSize: '890 KB',
    summary: {
      headline: 'Elevated LDL cholesterol with protective HDL levels',
      plainLanguageOverview: 'A lipid panel measures fats and cholesterol in your circulation to gauge cardiovascular wellness. Your protective HDL ("good") cholesterol is strong and healthy. However, LDL ("bad") cholesterol and total cholesterol are moderately elevated above ideal preventive targets. This is very common and frequently responsive to heart-healthy dietary habits, aerobic movement, and lifestyle tweaks.',
      overallStatus: 'borderline',
      flagCount: 2,
      totalCount: 5,
    },
    metrics: [
      {
        id: 'tc',
        name: 'Total Cholesterol',
        category: 'Lipids',
        value: 224,
        unit: 'mg/dL',
        referenceRange: '< 200',
        status: 'high',
        plainMeaning: 'The overall combined amount of all types of cholesterol circulating in your blood.',
        whyItMatters: 'Levels above 200 mg/dL warrant paying closer attention to dietary saturated fats and routine cardio exercise.',
        recommendationQuestion: 'How does this number fit into my broader 10-year cardiovascular risk profile?'
      },
      {
        id: 'ldl',
        name: 'LDL Cholesterol ("Bad")',
        category: 'Lipids',
        value: 142,
        unit: 'mg/dL',
        referenceRange: '< 100',
        status: 'high',
        plainMeaning: 'Low-Density Lipoprotein carries cholesterol to tissues; excess can slowly build up plaque inside blood vessels.',
        whyItMatters: 'Keeping LDL below 100 mg/dL is ideal for long-term arterial clarity. 142 mg/dL indicates room for lifestyle improvement.',
        recommendationQuestion: 'Should we attempt a 3-month dietary and exercise trial before considering any medication?'
      },
      {
        id: 'hdl',
        name: 'HDL Cholesterol ("Good")',
        category: 'Lipids',
        value: 58,
        unit: 'mg/dL',
        referenceRange: '> 50',
        status: 'normal',
        plainMeaning: 'High-Density Lipoprotein scavenges excess cholesterol from arteries and carries it back to the liver for disposal.',
        whyItMatters: 'Higher HDL (>50 for women) provides a natural cardiovascular buffer.',
        recommendationQuestion: 'Healthy protective level! What habits will help keep it high?'
      },
      {
        id: 'tg',
        name: 'Triglycerides',
        category: 'Lipids',
        value: 145,
        unit: 'mg/dL',
        referenceRange: '< 150',
        status: 'normal',
        plainMeaning: 'The main storage form of fat in the body, derived from surplus dietary calories, sugars, and carbohydrates.',
        whyItMatters: 'At 145 mg/dL, this is within normal limits but close to the 150 mg/dL borderline threshold.',
        recommendationQuestion: 'Would reducing refined carbohydrates and sugary drinks help maintain this below 120?'
      },
      {
        id: 'vldl',
        name: 'VLDL Cholesterol',
        category: 'Lipids',
        value: 24,
        unit: 'mg/dL',
        referenceRange: '5 - 30',
        status: 'normal',
        plainMeaning: 'Very Low-Density Lipoprotein carries mostly triglycerides to your tissues.',
        whyItMatters: 'Well within standard healthy range.',
        recommendationQuestion: 'Normal finding.'
      }
    ],
    doctorQuestions: [
      'My LDL is 142 mg/dL while my HDL is 58 mg/dL. What lifestyle modifications do you recommend first?',
      'Do you advise a coronary calcium scan or other screening based on my family history?',
      'When should I schedule a follow-up fasting lipid panel to measure progress?'
    ]
  },
  {
    id: 'tft-03',
    title: 'Thyroid Function Panel (Ultra-sensitive TSH & Free Hormones)',
    labName: 'SRL Diagnostics Laboratory',
    testDate: '03 Nov 2026',
    patient: {
      name: 'Ananya Deshmukh',
      age: 32,
      gender: 'Female',
      patientId: 'PT-71043'
    },
    fileName: 'Ananya_Thyroid_Panel_Nov2026.png',
    fileSize: '2.1 MB',
    summary: {
      headline: 'Mildly elevated TSH with normal Free T3 and Free T4 (Subclinical pattern)',
      plainLanguageOverview: 'Your thyroid gland at the base of your neck controls your body\'s metabolism, energy generation, and temperature balance. In this report, your actual active circulating hormones (Free T3 and Free T4) are completely normal. However, TSH (the signal sent from your brain\'s pituitary gland telling your thyroid to produce hormones) is slightly high. Doctors describe this pattern as subclinical hypothyroidism, often monitored over time or correlated with fatigue symptoms.',
      overallStatus: 'borderline',
      flagCount: 1,
      totalCount: 3,
    },
    metrics: [
      {
        id: 'tsh',
        name: 'Thyroid Stimulating Hormone (TSH, Ultrasensitive)',
        category: 'Thyroid',
        value: 5.82,
        unit: 'uIU/mL',
        referenceRange: '0.45 - 4.50',
        status: 'high',
        plainMeaning: 'TSH is released by the pituitary gland in the brain like a thermostat signal, stimulating the thyroid.',
        whyItMatters: 'When the thyroid is working slightly sluggishly, the brain raises TSH to signal harder. At 5.82 uIU/mL, it is slightly above the 4.50 ceiling.',
        recommendationQuestion: 'Do my current symptoms (energy, sleep, cold sensitivity) warrant treatment or should we re-test in 3 months?'
      },
      {
        id: 'ft4',
        name: 'Free Thyroxine (FT4)',
        category: 'Thyroid',
        value: 1.28,
        unit: 'ng/dL',
        referenceRange: '0.82 - 1.77',
        status: 'normal',
        plainMeaning: 'The unbound, active main hormone circulating in your blood ready for cell metabolism.',
        whyItMatters: 'Because FT4 is normal, your tissues are receiving sufficient active thyroid hormone right now.',
        recommendationQuestion: 'Confirming FT4 is healthy reassures that hormone delivery is currently balanced.'
      },
      {
        id: 'ft3',
        name: 'Free Triiodothyronine (FT3)',
        category: 'Thyroid',
        value: 3.10,
        unit: 'pg/mL',
        referenceRange: '2.00 - 4.40',
        status: 'normal',
        plainMeaning: 'The most biologically potent thyroid hormone that directly drives cellular metabolic rate.',
        whyItMatters: 'Solidly in the middle of normal reference range.',
        recommendationQuestion: 'Shows normal peripheral conversion of thyroid hormone.'
      }
    ],
    doctorQuestions: [
      'Given normal Free T4/T3 but TSH of 5.82, does this indicate subclinical hypothyroidism?',
      'Would testing for thyroid antibodies (Anti-TPO) help identify if this is autoimmune related?',
      'Do you suggest monitoring every 3-6 months or initiating low-dose levothyroxine?'
    ]
  }
];
