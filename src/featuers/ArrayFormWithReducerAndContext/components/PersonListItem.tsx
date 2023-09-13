import React, { JSX, memo, useContext } from 'react';

import styles from '../index.module.css';

import { PeopleDispatchContext } from '~/featuers/ArrayFormWithReducerAndContext/contexts/PeopleProvider';
import { Person } from '~/featuers/ArrayFormWithReducerAndContext/types';
import { VStack } from '~/featuers/VStack';

type Props = {
  person: Person;
};

export const PersonListItem = memo(function PersonForm({ person }: Props): JSX.Element {
  const { age, id, name } = person;
  const dispatch = useContext(PeopleDispatchContext);

  return (
    <div className={styles.personWrapper}>
      <VStack>
        <div>
          <label htmlFor="name">name:</label>
          <input
            id="name"
            name="name"
            value={name}
            onChange={(e) => dispatch({ type: 'changed', payload: { id, name: e.target.name, value: e.target.value } })}
          />
        </div>
        <div>
          <label htmlFor="age">age:</label>
          <input
            id="age"
            name="age"
            value={age}
            onChange={(e) => dispatch({ type: 'changed', payload: { id, name: e.target.name, value: e.target.value } })}
          />
        </div>
      </VStack>
    </div>
  );
});
