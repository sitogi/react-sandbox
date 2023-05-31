import { useState } from 'react';

import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  KeyboardSensor,
  PointerSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { produce } from 'immer';
import { createPortal } from 'react-dom';

import { Container } from './Contaier/Container';
import { SortableContainer } from './Contaier/SortableContainer';

import { Item } from '~/featuers/NestedSortable/Item/Item';

import styles from './index.module.css';

import { SortableItem } from '~/featuers/NestedSortable/Item/SortableItem';
import { toSplit } from '~/featuers/NestedSortable/utils';

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
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={containers.map(({ containerId }) => containerId)} strategy={rectSortingStrategy}>
        <div className={styles.sortableItemContainer}>
          {containers.map(({ containerId }) => (
            <SortableContainer key={containerId} id={containerId} isDragging={containerId === activeContainerId}>
              <SortableContext items={getItemIdsWithPrefix(containers, containerId)} strategy={rectSortingStrategy}>
                {getItemIdsWithPrefix(containers, containerId).map((item) => (
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
                {getItemIdsWithPrefix(containers, activeContainerId).map((item) => (
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

  function getItemIdsWithPrefix(containers: ContainerType[], containerId: UniqueIdentifier): UniqueIdentifier[] {
    const ids = containers.find((c) => c.containerId === containerId)?.items ?? [];

    return ids.map((id) => `${containerId}::${id}`);
  }

  function handleDragStart(event: DragStartEvent): void {
    const { active } = event;

    if (isContainer(active.id)) {
      setActiveContainerId(active.id);
    } else {
      setActiveItemId(active.id);
    }
  }

  function handleDragOver(event: DragOverEvent): void {
    const { active, over } = event;

    console.log({ active: active.id, over: over?.id });
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
      if (over != null) {
        const a = toSplit(active.id);
        const o = toSplit(over.id);

        if (a.containerId === o.containerId) {
          console.log('same container');

          if (a.itemId === o.itemId) {
            setActiveItemId(null);
            setActiveContainerId(null);
            return;
          }

          setContainers((containers) => {
            const containerIdx = containers.findIndex((c) => c.containerId === o.containerId);
            const oldItems = containers[containerIdx].items;
            const oldIndex = oldItems.findIndex((id) => id === a.itemId);
            const newIndex = oldItems.findIndex((id) => id === o.itemId);

            return produce(containers, (draft) => {
              draft[containerIdx].items = arrayMove(oldItems, oldIndex, newIndex);
            });
          });
        } else {
          console.log('other container');
        }
      }
    }

    setActiveItemId(null);
    setActiveContainerId(null);
  }

  function isContainer(id: UniqueIdentifier): boolean {
    return containers.find((c) => c.containerId === id) !== undefined;
  }
};
