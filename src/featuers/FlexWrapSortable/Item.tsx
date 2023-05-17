import { CSSProperties, forwardRef } from 'react';

import { DraggableAttributes, UniqueIdentifier } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';

import styles from './Item.module.css';

type Props = {
  id: UniqueIdentifier;
  style?: CSSProperties;
  attributes?: DraggableAttributes;
  listeners?: SyntheticListenerMap | undefined;
};

// eslint-disable-next-line react/display-name
export const Item = forwardRef<HTMLDivElement, Props>(({ id, ...props }, ref) => {
  return (
    <div ref={ref} className={styles.item} style={props.style} {...props.attributes} {...props.listeners}>
      <p>{id}</p>
    </div>
  );
});
