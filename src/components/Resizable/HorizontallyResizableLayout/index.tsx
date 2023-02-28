import { useEffect, useRef } from 'react';

import styles from './index.module.css';

import { ResizeBoundaryDivider } from '~/components/Resizable/ResizeBoundaryDivider';

const ASIDE_MIN_SIZE = 200;
const ASIDE_MAX_SIZE = 500;

const defaultAside = (
  <div
    style={{
      display: 'grid',
      width: '100%',
      height: '100vh',
      placeContent: 'center',
      fontSize: '2rem',
      backgroundColor: '#C6F6D5',
    }}
  >
    Aside
  </div>
);

const defaultMain = (
  <div
    style={{
      display: 'grid',
      width: '100%',
      height: '100vh',
      placeContent: 'center',
      fontSize: '2rem',
      backgroundColor: '#E9D8FD',
    }}
  >
    Main
  </div>
);

interface Props {
  aside?: JSX.Element;
  main?: JSX.Element;
}

export const HorizontallyResizableLayout = ({ aside = defaultAside, main = defaultMain }: Props): JSX.Element => {
  const isPointerPressedRef = useRef(false);
  const asideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 各リスナーはリサイズ中にバーからカーソルがずれても効くようにドキュメント全体に張る
    const pointerUpListener = () => (isPointerPressedRef.current = false);
    document.addEventListener('pointerup', pointerUpListener);

    const pointerMoveListener = (event: PointerEvent) => {
      const x = event.x;

      if (isPointerPressedRef.current && asideRef.current !== null) {
        if (x < ASIDE_MIN_SIZE) {
          asideRef.current.style.width = `${ASIDE_MIN_SIZE}px`;
        } else if (x > ASIDE_MAX_SIZE) {
          asideRef.current.style.width = `${ASIDE_MAX_SIZE}px`;
        } else {
          asideRef.current.style.width = `${x}px`;
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
      <aside ref={asideRef}>{aside}</aside>
      <ResizeBoundaryDivider onPointerDown={() => (isPointerPressedRef.current = true)} />
      <main>{main}</main>
    </div>
  );
};
