
import { Section, QuestionType } from './types';

export const AUDIO_URL = 'https://tinyurl.com/ieltsliste1';

export const SECTIONS: Section[] = [
  {
    id: 1,
    title: "Part 1: College Facilities",
    description: "Questions 1-5. Complete the table below. Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.",
    questions: [
      { id: 1, text: "Availability for Counselling Service", answer: "Yellow", type: QuestionType.FILL_BLANK },
      { id: 2, text: "Sessions for Counselling Service", answer: "8", type: QuestionType.FILL_BLANK },
      { id: 3, text: "Location for Nightline", answer: "Central", type: QuestionType.FILL_BLANK },
      { id: 4, text: "Phone number for Sports Centre", answer: "0900 7625913", type: QuestionType.FILL_BLANK },
      { id: 5, text: "Cost for Sports Centre", answer: "22", type: QuestionType.FILL_BLANK },
      { id: 6, text: "Documents requested: Whole _______", answer: "information pack", type: QuestionType.FILL_BLANK },
      { id: 7, text: "Student name: _______", answer: "Sonia Orr", type: QuestionType.FILL_BLANK },
      { id: 8, text: "Address: 22 _______", answer: "Winter Gardens", type: QuestionType.FILL_BLANK },
      { id: 9, text: "Postcode: _______", answer: "GF23", type: QuestionType.FILL_BLANK },
      { id: 10, text: "Course: _______ and sociology", answer: "Economics", type: QuestionType.FILL_BLANK },
    ],
    transcript: `Hi, I wonder if you could help me... [Transcript segment]`
  },
  {
    id: 2,
    title: "Part 2: Language School Enrollment",
    description: "Questions 11-17. Complete the enrollment form. Write NO MORE THAN TWO WORDS OR A NUMBER for each answer.",
    questions: [
      { id: 11, text: "Name of Applicant", answer: "Vijay Paresh", type: QuestionType.FILL_BLANK },
      { id: 12, text: "Telephone number", answer: "909 2467", type: QuestionType.FILL_BLANK },
      { id: 13, text: "Language to be learned", answer: "Spanish", type: QuestionType.FILL_BLANK },
      { id: 14, text: "Location of class", answer: "Building A", type: QuestionType.FILL_BLANK },
      { id: 15, text: "Time of class", answer: "6 pm", type: QuestionType.FILL_BLANK },
      { id: 16, text: "Name of class", answer: "Elementary 1", type: QuestionType.FILL_BLANK },
      { id: 17, text: "Date of commencement of class", answer: "August 10", type: QuestionType.FILL_BLANK },
      { id: 18, text: "Reception area, admissions", answer: "A", type: QuestionType.MATCHING, options: ["A", "B", "C", "D", "E", "F", "G", "H"] },
      { id: 19, text: "Fees office", answer: "D", type: QuestionType.MATCHING, options: ["A", "B", "C", "D", "E", "F", "G", "H"] },
      { id: 20, text: "Travel agency", answer: "G", type: QuestionType.MATCHING, options: ["A", "B", "C", "D", "E", "F", "G", "H"] },
    ],
    transcript: `Hello. May I help you? ... [Transcript segment]`
  },
  {
    id: 3,
    title: "Part 3: Research Proposal",
    description: "Questions 21-23. Complete the sentences. Write NO MORE THAN TWO WORDS for each answer.",
    questions: [
      { id: 21, text: "Sarah's proposal should begin with what's called a _______ of aims.", answer: "Statement", type: QuestionType.FILL_BLANK },
      { id: 22, text: "Sarah should prepare what's called an _______ for people taking part.", answer: "information sheet", type: QuestionType.FILL_BLANK },
      { id: 23, text: "Sarah plans to use both people's opinions and _______ in her researches.", answer: "statistic", type: QuestionType.FILL_BLANK },
      { id: 24, text: "How much it will cost.", answer: "C", type: QuestionType.MULTIPLE_CHOICE, options: ["A", "B", "C"] },
      { id: 25, text: "How participants will be chosen.", answer: "A", type: QuestionType.MULTIPLE_CHOICE, options: ["A", "B", "C"] },
      { id: 26, text: "How the results will be analysed.", answer: "B", type: QuestionType.MULTIPLE_CHOICE, options: ["A", "B", "C"] },
      { id: 27, text: "How the report will be presented.", answer: "C", type: QuestionType.MULTIPLE_CHOICE, options: ["A", "B", "C"] },
      { id: 28, text: "Sarah agrees to make sound recordings of:", answer: "A", type: QuestionType.MULTIPLE_CHOICE, options: ["A", "B", "C"] },
      { id: 29, text: "Sarah will give her tutor updates:", answer: "B", type: QuestionType.MULTIPLE_CHOICE, options: ["A", "B", "C"] },
      { id: 30, text: "What will Sarah promise participants?", answer: "C", type: QuestionType.MULTIPLE_CHOICE, options: ["A", "B", "C"] },
    ],
    transcript: `Hello Sarah. Hi... [Transcript segment]`
  },
  {
    id: 4,
    title: "Part 4: Millennium Dome",
    description: "Questions 31-40. Complete the summary. Write ONE WORD ONLY for each answer.",
    questions: [
      { id: 31, text: "Ugly buildings, like _______ blocks", answer: "office", type: QuestionType.FILL_BLANK },
      { id: 32, text: "Built to _______ the beginning of a new century", answer: "celebrate", type: QuestionType.FILL_BLANK },
      { id: 33, text: "Costs nearly a _______ pounds", answer: "billion", type: QuestionType.FILL_BLANK },
      { id: 34, text: "It will always be _______ for its ugliness", answer: "famous", type: QuestionType.FILL_BLANK },
      { id: 35, text: "The public _______ in Chicago", answer: "library", type: QuestionType.FILL_BLANK },
      { id: 36, text: "Thinks the Dome is a _______ example of design", answer: "worse", type: QuestionType.FILL_BLANK },
      { id: 37, text: "Has an _______ design", answer: "ambitious", type: QuestionType.FILL_BLANK },
      { id: 38, text: "Impressive _______", answer: "engineering", type: QuestionType.FILL_BLANK },
      { id: 39, text: "He is _______ with it", answer: "disappointed", type: QuestionType.FILL_BLANK },
      { id: 40, text: "Stage _______ events", answer: "entertainment", type: QuestionType.FILL_BLANK },
    ],
    transcript: `Ask why the Millennium Dome is so unpopular... [Transcript segment]`
  }
];
