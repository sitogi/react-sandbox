import { JSX, useEffect, useRef } from 'react';

import styles from './index.module.css';

import { ResizeBoundaryDivider } from '~/featuers/Resizable/ResizeBoundaryDivider';

const ASIDE_MIN_SIZE = 200;
const ASIDE_MAX_SIZE = 500;

type Props = {
  aside: JSX.Element;
  main: JSX.Element;
};

export const HorizontallyResizableLayout = ({ aside, main }: Props): JSX.Element => {
  const isPointerPressedRef = useRef(false);
  const asideRef = useRef<HTMLDivElement>(null);

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
      if (isPointerPressedRef.current && asideRef.current !== null) {
        const pointerX = event.x;
        const clientLeft = asideRef.current.getBoundingClientRect().left;
        const newWidth = pointerX - clientLeft;

        if (newWidth < ASIDE_MIN_SIZE) {
          asideRef.current.style.width = `${ASIDE_MIN_SIZE}px`;
        } else if (newWidth > ASIDE_MAX_SIZE) {
          asideRef.current.style.width = `${ASIDE_MAX_SIZE}px`;
        } else {
          asideRef.current.style.width = `${newWidth}px`;
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
      entireScreen.style.cursor = 'ew-resize';
    }
    isPointerPressedRef.current = true;
  };

  return (
    <div className={styles.container}>
      <aside ref={asideRef}>{aside}</aside>
      <ResizeBoundaryDivider onPointerDown={onPointerDown} resizeDirection="horizontal" />
      <main>{main}</main>
    </div>
  );
};
