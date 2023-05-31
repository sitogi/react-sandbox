import { UniqueIdentifier } from '@dnd-kit/core';

export function toSplit(itemIdWithPrefix: UniqueIdentifier): {
  containerId: UniqueIdentifier;
  itemId: UniqueIdentifier;
} {
  const split = (itemIdWithPrefix as string).split('::'); // REVISIT: イマイチ

  return { containerId: split[0], itemId: split[1] };
}
