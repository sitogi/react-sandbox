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
import { createPortal } from 'react-dom';

import { Container } from './Contaier/Container';
import { SortableContainer } from './Contaier/SortableContainer';
import styles from './index.module.css';

import { Item } from '~/featuers/NestedSortable/Item/Item';
import { SortableItem } from '~/featuers/NestedSortable/Item/SortableItem';

const INITIAL_CONTAINERS = [
  { containerId: 'A', items: ['A1', 'A2', 'A3'] },
  { containerId: 'B', items: ['B1', 'B2', 'B3'] },
  { containerId: 'C', items: ['C1', 'C2', 'C3'] },
];

type ContainerType = { containerId: UniqueIdentifier; items: UniqueIdentifier[] };

export const NestedSortable = (): JSX.Element => {
  const [activeContainerId, setActiveContainerId] = useState<UniqueIdentifier | null>(null);
  const [activeItemId, setActiveItemId] = useState<UniqueIdentifier | null>(null);
  const [containers, setContainers] = useState<ContainerType[]>(INITIAL_CONTAINERS);
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
      <SortableContext items={containers.map(({ containerId }) => containerId)} strategy={rectSortingStrategy}>
        <div className={styles.sortableItemContainer}>
          {containers.map(({ containerId }) => (
            <SortableContainer key={containerId} id={containerId} isDragging={containerId === activeContainerId}>
              <SortableContext items={findItems(containers, containerId)} strategy={rectSortingStrategy}>
                {findItems(containers, containerId).map((item) => (
                  <SortableItem key={item} id={item} isDragging={activeItemId === item} />
                ))}
              </SortableContext>
            </SortableContainer>
          ))}
        </div>
        {createPortal(
          <DragOverlay>
            {activeContainerId ? (
              <Container id={activeContainerId}>
                {findItems(containers, activeContainerId).map((item) => (
                  <SortableItem key={item} id={item} isDragging={activeContainerId === item} />
                ))}
              </Container>
            ) : activeItemId ? (
              <Item id={activeItemId} />
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </SortableContext>
    </DndContext>
  );

  function findItems(containers: ContainerType[], id: UniqueIdentifier): UniqueIdentifier[] {
    return containers.find((c) => c.containerId === id)?.items ?? [];
  }

  function handleDragStart(event: DragStartEvent): void {
    const { active } = event;

    if (isContainer(active.id)) {
      setActiveContainerId(active.id);
    } else {
      setActiveItemId(active.id);
    }
  }

  function handleDragEnd(event: DragEndEvent): void {
    const { active, over } = event;

    if (isContainer(active.id)) {
      if (over != null && active.id !== over.id) {
        setContainers((containers) => {
          const oldIndex = containers.findIndex(({ containerId }) => containerId === active.id);
          const newIndex = containers.findIndex(({ containerId }) => containerId === over.id);

          return arrayMove(containers, oldIndex, newIndex);
        });
      }
    } else {
      console.log('item');
    }

    setActiveItemId(null);
    setActiveContainerId(null);
  }

  function isContainer(id: UniqueIdentifier): boolean {
    return containers.find((c) => c.containerId === id) !== undefined;
  }
};
