import ThemedButton from '@/components/ThemedButton';
import ThemedView from '@/components/ThemedView';
import { useAnimations } from '@/hooks/useAnimations';
import { Animated } from 'react-native';

const Animation101Screen = () => {
  const { animatedOpacity, animatedTopToBottom, fadeIn, fadeOut, moveFromUpToBottom } =
    useAnimations();

  return (
    <ThemedView center>
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl w-[150px] h-[150px]"
        style={{ opacity: animatedOpacity, transform: [{ translateY: animatedTopToBottom }] }}
      />

      <ThemedButton
        className="mb-5 mt-5"
        onPress={() => {
          fadeIn({});
          moveFromUpToBottom({});
        }}
      >
        FadeIn
      </ThemedButton>
      <ThemedButton className="mb-5" onPress={() => fadeOut({})}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
