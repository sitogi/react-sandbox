import { JSX } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';

import { SurveyFormData, SurveyPerticipantFormData } from '../../types';

import { QuestionItem } from './components/QuestionItem';
import styles from './index.module.css';

type Props = {
  initialData: SurveyFormData;
  onSubmit: (data: SurveyPerticipantFormData) => void;
};

export function SurveyParticipantForm({ initialData, onSubmit }: Props): JSX.Element {
  console.log(initialData);
  const { handleSubmit, control, register } = useForm<SurveyPerticipantFormData>({ defaultValues: initialData });
  const { fields } = useFieldArray({ control, name: 'questions' });

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <h1>{initialData.title}</h1>
        <p>{initialData.description}</p>
      </div>
      <form onSubmit={() => handleSubmit(onSubmit)}>
        <div className={styles.questionListContainer}>
          {fields.map((field, index) => (
            <QuestionItem key={field.id} field={field} register={register} control={control} index={index} />
          ))}
        </div>
        <div className={styles.surveyFooterContainer}>
          <button type="submit">アンケートに回答する</button>
        </div>
      </form>
    </div>
  );
}
