import React from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  className?: string;
  children: React.ReactNode;
}

const ThemedText = ({ className, ...rest }: Props) => {
  return (
    // <Text className="text-light-text dark:text-dark-text " {...rest}>
    <Text className={['text-light-text', 'dark:text-dark-text', className].join(' ')} {...rest} />
  );
};

export default ThemedText;
