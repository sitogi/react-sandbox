import { useForm } from 'react-hook-form';

import styles from './index.module.css';

import { VStack } from '~/featuers/VStack';

type FormData = {
  name: string;
  age: number;
};

export const SimpleForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <VStack>
          <div>
            <label htmlFor="name">name:</label>
            <input id="name" {...register('name', { required: true })} />
            {errors.name && <p className={styles.errorMsg}>name is required.</p>}
          </div>
          <div>
            <label htmlFor="age">age:</label>
            <input id="age" {...register('age', { required: true })} />
            {errors.age && <p className={styles.errorMsg}>age is required.</p>}
          </div>
          <button type="submit">Submit</button>
        </VStack>
      </form>
    </div>
  );
};
