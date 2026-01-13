
export enum QuestionType {
  FILL_BLANK = 'FILL_BLANK',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  MATCHING = 'MATCHING'
}

export interface Question {
  id: number;
  text: string;
  answer: string;
  type: QuestionType;
  options?: string[];
  explanation?: string;
}

export interface Section {
  id: number;
  title: string;
  description: string;
  questions: Question[];
  transcript: string;
}

export interface UserAnswer {
  questionId: number;
  value: string;
}
