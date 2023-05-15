import { useState } from 'react';

import GridLayout from 'react-grid-layout';

import styles from './index.module.css';
import './react-grid-layout.css';
import './react-resizable.css';

const layout = [
  { i: 'a', x: 0, y: 0, w: 1, h: 2, static: true },
  { i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'c', x: 4, y: 0, w: 1, h: 2 },
];

export function ReactGridLayoutDemo(): JSX.Element {
  const { selectDisabled, enableSelect, disableSelect } = useSelectHandle();

  return (
    <GridLayout
      className={`layout ${styles['grid-layout']}`}
      layout={layout}
      cols={10}
      rowHeight={30}
      width={920}
      onResizeStart={disableSelect}
      onResizeStop={enableSelect}
      onDragStart={disableSelect}
      onDragStop={enableSelect}
    >
      <div key="a" className={`${styles['grid-item']} ${selectDisabled ? styles['select-none'] : undefined}`}>
        a
      </div>
      <div key="b" className={`${styles['grid-item']} ${selectDisabled ? styles['select-none'] : undefined}`}>
        b
      </div>
      <div key="c" className={`${styles['grid-item']} ${selectDisabled ? styles['select-none'] : undefined}`}>
        c
      </div>
    </GridLayout>
  );
}

function useSelectHandle(): { selectDisabled: boolean; enableSelect: () => void; disableSelect: () => void } {
  const [selectDisabled, setSelectDisabled] = useState(false);
  const enableSelect = (): void => setSelectDisabled(false);
  const disableSelect = (): void => setSelectDisabled(true);

  return { selectDisabled, enableSelect, disableSelect };
}
