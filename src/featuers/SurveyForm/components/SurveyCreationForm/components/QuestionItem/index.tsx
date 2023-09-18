import { JSX } from 'react';

import { Control, UseFormRegister, useWatch } from 'react-hook-form';

import styles from './index.module.css';

import { ChoicesCreationArea } from '~/featuers/SurveyForm/components/SurveyCreationForm/components/ChoicesCreationArea';
import { getQuestionTypes, SurveyFormData } from '~/featuers/SurveyForm/types';

type Props = {
  register: UseFormRegister<SurveyFormData>;
  control: Control<SurveyFormData>;
  index: number;
  removeQuestion: (index: number) => void;
};

export function QuestionItem({ register, control, index, removeQuestion }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.questionHeader}>
        <h4>{`質問 ${index + 1}`}</h4>
      </div>
      <label>
        <span>質問のタイトル:</span>
        <input type="text" className={styles.textInput} {...register(`questions.${index}.title`)} />
      </label>
      <label>
        <p>質問の形式:</p>
        <select className={styles.typeSelect} {...register(`questions.${index}.type`)}>
          {getQuestionTypes().map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <div>
        <ContentSwitcher register={register} control={control} index={index} />
      </div>
      <div className={styles.questionFooter}>
        <button type="button" onClick={() => removeQuestion(index)}>
          この設問を削除
        </button>
      </div>
    </div>
  );
}

function ContentSwitcher({ register, control, index }: Omit<Props, 'removeQuestion'>): JSX.Element | null {
  const type = useWatch({ control, name: `questions.${index}.type` });

  switch (type) {
    case 'text': {
      return null;
    }
    case 'radio': {
      return <ChoicesCreationArea register={register} control={control} questionIndex={index} />;
    }
    case 'checkbox': {
      return <ChoicesCreationArea register={register} control={control} questionIndex={index} />;
    }
  }
}
