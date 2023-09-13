import React, { JSX } from 'react';

import { PersonList } from '~/featuers/ArrayFormWithReducerAndContext/components/PersonList';
import { PeopleProvider } from '~/featuers/ArrayFormWithReducerAndContext/contexts/PeopleProvider';
import { Person } from '~/featuers/ArrayFormWithReducerAndContext/types';

const INITIAL_PEOPLE: Person[] = [
  { id: '1', name: 'John Doe', age: 30 },
  { id: '2', name: 'Jane Doe', age: 28 },
  { id: '3', name: 'Alice', age: 35 },
  { id: '4', name: 'Bob', age: 40 },
  { id: '5', name: 'Charlie', age: 50 },
];

export const ArrayFormWithReducerAndContext = (): JSX.Element => {
  return (
    <PeopleProvider initialPeople={INITIAL_PEOPLE}>
      <PersonList />
    </PeopleProvider>
  );
};
