import { Animated } from 'react-native';
import { useState, useEffect } from 'react';

export const useAnimation = ({ doAnimation, duration }) => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  
  useEffect(() => {
    console.log(`running useEffect:`, doAnimation );
    Animated.timing(animation, {
      toValue: doAnimation ? 1 : 0,
      duration,
    }).start();
  }, [doAnimation]);

  return animation;
}