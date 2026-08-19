export interface Course {
  id: string;
  title: string;
  subtitle: string;
  badge?: string;
  description: string;
  duration: string;
  mode: 'Live Online + Recorded' | 'Hybrid / Classroom' | 'Self-Paced';
  features: string[];
  targetExams: string[];
  priceOriginal: string;
  priceDiscounted: string;
  batchStartDate: string;
  syllabusHighlights: string[];
  facultyLead: string;
  ctaText: string;
}

export interface ResultItem {
  id: string;
  name: string;
  exam: string;
  rankOrStatus: string;
  year: string;
  state: string;
  quote: string;
  avatarInitials: string;
  scoreHighlight?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  exam: string;
  year: string;
  rating: number;
  content: string;
  location: string;
  currentRole: string;
}

export interface MockQuestion {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  bareActReference: string;
}

export interface FreeResource {
  id: string;
  title: string;
  tag: string;
  description: string;
  pagesOrCount: string;
  format: string;
  updatedDate: string;
  downloadUrl?: string;
}

export interface StateExamDetail {
  code: string;
  name: string;
  shortName: string;
  syllabusFocus: string[];
  localLaws: string[];
  totalVacancies: string;
  examStages: string[];
  nextExamExpected: string;
}
