import { useEffect, useRef } from 'react';

import styles from './index.module.css';

import { ResizeBoundaryDivider } from '~/components/Resizable/ResizeBoundaryDivider';

const HEADER_SIZE = 80;
const FIRST_AREA_MIN_SIZE = 200;
const FIRST_AREA_MAX_SIZE = 800;

export const VerticallyResizableLayout = (): JSX.Element => {
  const isPointerPressedRef = useRef(false);
  const resizeTargetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 各リスナーはリサイズ中にバーからカーソルがずれても効くようにドキュメント全体に張る
    const pointerUpListener = () => (isPointerPressedRef.current = false);
    document.addEventListener('pointerup', pointerUpListener);

    const pointerMoveListener = (event: PointerEvent) => {
      const y = event.y;

      if (isPointerPressedRef.current && resizeTargetRef.current !== null) {
        if (y < FIRST_AREA_MIN_SIZE) {
          resizeTargetRef.current.style.height = `${FIRST_AREA_MIN_SIZE - HEADER_SIZE}px`;
        } else if (y > FIRST_AREA_MAX_SIZE) {
          resizeTargetRef.current.style.height = `${FIRST_AREA_MAX_SIZE - HEADER_SIZE}px`;
        } else {
          resizeTargetRef.current.style.height = `${y - HEADER_SIZE}px`;
        }
      }
    };
    document.addEventListener('pointermove', pointerMoveListener);

    return () => {
      document.removeEventListener('pointerup', pointerUpListener);
      document.removeEventListener('pointermove', pointerMoveListener);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>App Title</div>
      <div className={styles.resizable} ref={resizeTargetRef}>
        Category A
      </div>
      <ResizeBoundaryDivider onPointerDown={() => (isPointerPressedRef.current = true)} isVertical />
      <div className={styles.bottom}>Category B</div>
    </div>
  );
};
