import React, { createContext, JSX, ReactNode, useReducer } from 'react';

import { Person } from '~/featuers/ArrayFormWithReducerAndContext/types';

type Action =
  | { type: 'added'; payload: { person: Person } }
  | { type: 'changed'; payload: { id: string; name: string; value: string } }
  | { type: 'deleted'; payload: { id: string } };

function peopleReducer(people: Person[], action: Action) {
  switch (action.type) {
    case 'added': {
      return [...people, action.payload.person];
    }
    case 'changed': {
      return people.map((p) => {
        if (p.id === action.payload.id) {
          return { ...p, [action.payload.name]: action.payload.value };
        }
        return p;
      });
    }
    case 'deleted': {
      return people.filter((p) => p.id !== action.payload.id);
    }
    default: {
      throw Error('Unknown action');
    }
  }
}

export const PeopleContext = createContext<Person[]>({} as never);
export const PeopleDispatchContext = createContext<React.Dispatch<Action>>({} as never);

type Props = {
  initialPeople: Person[];
  children: ReactNode;
};
export function PeopleProvider({ initialPeople, children }: Props): JSX.Element {
  const [people, dispatch] = useReducer(peopleReducer, initialPeople);

  return (
    <PeopleContext.Provider value={people}>
      <PeopleDispatchContext.Provider value={dispatch}>{children}</PeopleDispatchContext.Provider>
    </PeopleContext.Provider>
  );
}
