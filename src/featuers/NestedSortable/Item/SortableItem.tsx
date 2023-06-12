import { CSSProperties, JSX } from 'react';

import { UniqueIdentifier } from '@dnd-kit/core';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import { Item } from './Item';

type Props = { id: UniqueIdentifier; isDragging: boolean };

export function SortableItem(props: Props): JSX.Element {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: props.id });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: props.isDragging ? 0.5 : 1,
  };

  return <Item ref={setNodeRef} id={props.id} style={style} attributes={attributes} listeners={listeners} />;
}
