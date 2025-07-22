import ThemedButton from '@/components/ThemedButton';
import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  FlatList,
  Image,
  ImageSourcePropType,
  NativeScrollEvent,
  NativeSyntheticEvent,
  useWindowDimensions,
} from 'react-native';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/images/slides/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/images/slides/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/images/slides/slide-3.png'),
  },
];

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [isEnabled, setisEnabled] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);
    setcurrentIndex(currentIndex > 0 ? currentIndex : 0);
    if (currentIndex === items.length - 1) {
      setisEnabled(true);
    }
  };

  return (
    <ThemedView>
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        horizontal
        pagingEnabled
        scrollEnabled={isEnabled}
        onScroll={onScroll}
        renderItem={({ item }) => <SlideItem item={item} />}
      />
      {currentIndex === items.length - 1 ? (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          children="Finalizar"
          onPress={() => {
            router.dismiss();
          }}
        />
      ) : (
        <ThemedButton
          className="absolute bottom-10 right-5 w-[150px]"
          children="Siguiente"
          onPress={() =>
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true })
          }
        />
      )}
    </ThemedView>
  );
};
export default SlidesScreen;

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width, height } = useWindowDimensions();

  return (
    <ThemedView className="flex-1 rounded p-10 justify-center" style={{ width }}>
      <Image
        source={item.img}
        style={{
          height: width * 0.7,
          width: width * 0.7,
          resizeMode: 'center',
          alignSelf: 'center',
        }}
      />
      <ThemedText className="text-2xl font-semibold text-light-primary dark:text-dark-primary">
        {item.title}
      </ThemedText>
      <ThemedText className="text-light-primary dark:text-dark-primary">{item.desc}</ThemedText>
    </ThemedView>
  );
};
