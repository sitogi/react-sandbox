import { JSX } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';

import styles from './index.module.css';

import { QuestionItem } from '~/featuers/SurveyForm/components/SurveyCreationForm/components/QuestionItem';
import { SurveyFormData } from '~/featuers/SurveyForm/types';

type Props = {
  initialData: SurveyFormData;
  onSubmit: (data: SurveyFormData) => void;
};

export function SurveyCreationForm({ initialData, onSubmit }: Props): JSX.Element {
  const { handleSubmit, control, register } = useForm<SurveyFormData>({ defaultValues: initialData });
  const { fields, append, remove } = useFieldArray({ control, name: 'questions' });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <div className={styles.surveyHeaderContainer}>
          <input
            type="text"
            className={`${styles.textInput} ${styles.surveyTitle}`}
            placeholder="アンケートのタイトル"
            {...register(`title`, { required: true })}
          />
          <textarea
            className={styles.textInput}
            placeholder="アンケートの説明"
            {...register(`description`, { required: true })}
          />
        </div>
        <div className={styles.questionListContainer}>
          {fields.map((field, index) => (
            <QuestionItem
              key={field.id}
              register={register}
              control={control}
              index={index}
              removeQuestion={(index) => remove(index)}
            />
          ))}
          <div>
            <button type="button" onClick={() => append({ type: 'text', title: '' })}>
              質問を追加する
            </button>
          </div>
        </div>
        <div className={styles.surveyFooterContainer}>
          <button type="submit">アンケートを作成する</button>
        </div>
      </div>
    </form>
  );
}
