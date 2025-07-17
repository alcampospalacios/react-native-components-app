import ThemedView from '@/components/ThemedView';
import { useAnimations } from '@/hooks/useAnimations';
import React from 'react';
import { Animated } from 'react-native';

const Animation102Screen = () => {
  const { pan, panResponder } = useAnimations();

  return (
    <ThemedView center>
      <Animated.View
        {...panResponder.panHandlers}
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl w-[150px] h-[150px]"
        style={[pan.getLayout()]}
      />
    </ThemedView>
  );
};
export default Animation102Screen;
