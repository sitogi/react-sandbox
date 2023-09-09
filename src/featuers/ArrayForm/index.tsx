import { JSX, memo, useCallback, useState } from 'react';

import styles from './index.module.css';

import { VStack } from '~/featuers/VStack';

type Person = {
  id: string;
  name: string;
  age: number;
};

const INITIAL_PEOPLE: Person[] = [
  { id: '1', name: 'John Doe', age: 30 },
  { id: '2', name: 'Jane Doe', age: 28 },
  { id: '3', name: 'Alice', age: 35 },
  { id: '4', name: 'Bob', age: 40 },
  { id: '5', name: 'Charlie', age: 50 },
];

export const ArrayForm = (): JSX.Element => {
  const [people, setPeople] = useState<Person[]>(INITIAL_PEOPLE);

  const handleUpdateName = useCallback((id: string, name: string) => {
    setPeople((current) => current.map((p) => (p.id === id ? { ...p, name } : p)));
  }, []);

  const handleUpdateAge = useCallback((id: string, age: number) => {
    setPeople((current) => current.map((p) => (p.id === id ? { ...p, age } : p)));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formsWrapper}>
        {people.map((p) => (
          <PersonForm
            key={p.id}
            id={p.id}
            name={p.name}
            age={p.age}
            updateName={handleUpdateName}
            updateAge={handleUpdateAge}
          />
        ))}
      </div>
    </div>
  );
};

type PersonFormProps = {
  id: string;
  name: string;
  age: number;
  updateName: (id: string, name: string) => void;
  updateAge: (id: string, age: number) => void;
};

const PersonForm = memo(function PersonForm({ id, name, age, updateName, updateAge }: PersonFormProps): JSX.Element {
  return (
    <div className={styles.personWrapper}>
      <VStack>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" value={name} onChange={(e) => updateName(id, e.target.value)} />
        </div>
        <div>
          <label htmlFor="age">age:</label>
          <input id="age" value={age} onChange={(e) => updateAge(id, Number(e.target.value))} />
        </div>
      </VStack>
    </div>
  );
});
