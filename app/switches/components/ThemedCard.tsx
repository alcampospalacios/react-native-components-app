import React from 'react';
import { View } from 'react-native';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const ThemedCard = ({ className, children }: Props) => {
  return (
    <View
      className={`bg-white dark:bg-black/10 rounded-xl p-5 shadow shadow-black/5 ${className}}`}
    >
      {children}
    </View>
  );
};

export default ThemedCard;
