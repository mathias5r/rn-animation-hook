import React from 'react';
import { Animated } from 'react-native';
import { useAnimation } from './hook';

const AnimatedComponent = ({ doAnimation }) => {
  const animation = useAnimation({ doAnimation, duration: 1000 });
  return (
    <Animated.View style={{
      width: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 100],
      }),
      height: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 100],
      }),
      backgroundColor: `red`
    }} /> 
  )
}

export default AnimatedComponent;