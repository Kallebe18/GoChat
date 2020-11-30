import React, { useCallback, useRef, useState } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Easing } from 'react-native-reanimated';

const Loader: React.FC = () => {
  const animatedCircular = useRef<AnimatedCircularProgress>(null);
  const [fill, setFill] = useState(100);

  return (
    <AnimatedCircularProgress
      ref={animatedCircular}
      size={120}
      width={15}
      fill={fill}
      tintColor="#00e0ff"
      onAnimationComplete={() => setFill(100)}
      backgroundColor="#3d5875" />
  );
}

export default Loader;
