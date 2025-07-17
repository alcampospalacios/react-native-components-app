import React from 'react';
import { View } from 'react-native';

interface Props {
  className?: string;
}

const ThemedSizedBox = ({ className }: Props) => {
  return <View className={['my-5', className].join(' ')}></View>;
};

export default ThemedSizedBox;
