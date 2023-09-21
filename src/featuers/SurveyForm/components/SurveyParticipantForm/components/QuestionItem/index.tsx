import { JSX } from 'react';

import { Control, UseFormRegister, useWatch } from 'react-hook-form';

import { ChoicesCreationArea } from '../../components/ChoicesCreationArea';

import styles from './index.module.css';

import { Question, SurveyPerticipantFormData } from '~/featuers/SurveyForm/types';

type Props = {
  field: Question;
  register: UseFormRegister<SurveyPerticipantFormData>;
  control: Control<SurveyPerticipantFormData>;
  index: number;
};

export function QuestionItem({ field, register, control, index }: Props): JSX.Element {
  return (
    <div className={styles.container}>
      <label>
        <h4>{`質問 ${index + 1}`}</h4>
        <input type="text" className={styles.textInput} {...register(`questions.${index}.title`, { required: true })} />
      </label>
      <div>
        <ContentSwitcher field={field} register={register} control={control} index={index} />
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
