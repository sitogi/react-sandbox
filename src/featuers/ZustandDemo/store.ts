import { create } from 'zustand';

type CardContent =
  | { type: 'note'; content: string }
  | { type: 'list'; items: string[] }
  | { type: 'canvas'; url: string };
type Card = { id: string; title: string } & CardContent;

type BoardStore = {
  id: string;
  name: string;
  cards: Array<Card>;
  setName: (name: string) => void;
  setCard: (card: Card) => void;
};

const initData: Card[] = [];
for (let i = 1; i <= 3000; i++) {
  if (i % 2 === 0) {
    const card = {
      id: String(i),
      title: `title-${i}`,
      type: 'note',
      content: `content-${i}`,
    } satisfies Card;
    initData.push(card);
  } else {
    const card = {
      id: String(i),
      title: `title-${i}`,
      type: 'list',
      items: [`item-${i}-1`, `item-${i}-2`, `item-${i}-3`],
    } satisfies Card;
    initData.push(card);
  }
}

export const useBoardStore = create<BoardStore>((set) => ({
  id: 'id-a',
  name: 'name-a',
  cards: initData,
  setName: (name: string) => set((state) => ({ ...state, name })),
  setCard: (card: Card) =>
    set((state) => {
      const newCards = state.cards.map((c) => {
        if (c.id === card.id) {
          return card;
        }
        return c;
      });
      return { ...state, cards: newCards };
    }),
}));
