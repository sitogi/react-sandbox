import { HorizontallyResizableLayout } from '~/featuers/Resizable/HorizontallyResizableLayout';
import { WithHeaderLayout } from '~/featuers/WithHeaderLayout';

export function App() {
  return (
    <WithHeaderLayout
      header={
        <div style={{ display: 'grid', placeContent: 'center', height: '100%', borderBottom: 'solid 2px gray' }}>
          <p style={{ fontSize: '2rem' }}>header</p>
        </div>
      }
      content={<HorizontallyResizableLayout />}
    />
  );
}
