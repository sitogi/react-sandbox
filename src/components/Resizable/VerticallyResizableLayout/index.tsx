import { useEffect, useRef } from 'react';

import styles from './index.module.css';

import { ResizeBoundaryDivider } from '~/components/Resizable/ResizeBoundaryDivider';

const FIRST_AREA_MIN_SIZE = 200;
const FIRST_AREA_MAX_SIZE = 600;

const defaultUp = (
  <div
    style={{
      display: 'grid',
      width: '100%',
      height: '100%',
      placeContent: 'center',
      fontSize: '2rem',
    }}
  >
    Up{' '}
  </div>
);

const defaultBottom = (
  <div
    style={{
      display: 'grid',
      width: '100%',
      height: '100%',
      placeContent: 'center',
      fontSize: '2rem',
    }}
  >
    Bottom{' '}
  </div>
);

interface Props {
  up?: JSX.Element;
  bottom?: JSX.Element;
}

export const VerticallyResizableLayout = ({ up = defaultUp, bottom = defaultBottom }: Props): JSX.Element => {
  const isPointerPressedRef = useRef(false);
  const resizeTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 各リスナーはリサイズ中にバーからカーソルがずれても効くようにドキュメント全体に張る
    const onPointerUp = () => {
      const entireScreen = document.body.parentElement;
      if (entireScreen) {
        entireScreen.style.cursor = 'auto';
      }
      isPointerPressedRef.current = false;
    };
    document.addEventListener('pointerup', onPointerUp);

    const onPointerMove = (event: PointerEvent) => {
      if (isPointerPressedRef.current && resizeTargetRef.current !== null) {
        const pointerY = event.y;
        const clientTop = resizeTargetRef.current.getBoundingClientRect().top;
        const newHeight = pointerY - clientTop;

        if (newHeight < FIRST_AREA_MIN_SIZE) {
          resizeTargetRef.current.style.height = `${FIRST_AREA_MIN_SIZE}px`;
        } else if (newHeight > FIRST_AREA_MAX_SIZE) {
          resizeTargetRef.current.style.height = `${FIRST_AREA_MAX_SIZE}px`;
        } else {
          resizeTargetRef.current.style.height = `${newHeight}px`;
        }
      }
    };
    document.addEventListener('pointermove', onPointerMove);

    return () => {
      document.removeEventListener('pointerup', onPointerUp);
      document.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  const onPointerDown = () => {
    const entireScreen = document.body.parentElement;
    if (entireScreen) {
      entireScreen.style.cursor = 'row-resize';
    }
    isPointerPressedRef.current = true;
  };

  return (
    <div className={styles.container}>
      <div className={styles.resizable} ref={resizeTargetRef}>
        {up}
      </div>
      <ResizeBoundaryDivider onPointerDown={onPointerDown} resizeDirection="vertical" />
      <div className={styles.bottom}>{bottom}</div>
    </div>
  );
};
