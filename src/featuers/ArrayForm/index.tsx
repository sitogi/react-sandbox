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

  const handleUpdateField = useCallback((id: string, name: string, value: string) => {
    setPeople((current) => current.map((p) => (p.id === id ? { ...p, [name]: value } : p)));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.formsWrapper}>
        {people.map((p) => (
          <PersonForm key={p.id} person={p} updateField={handleUpdateField} />
        ))}
      </div>
    </div>
  );
};

type PersonFormProps = {
  person: Person;
  updateField: (id: string, name: string, value: string) => void;
};

const PersonForm = memo(function PersonForm({ person, updateField }: PersonFormProps): JSX.Element {
  const { age, id, name } = person;

  return (
    <div className={styles.personWrapper}>
      <VStack>
        <div>
          <label htmlFor="name">name:</label>
          <input id="name" name="name" value={name} onChange={(e) => updateField(id, e.target.name, e.target.value)} />
        </div>
        <div>
          <label htmlFor="age">age:</label>
          <input id="age" name="age" value={age} onChange={(e) => updateField(id, e.target.name, e.target.value)} />
        </div>
      </VStack>
    </div>
  );
});
