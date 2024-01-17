import { JSX } from 'react';

import { useBearStore } from '~/featuers/ZustandDemo/store';

export function BearControls(): JSX.Element {
  const increase = useBearStore((state) => state.increase);

  return <button onClick={() => increase(1)}>one up</button>;
}
