import { JSX } from 'react';

import { Control, useFieldArray, UseFormRegister } from 'react-hook-form';

import styles from './index.module.css';

import { SurveyFormData } from '~/featuers/SurveyForm/types';

type Props = {
  register: UseFormRegister<SurveyFormData>;
  control: Control<SurveyFormData>;
  questionIndex: number;
};

export function ChoicesCreationArea({ register, control, questionIndex }: Props): JSX.Element {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${questionIndex}.choices` as 'questions.0.choices',
  });

  return (
    <div className={styles.container}>
      <ul className={styles.radioList}>
        {fields.map((field, index) => (
          <li className={styles.radioListItem} key={field.id}>
            <label className={styles.itemInput}>
              <span>{`選択肢 ${index + 1}:`}</span>
              <input
                type="text"
                className={styles.textInput}
                {...register(`questions.${questionIndex}.choices.${index}.choiceText`, { required: true })}
              />
              <button onClick={() => remove(index)}>削除</button>
            </label>
          </li>
        ))}
      </ul>
      <div>
        <button type="button" onClick={() => append({ choiceText: '' })}>
          新しい選択肢を追加
        </button>
      </div>
    </div>
  );
}
