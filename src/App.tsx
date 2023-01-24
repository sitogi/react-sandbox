import { VerticallyResizableLayout } from '~/components/Resizable/VerticallyResizableLayout';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

export function App() {
  return (
    <ScreenCenterPlaced>
      <VerticallyResizableLayout />
    </ScreenCenterPlaced>
  );
}
