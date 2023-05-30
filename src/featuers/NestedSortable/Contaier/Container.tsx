import { CSSProperties, forwardRef, ReactNode } from 'react';

import { DraggableAttributes, UniqueIdentifier } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import styles from './Container.module.css';

type Props = {
  children: ReactNode;
  id: UniqueIdentifier;
  style?: CSSProperties;
  attributes?: DraggableAttributes;
  listeners?: SyntheticListenerMap | undefined;
};

export const Container = forwardRef<HTMLDivElement, Props>(function Container({ id, ...props }, ref) {
  return (
    <div ref={ref} className={styles.item} style={props.style} {...props.attributes} {...props.listeners}>
      <p>{id}</p>
      {props.children}
    </div>
  );
});
