export type CompanyType = 
  | 'startup-tech'
  | 'restaurant'
  | 'school-network'
  | 'delivery'
  | 'clothing-industry';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  wrongExplanations: string[];
}

export interface GameState {
  phase: 'company-selection' | 'company-naming' | 'quiz' | 'results';
  companyType: CompanyType | null;
  companyName: string;
  currentQuestionIndex: number;
  score: number;
  timeLeft: number;
  answered: boolean;
  showExplanation: boolean;
  lastAnswerCorrect: boolean | null;
}

export interface CompanyOption {
  type: CompanyType;
  name: string;
  description: string;
  icon: string;
  color: string;
}