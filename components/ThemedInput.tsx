import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface Props extends TextInputProps {
  onChangeText: (text: string) => void;
}

const ThemedInput = ({ onChangeText, className, ...rest }: Props) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      {...rest}
      className={['text-black dark:text-white', className].join(' ')}
      placeholderTextColor={'gray'}
    />
  );
};

export default ThemedInput;
