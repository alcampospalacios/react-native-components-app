import { useRef } from 'react';
import { Animated, Easing, PanResponder } from 'react-native';

export const useAnimations = () => {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTopToBottom = useRef(new Animated.Value(0)).current;

  const fadeIn = ({ duration = 300, toValue = 1 }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = ({ duration = 300, toValue = 0 }) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(() => animatedTopToBottom.resetAnimation());
    // }).start(() => animatedTopToBottom.setValue(-150));
  };

  const moveFromUpToBottom = ({
    initialPosition = -100,
    duration = 700,
    toValue = 0,
    easing = Easing.bounce,
  }) => {
    animatedTopToBottom.setValue(initialPosition);
    return Animated.timing(animatedTopToBottom, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
      easing: easing,
    }).start();
  };

  // Animation 02 - Dragg
  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x, // x,y are Animated.Value
          dy: pan.y,
        },
      ],
      { useNativeDriver: false },
    ),
    onPanResponderRelease: () => {
      Animated.spring(
        pan, // Auto-multiplexed
        { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
      ).start();
    },
  });

  return {
    animatedOpacity,
    animatedTopToBottom,
    fadeIn,
    fadeOut,
    moveFromUpToBottom,
    pan,
    panResponder,
  };
};
