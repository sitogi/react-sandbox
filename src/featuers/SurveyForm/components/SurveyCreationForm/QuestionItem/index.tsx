import { JSX } from 'react';

import { Control, UseFormRegister } from 'react-hook-form';

import styles from './index.module.css';

import { getQuestionTypes, Question, SurveyFormData } from '~/featuers/SurveyForm/types';

type Props = {
  question: Question;
  register: UseFormRegister<SurveyFormData>;
  control: Control<SurveyFormData>;
  index: number;
  removeQuestion: (index: number) => void;
};

export function QuestionItem({ question, register, control, index, removeQuestion }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.questionHeader}>
        <h4>{`質問 ${index + 1}`}</h4>
      </div>
      <label>
        <span>質問のタイトル:</span>
        <input className={styles.textInput} value={question.title} />
      </label>
      <label>
        <p>質問の形式:</p>
        <select className={styles.typeSelect}>
          {getQuestionTypes().map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <div className={styles.questionFooter}>
        <button type="button" onClick={() => removeQuestion(index)}>
          この設問を削除
        </button>
      </div>
    </div>
  );
}
