import { JSX } from 'react';

import { useBearStore } from '~/featuers/ZustandDemo/store';

export function BearCounter(): JSX.Element {
  const bears = useBearStore((state) => state.bears);

  return <h1>{bears} 🐻 around here ...</h1>;
}
