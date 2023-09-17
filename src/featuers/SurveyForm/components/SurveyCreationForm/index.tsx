import { JSX } from 'react';

import { useFieldArray, useForm } from 'react-hook-form';

import { QuestionItem } from '~/featuers/SurveyForm/components/SurveyCreationForm/QuestionItem';
import { SurveyFormData } from '~/featuers/SurveyForm/types';
import { VStack } from '~/featuers/VStack';

export function SurveyCreationForm(): JSX.Element {
  const { handleSubmit, control, register } = useForm<SurveyFormData>({ defaultValues: { questions: [] } });
  const { fields, append, remove } = useFieldArray({ control, name: 'questions' });

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <VStack>
        {fields.map((field, index) => (
          <QuestionItem
            key={field.id}
            question={field}
            register={register}
            control={control}
            index={index}
            removeQuestion={(index) => remove(index)}
          />
        ))}
        <button
          type="button"
          onClick={() => append({ type: 'text', title: '本日はどのような目的でここに来ましたか？' })}
        >
          質問を追加する
        </button>
        <button type="submit">アンケートを作成する</button>
      </VStack>
    </form>
  );
}
