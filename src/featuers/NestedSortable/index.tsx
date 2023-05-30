import { useState } from 'react';

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { Container } from './Contaier/Container';
import { SortableContainer } from './Contaier/SortableContainer';
import styles from './index.module.css';

import { Item } from '~/featuers/NestedSortable/Item/Item';
import { SortableItem } from '~/featuers/NestedSortable/Item/SortableItem';

export const NestedSortable = (): JSX.Element => {
  const [activeContainerId, setActiveContainerId] = useState<UniqueIdentifier | null>(null);
  const [activeItemId, setActiveItemId] = useState<UniqueIdentifier | null>(null);
  const [data, setData] = useState<{ [containerId: string]: UniqueIdentifier[] }>({
    A: ['A1', 'A2', 'A3'],
    B: ['B1', 'B2', 'B3'],
    C: ['C1', 'C2', 'C3'],
  });
  const [containers, setContainers] = useState<UniqueIdentifier[]>(Object.keys(data));
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={containers} strategy={rectSortingStrategy}>
        <div className={styles.sortableItemContainer}>
          {containers.map((id) => (
            <SortableContainer key={id} id={id} isDragging={id === activeContainerId}>
              <SortableContext items={data[id]} strategy={rectSortingStrategy}>
                {data[id].map((itemId) => (
                  <SortableItem key={itemId} id={itemId} isDragging={activeContainerId === itemId} />
                ))}
              </SortableContext>
              <DragOverlay>{activeItemId != null ? <Item id={activeItemId} /> : null}</DragOverlay>
            </SortableContainer>
          ))}
        </div>
        <DragOverlay>
          {activeContainerId != null && data[activeContainerId] !== undefined ? (
            <Container id={activeContainerId}>
              {data[activeContainerId].map((itemId) => (
                <SortableItem key={itemId} id={itemId} isDragging={activeContainerId === itemId} />
              ))}
            </Container>
          ) : null}
        </DragOverlay>
      </SortableContext>
    </DndContext>
  );

  function handleDragStart(event: DragStartEvent): void {
    const { active } = event;

    if (data[active.id] !== undefined) {
      setActiveContainerId(active.id);
    } else {
      setActiveItemId(active.id);
    }
  }

  function handleDragEnd(event: DragEndEvent): void {
    const { active, over } = event;

    if (over != null && active.id !== over.id) {
      setContainers((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }

    setActiveContainerId(null);
  }
};
