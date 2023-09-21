type QuestionBase = {
  id: string;
  title: string;
};

type TextQuestion = QuestionBase & {
  type: 'text';
};

type Choice = {
  choiceText: string;
};

type CheckboxQuestion = QuestionBase & {
  type: 'checkbox';
  choices: Choice[];
};

export type RadioQuestion = QuestionBase & {
  type: 'radio';
  choices: Choice[];
};

export type Question = TextQuestion | CheckboxQuestion | RadioQuestion;

export type QuestionType = Question extends { type: infer T } ? T : never;

export function getQuestionTypes(): QuestionType[] {
  // REVISIT: QuestionType の各要素の定義が重複しているが一旦妥協
  return ['text', 'radio', 'checkbox'];
}

export type SurveyFormData = {
  title: string;
  description: string;
  questions: Question[];
};

export type SurveyPerticipantFormData = Omit<SurveyFormData, 'title' | 'description'>;
