import React from 'react';
import { View, ViewProps } from 'react-native';

interface Props extends ViewProps {
  className?: string;
  children?: React.ReactNode;
}

const ThemedCard = ({ className, children, ...rest }: Props) => {
  return (
    <View
      className={['bg-white dark:bg-black/10 rounded-xl p-5 shadow shadow-black/5', className].join(
        ' ',
      )}
      {...rest}
    >
      {children}
    </View>
  );
};

export default ThemedCard;
