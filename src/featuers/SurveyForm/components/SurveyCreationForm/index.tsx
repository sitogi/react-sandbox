import { JSX } from 'react';

import { Control, useFieldArray, useForm, UseFormRegister } from 'react-hook-form';

import styles from './index.module.css';

import { Question, SurveyFormData } from '~/featuers/SurveyForm/types';
import { VStack } from '~/featuers/VStack';

// const sampleValues = {
//   questions: [
//     { title: '今後どのようなコースを希望しますか？', type: 'text' },
//     {
//       title: 'どのような方法で当店を知りましたか？',
//       type: 'checkbox',
//       choices: [
//         { choiceText: 'チェックボックス1' },
//         { choiceText: 'チェックボックス2' },
//         { choiceText: 'チェックボックス3' },
//         { choiceText: 'チェックボックス4' },
//       ],
//     },
//     {
//       title: '本日の講義はどうでしたか？',
//       type: 'radio',
//       choices: [
//         { choiceText: '大変満足' },
//         { choiceText: 'やや満足' },
//         { choiceText: 'ふつう' },
//         { choiceText: 'やや不満' },
//         { choiceText: '大変不満' },
//       ],
//     },
//   ],
// } satisfies SurveyFormData;

export function SurveyCreationForm(): JSX.Element {
  const { handleSubmit, control, register } = useForm<SurveyFormData>({ defaultValues: { questions: [] } });
  const { fields, append, remove } = useFieldArray({ control, name: 'questions' });

  return (
    <div className={styles.container}>
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
    </div>
  );
}

type QuestionItemPros = {
  question: Question;
  register: UseFormRegister<SurveyFormData>;
  control: Control<SurveyFormData>;
  index: number;
  removeQuestion: (index: number) => void;
};

function QuestionItem({ question, register, control, index, removeQuestion }: QuestionItemPros): JSX.Element {
  return (
    <div>
      <h3>{question.title}</h3>
      <QuestionItemBody
        question={question}
        register={register}
        control={control}
        index={index}
        removeQuestion={removeQuestion}
      />
    </div>
  );
}

function QuestionItemBody({ question, register, control, index, removeQuestion }: QuestionItemPros): JSX.Element {
  switch (question.type) {
    case 'text': {
      return <div>{question.type}</div>;
    }
    case 'radio': {
      return <div>{question.type}</div>;
    }
    case 'checkbox': {
      return <div>{question.type}</div>;
    }
  }
}
