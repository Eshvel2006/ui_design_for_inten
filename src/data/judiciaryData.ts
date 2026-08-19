import { Course, ResultItem, Testimonial, MockQuestion, FreeResource, StateExamDetail } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'foundation',
    title: 'Judiciary Foundation Course',
    subtitle: 'Comprehensive 18-Month Master Program',
    badge: 'Most Comprehensive',
    description: 'Designed for beginners and law graduates to master core substantive, procedural, and local laws from ground up for all State Judiciary & PCS (J) exams.',
    duration: '18 Months (800+ Hours)',
    mode: 'Live Online + Recorded',
    features: [
      'Comprehensive coverage of BNS, BNSS, BSA, CPC, Constitution & 16 Minor Acts',
      'Daily Mains answer writing evaluation with personalized faculty feedback',
      'Judgment writing masterclasses & charge framing practice',
      'Weekly Prelims mock tests with all-India percentile ranking',
      'One-on-one mentorship by former judicial officers and NLU alumni'
    ],
    targetExams: ['UP PCS (J)', 'Delhi Judicial Service (DJS)', 'MP CJ', 'Rajasthan Judicial Service (RJS)', 'Bihar PCS (J)', 'Haryana HCS (J)'],
    priceOriginal: '₹85,000',
    priceDiscounted: '₹54,999',
    batchStartDate: 'Starting 1st of Next Month',
    syllabusHighlights: [
      'Constitutional Law of India & Administrative Law',
      'Criminal Major Laws: Bharatiya Nyaya Sanhita (BNS), BNSS, Bharatiya Sakshya Adhiniyam (BSA)',
      'Civil Major Laws: Code of Civil Procedure (CPC) 1908 & Law of Evidence',
      'Substantive Laws: Contract Act, Specific Relief, Limitation, TPA, Family Laws',
      'Mains Answer Writing, Translation & Language Papers'
    ],
    facultyLead: 'Adv. Ramanuj Shrivastava (Ex-Addl. District Judge & NLU Visiting Faculty)',
    ctaText: 'View Course →'
  },
  {
    id: 'state-judiciary',
    title: 'State Judiciary Target Program',
    subtitle: 'State-Specific Intensive Fast-Track',
    badge: 'High Selection Rate',
    description: 'Focused state-specific preparation covering local rent control, revenue codes, tenancy laws, customary laws, and past 15-year examination patterns.',
    duration: '9 Months (450+ Hours)',
    mode: 'Live Online + Recorded',
    features: [
      'Deep dive into state-specific Local Laws & Acts (UP Revenue Code, MP Accommodation, etc.)',
      'Dedicated state pattern mock tests (Prelims & Mains format)',
      'Hindi / English legal language & essay translation masterclass',
      'Previous 15 years state question paper dissection & model solutions',
      'Live doubt clearing sessions 4 days a week'
    ],
    targetExams: ['UP PCS-J', 'Rajasthan RJS', 'MP Civil Judge', 'Bihar BPSC-J', 'Delhi DJS', 'Haryana HCS-J'],
    priceOriginal: '₹60,000',
    priceDiscounted: '₹38,500',
    batchStartDate: 'New Batch Every Monday',
    syllabusHighlights: [
      'State-Specific Major and Minor Local Acts (Tenancy, Land Revenue, Municipal)',
      'High Court Landmark Judgments & Recent Case Law Digests',
      'Essay, Precise Writing & Legal Translation Modules',
      'Mock Interviews with Retired Judicial Officers'
    ],
    facultyLead: 'Dr. Vikramaditya Rathore (LL.M, Ph.D. Law, 14+ Yrs Judiciary Mentorship)',
    ctaText: 'Explore Program →'
  },
  {
    id: 'pcs-j-crash',
    title: 'PCS (J) Dedicated Preparation',
    subtitle: 'Integrated Prelims-cum-Mains Accelerator',
    badge: 'Popular for 2026 Aspirants',
    description: 'A rigorous exam-oriented curriculum tailored for candidates with fundamental legal background targeting upcoming state notifications.',
    duration: '12 Months (600+ Hours)',
    mode: 'Live Online + Recorded',
    features: [
      'High-yield Bare Act decoding and memorization memory maps',
      'Structured 500+ Mains question repository with standard model answers',
      'Judgment writing & issue framing specialized bootcamps',
      'Current legal affairs and landmark Supreme Court verdicts compendium',
      'Unlimited access to class recordings until exam selection'
    ],
    targetExams: ['UP PCS (J)', 'Bihar PCS (J)', 'Jharkhand JPSC', 'Uttarakhand UKPSC (J)'],
    priceOriginal: '₹70,000',
    priceDiscounted: '₹44,999',
    batchStartDate: '15th of Current Month',
    syllabusHighlights: [
      'General Studies (GS) & Current Affairs for Judiciary',
      'Substantive & Procedural Law Papers (Paper I, II, III)',
      'Local Land Laws & Penal Statutes',
      'Interview Preparation & Personality Grooming'
    ],
    facultyLead: 'Adv. Maitreyi Deshmukh (Gold Medalist NLSIU Bangalore)',
    ctaText: 'View Program →'
  },
  {
    id: 'test-series',
    title: 'Judiciary All-India Mock Test Series',
    subtitle: 'Exact Simulation of Prelims & Mains',
    badge: 'Benchmarking Standard',
    description: 'Comprehensive test series with detailed performance analytics, ranking among thousands of aspirants, and line-by-line Mains copy evaluation.',
    duration: '6 Months (120+ Tests)',
    mode: 'Self-Paced',
    features: [
      '60+ Full-Length Prelims Mock Tests with negative marking & instant analytics',
      '40+ Mains Sectional & Full-Length Tests evaluated within 72 hours',
      'Detailed model answers with statutory citations & ratio decidendi',
      'Personal feedback from senior faculty highlighting score improvements',
      'State-wise customized test schedules mapped to official exam dates'
    ],
    targetExams: ['All 14 State Judicial Services'],
    priceOriginal: '₹24,000',
    priceDiscounted: '₹14,999',
    batchStartDate: 'Immediate Access Upon Enrolment',
    syllabusHighlights: [
      'Subject-wise Prelims Tests (IPC/BNS, CrPC/BNSS, Evidence/BSA, CPC)',
      'Full Syllabus Mixed Mock Tests',
      'Mains Answer Writing Drills',
      'State-wise Local Law Dedicated Tests'
    ],
    facultyLead: 'Board of Evaluators (Ex-Judges, Public Prosecutors & Senior Advocates)',
    ctaText: 'Start Testing →'
  }
];

export const RESULTS_DATA: ResultItem[] = [
  {
    id: '1',
    name: 'Aarav Sharma',
    exam: 'Civil Judge Junior Division Exam',
    rankOrStatus: 'AIR 18',
    year: '2025',
    state: 'Delhi (DJS)',
    quote: 'The Mains answer evaluation and judgment writing module at JurisBench made all the difference in my rank.',
    avatarInitials: 'AS',
    scoreHighlight: '342/450 in Mains'
  },
  {
    id: '2',
    name: 'Priya Verma',
    exam: 'State Judicial Services Examination',
    rankOrStatus: 'Selected (Rank 09)',
    year: '2025',
    state: 'Madhya Pradesh (MP CJ)',
    quote: 'Local laws and Bare Act mind maps transformed my revision speed during the last 45 days.',
    avatarInitials: 'PV',
    scoreHighlight: 'Rank 9 (1st Attempt)'
  },
  {
    id: '3',
    name: 'Rahul Kumar',
    exam: 'PCS (J) Provincial Civil Services Judicial',
    rankOrStatus: 'AIR 42',
    year: '2024',
    state: 'Uttar Pradesh (UP PCS-J)',
    quote: 'The personalized mentorship by former judges helped me structure legal answers with precise section citations.',
    avatarInitials: 'RK',
    scoreHighlight: 'Cleared in 2024'
  },
  {
    id: '4',
    name: 'Ananya Sen',
    exam: 'Rajasthan Judicial Service (RJS)',
    rankOrStatus: 'AIR 07',
    year: '2025',
    state: 'Rajasthan',
    quote: 'The state-specific test series simulated the exact RJS difficulty level. The interview guidance was top tier.',
    avatarInitials: 'AS',
    scoreHighlight: 'AIR 07'
  },
  {
    id: '5',
    name: 'Devendra Mishra',
    exam: 'Bihar Judicial Services Examination',
    rankOrStatus: 'Rank 14 (32nd BPSC-J)',
    year: '2024',
    state: 'Bihar',
    quote: 'Detailed feedback on procedural law questions helped me bridge the gap from 50% to 75% marks in Mains.',
    avatarInitials: 'DM',
    scoreHighlight: 'Selected'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Shreya Kulkarni',
    exam: 'Civil Judge Junior Division (Selected)',
    year: '2025 Batch',
    rating: 5,
    content: 'The depth of teaching in Procedural Laws (CrPC/BNSS and CPC) was exceptional. The faculty breaks down complex judicial precedents into actionable Mains frameworks. I owe my selection to the daily answer writing program.',
    location: 'Lucknow, Uttar Pradesh',
    currentRole: 'Civil Judge (Jr. Division)'
  },
  {
    id: '2',
    name: 'Aditya Vardhan Rao',
    exam: 'Delhi Judicial Service (DJS) Rank Holder',
    year: '2024 Batch',
    rating: 5,
    content: 'What sets JurisBench apart is the academic rigor. The mock test series did not just test memory; it tested judicial temperament, statutory interpretation, and contemporary legal aptitude.',
    location: 'New Delhi',
    currentRole: 'Metropolitan Magistrate'
  },
  {
    id: '3',
    name: 'Kavita Chawla',
    exam: 'RJS Civil Judge Cadre (Selected)',
    year: '2025 Batch',
    rating: 5,
    content: 'As a working law graduate, the structured recorded modules and 24/7 doubt resolution gave me the discipline to crack the exam on my first attempt. Truly a world-class legal education platform.',
    location: 'Jaipur, Rajasthan',
    currentRole: 'Judicial Magistrate First Class'
  }
];

export const FREE_RESOURCES_DATA: FreeResource[] = [
  {
    id: 'mock-test',
    title: 'All-India Judiciary Free Diagnostic Mock Test',
    tag: 'Interactive Test',
    description: 'Evaluate your conceptual command over Criminal & Civil Major Acts with real-time scoring, national percentile, and video explanations.',
    pagesOrCount: '100 Questions • 120 Mins',
    format: 'Online Test (Instant Result)',
    updatedDate: 'Updated for 2026 Pattern'
  },
  {
    id: 'judiciary-notes',
    title: 'High-Yield Bare Act Mind Maps & Case Summaries',
    tag: 'Study Companion',
    description: 'Download concise PDF flowcharts for Section 300 IPC/BNS, Res Judicata CPC Sec 11, and Landmark Constitutional Bench Verdicts (1950–2025).',
    pagesOrCount: '180 Pages • Comprehensive PDF',
    format: 'PDF Download',
    updatedDate: 'Revised Edition 2026'
  },
  {
    id: 'legal-current-affairs',
    title: 'Monthly Supreme Court & High Court Verdicts Compendium',
    tag: 'Current Affairs',
    description: 'Curated monthly compendium of Constitution Bench rulings, statutory amendments, and legal current affairs for Prelims and Mains.',
    pagesOrCount: '65 Pages • Monthly Edition',
    format: 'PDF / Monthly Digest',
    updatedDate: 'Latest Issue: Current Month'
  }
];

export const SAMPLE_MOCK_QUESTIONS: MockQuestion[] = [
  {
    id: 1,
    subject: 'Constitutional Law',
    question: 'Under Article 32 of the Constitution of India, which of the following writs is issued to prevent an inferior court or tribunal from exceeding its jurisdiction or usurping a jurisdiction with which it is not legally vested?',
    options: [
      'Writ of Habeas Corpus',
      'Writ of Prohibition',
      'Writ of Quo-Warranto',
      'Writ of Mandamus'
    ],
    correctIndex: 1,
    explanation: 'A Writ of Prohibition is issued by a superior court to prevent an inferior court or tribunal from exceeding its jurisdiction or acting contrary to rules of natural justice.',
    bareActReference: 'Article 32 & 226, Constitution of India; see Hari Vishnu Kamath v. Syed Ahmad Ishaque (1955)'
  },
  {
    id: 2,
    subject: 'Civil Procedure Code (CPC 1908)',
    question: 'The Doctrine of "Res Judicata" as embodied in Section 11 of the Code of Civil Procedure 1908 applies to which of the following?',
    options: [
      'Only regular civil suits',
      'Execution proceedings and writ petitions under Article 226',
      'Only appellate decrees',
      'Only interlocutory orders not touching merits'
    ],
    correctIndex: 1,
    explanation: 'Explanation VII to Section 11 clarifies that Res Judicata applies to execution proceedings. In Daryao v. State of UP (1961), the Supreme Court affirmed its application to writ proceedings.',
    bareActReference: 'Section 11, Explanation VII & VIII, CPC 1908'
  },
  {
    id: 3,
    subject: 'Law of Evidence',
    question: 'Under the Law of Evidence, which of the following is considered as "Direct Evidence"?',
    options: [
      'A witness testifying what another person told him about the crime',
      'A witness testifying to a fact which he saw or heard with his own senses',
      'An uncorroborated confession of a co-accused',
      'Opinion of a non-expert bystander'
    ],
    correctIndex: 1,
    explanation: 'Section 60 of Indian Evidence Act / Section 55 BSA provides that oral evidence must in all cases whatever be direct—referring to a fact seen, heard, or perceived by senses.',
    bareActReference: 'Section 60, Indian Evidence Act / Section 55, Bharatiya Sakshya Adhiniyam'
  },
  {
    id: 4,
    subject: 'Criminal Law',
    question: 'Which of the following is NOT an essential ingredient of "Grave and Sudden Provocation" under Exception 1 to Section 300 IPC (Murder)?',
    options: [
      'The provocation was not sought or voluntarily provoked by the offender',
      'The provocation was not given by anything done in obedience to the law',
      'The provocation was given by a lawful exercise of right of private defence',
      'The offender was deprived of the power of self-control'
    ],
    correctIndex: 2,
    explanation: 'First Proviso to Exception 1 states that the provocation must not be given by anything done in the lawful exercise of the right of private defence.',
    bareActReference: 'Section 300 Exception 1, Indian Penal Code / Bharatiya Nyaya Sanhita'
  },
  {
    id: 5,
    subject: 'Indian Contract Act',
    question: 'An agreement enforceable by law at the option of one or more of the parties thereto, but not at the option of the other or others, is termed as:',
    options: [
      'Void Agreement',
      'Voidable Contract',
      'Illegal Agreement',
      'Unenforceable Contract'
    ],
    correctIndex: 1,
    explanation: 'Section 2(i) of the Indian Contract Act defines a voidable contract as an agreement enforceable by law at the option of one or more parties, but not at the option of the other(s).',
    bareActReference: 'Section 2(i) & Section 19/19A, Indian Contract Act 1872'
  }
];

export const STATE_EXAMS_DATA: StateExamDetail[] = [
  {
    code: 'UP',
    name: 'Uttar Pradesh Judiciary (UP PCS-J)',
    shortName: 'UP PCS (J)',
    syllabusFocus: ['General Knowledge & Current Affairs (Paper 1)', 'Law Major Papers (Paper 2-5)', 'Penal, Procedure & Evidence', 'UP Revenue Code 2006 & Local Laws'],
    localLaws: ['UP Revenue Code 2006', 'UP Urban Buildings (Rent) Act 1972', 'UP Municipalities Act'],
    totalVacancies: '303+ Expected',
    examStages: ['Prelims (Objective)', 'Mains (Subjective 5 Papers)', 'Interview (100 Marks)'],
    nextExamExpected: 'Upcoming Cycle'
  },
  {
    code: 'DJS',
    name: 'Delhi Judicial Service Examination',
    shortName: 'Delhi DJS',
    syllabusFocus: ['Practical Legal Aptitude', 'Commercial Courts Act', 'Arbitration & Conciliation', 'POCSO, NI Act & Specific Relief'],
    localLaws: ['Delhi Rent Control Act 1958', 'Delhi Police Act', 'Customary Laws'],
    totalVacancies: 'Annual Cycle',
    examStages: ['Prelims (200 MCQs)', 'Mains (4 Papers)', 'Viva Voce (150 Marks)'],
    nextExamExpected: 'Notification Soon'
  },
  {
    code: 'MP',
    name: 'Madhya Pradesh Civil Judge Exam',
    shortName: 'MP CJ',
    syllabusFocus: ['Civil Major Laws (CPC, Evidence, Contract)', 'Criminal Major Laws (IPC, CrPC)', 'General Knowledge & Computer Knowledge'],
    localLaws: ['MP Land Revenue Code 1959', 'MP Accommodation Control Act 1961'],
    totalVacancies: '190+ Expected',
    examStages: ['Online Prelims (150 MCQs)', 'Mains (4 Written Papers)', 'Interview (50 Marks)'],
    nextExamExpected: 'Application Open Soon'
  },
  {
    code: 'RJS',
    name: 'Rajasthan Judicial Service (RJS)',
    shortName: 'Rajasthan RJS',
    syllabusFocus: ['Law Paper I (Civil Laws)', 'Law Paper II (Criminal Laws)', 'Language Paper: Hindi & English Essay Writing'],
    localLaws: ['Rajasthan Rent Control Act 2001', 'Rajasthan Tenancy Act'],
    totalVacancies: '222+ Posts',
    examStages: ['Prelims (100 Marks)', 'Mains (300 Marks)', 'Interview (35 Marks)'],
    nextExamExpected: '2026 Batch Active'
  },
  {
    code: 'BPSC',
    name: 'Bihar Judicial Services (BPSC-J)',
    shortName: 'Bihar BPSC (J)',
    syllabusFocus: ['General Studies & General Science', 'Law of Evidence & Procedure', 'Constitutional & Administrative Law', 'Commercial Law & TPA'],
    localLaws: ['Bihar Buildings (Lease, Rent & Eviction) Control Act', 'Bihar Land Reforms'],
    totalVacancies: '155+ Posts',
    examStages: ['Prelims (2 Papers)', 'Mains (5 Compulsory + 3 Optional)', 'Interview (100 Marks)'],
    nextExamExpected: '33rd Cycle'
  }
];

export const FACULTY_TEAM = [
  {
    name: 'Hon\'ble Justice (Retd.) R. K. Agrawal',
    role: 'Chief Academic Mentor & Ex-High Court Judge',
    experience: '35+ Years Judicial Service',
    specialization: 'Judicial Ethics, Constitutional Law & Judgment Framing'
  },
  {
    name: 'Dr. Vikramaditya Rathore',
    role: 'Lead Faculty - Criminal & Procedural Laws',
    experience: '16+ Years Legal Pedagogy',
    specialization: 'BNS, BNSS, BSA & Trial Advocacy'
  },
  {
    name: 'Adv. Maitreyi Deshmukh',
    role: 'Senior Faculty - Civil & Substantive Laws',
    experience: 'NLU Gold Medalist • 11+ Years Experience',
    specialization: 'CPC, Law of Contracts & Property Jurisprudence'
  },
  {
    name: 'Prof. Harish Chandra Shukla',
    role: 'Head of Evaluation & Mains Answer Writing',
    experience: 'Former Public Prosecutor • 18+ Yrs Experience',
    specialization: 'Mains Drafting, Evidence Analysis & Local Laws'
  }
];
