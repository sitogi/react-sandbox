import { CSSProperties, JSX, ReactNode } from 'react';

import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Container } from './Container';

type Props = { id: UniqueIdentifier; isDragging: boolean; children: ReactNode };

export function SortableContainer({ id, isDragging, children }: Props): JSX.Element {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <Container ref={setNodeRef} id={id} style={style} attributes={attributes} listeners={listeners}>
      {children}
    </Container>
  );
}
