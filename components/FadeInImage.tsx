import { useAnimations } from '@/hooks/useAnimations';
import { useThemeColor } from '@/hooks/useThemeColor';
import React, { useState } from 'react';
import { ActivityIndicator, Animated, ImageStyle, StyleProp, View } from 'react-native';

interface Props {
  className?: string;
  uri?: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ className, uri, style }: Props) => {
  const { animatedOpacity, fadeIn } = useAnimations();

  const primaryColor = useThemeColor({}, 'primary');

  const [isLoading, setIsLoading] = useState(true);

  const onLoadEnd = () => {
    setIsLoading(false);
    fadeIn({});
  };

  return (
    <View className="flex justify-center items-center">
      {isLoading && <ActivityIndicator color="gray" size={30} style={{ position: 'absolute' }} />}
      <Animated.Image
        source={{
          uri: uri,
        }}
        style={[style, { opacity: animatedOpacity }]}
        onLoadEnd={onLoadEnd}
      />
    </View>
  );
};

export default FadeInImage;

{
  /* <View className="flex justify-center items-center">
      {!isImageLoaded && <ActivityIndicator color={primaryColor} />}

      <Image
        source={{
          uri: uri,
        }}
        style={[style]}
        onLoadEnd={onLoadEnd}
      />
    </View> */
}
