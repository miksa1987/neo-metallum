import React from 'react';
import { Swipeable } from 'react-swipeable';

interface Props {
  incrementPageCounter: () => void
  decrementPageCounter: () => void
}

export const SwipeablePage: React.FC<Props> = ({ incrementPageCounter, decrementPageCounter, children }) => {
  return (
    <Swipeable
      onSwipedRight={decrementPageCounter}
      onSwipedLeft={incrementPageCounter}
    >
      {children}
    </Swipeable>
  );
}