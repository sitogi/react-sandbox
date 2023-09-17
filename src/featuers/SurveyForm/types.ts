type QuestionBase = {
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

type RadioQuestion = QuestionBase & {
  type: 'radio';
  choices: Choice[];
};

export type Question = TextQuestion | CheckboxQuestion | RadioQuestion;

// 必要になったらこれで型だけの UNION 取れる
// export type QuestionType = Question extends { type: infer T } ? T : never;

export type SurveyFormData = {
  questions: Question[];
};
