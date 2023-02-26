import { BeforeAfterByFlex } from '~/components/BeforeAfterByFlex';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

export function App() {
  return (
    <ScreenCenterPlaced>
      <BeforeAfterByFlex decorationGap="gap-lg" />
    </ScreenCenterPlaced>
  );
}
