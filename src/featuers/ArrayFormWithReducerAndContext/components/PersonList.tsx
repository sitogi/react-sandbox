import React, { JSX, useContext } from 'react';

import styles from '../index.module.css';

import { PersonListItem } from '~/featuers/ArrayFormWithReducerAndContext/components/PersonListItem';
import { PeopleContext } from '~/featuers/ArrayFormWithReducerAndContext/contexts/PeopleProvider';

export const PersonList = (): JSX.Element => {
  const people = useContext(PeopleContext);

  return (
    <div className={styles.container}>
      <div className={styles.formsWrapper}>
        {people.map((p) => (
          <PersonListItem key={p.id} person={p} />
        ))}
      </div>
    </div>
  );
};
