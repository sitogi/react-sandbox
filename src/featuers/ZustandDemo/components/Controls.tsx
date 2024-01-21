import { JSX, memo } from 'react';

import styles from '~/featuers/ZustandDemo/index.module.css';
import { useBoardStore } from '~/featuers/ZustandDemo/store';

export function NameInput(): JSX.Element {
  const name = useBoardStore((state) => state.name);
  const setName = useBoardStore((state) => state.setName);

  return (
    <div>
      <input onChange={(e) => setName(e.currentTarget.value)} />
      <div>{name}</div>
    </div>
  );
}

export function CardList(): JSX.Element {
  console.log('render CardList');
  const ids = useBoardStore((state) => state.cards.map((card) => card.id));

  return (
    <div className={styles.cards}>
      {ids.map((id) => (
        <MemorizedCard key={id} id={id} />
      ))}
    </div>
  );
}

const MemorizedCard = memo(Card);
function Card({ id }: { id: string }): JSX.Element {
  console.log(`render Card ${id}`);
  const card = useBoardStore((state) => state.cards.find((card) => card.id === id));
  const setCard = useBoardStore((state) => state.setCard);

  if (!card) {
    return <div>Card Not Found.</div>;
  }

  return (
    <div>
      <div>{card.id}</div>
      <div>{card.title}</div>
      {card.type === 'note' && (
        <textarea
          value={card.content}
          onChange={(event) => {
            setCard({ ...card, content: event.currentTarget.value });
          }}
        >
          {card.content}
        </textarea>
      )}
      {card.type === 'list' && (
        <ul>
          {card.items.map((item, i) => (
            <li key={i}>
              <input
                value={item}
                onChange={(event) => {
                  const newItems = [...card.items];
                  newItems[i] = event.currentTarget.value;
                  setCard({ ...card, items: newItems });
                }}
              />
            </li>
          ))}
        </ul>
      )}
      {card.type === 'canvas' && <img src={card.url} alt="" />}
    </div>
  );
}
