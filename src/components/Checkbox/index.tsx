import { Flex } from '@chakra-ui/react';

import styles from '~/components/Checkbox/index.module.css';
import { ScreenCenterPlaced } from '~/components/ScreenCenterPlaced';

interface Props {
  accentColor?: 'blue' | 'pink' | 'green' | 'purple';
}

export const Checkbox = ({ accentColor = 'blue' }: Props): JSX.Element => {
  return (
    <ScreenCenterPlaced>
      <Flex gap={10}>
        <input type="checkbox" className={styles[accentColor]} />
      </Flex>
    </ScreenCenterPlaced>
  );
};
