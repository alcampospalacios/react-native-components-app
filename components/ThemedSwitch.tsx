import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { Platform, Switch, View } from 'react-native';
import ThemedText from './ThemedText';

interface Props {
  text?: string;
  value?: boolean;
  className?: string;
  onValueChange?: (value: boolean) => void;
}

const ThemedSwitch = ({ text, value, className, onValueChange }: Props) => {
  const isAndroid = Platform.OS === 'android';
  const primaryColor = useThemeColor({}, 'primary');

  return (
    <View className={['flex flex-row items-center justify-between', className].join(' ')}>
      {text ? <ThemedText className="text-xl">{text}</ThemedText> : <View />}
      <Switch
        value={value}
        onValueChange={onValueChange}
        thumbColor={isAndroid ? primaryColor : undefined}
        // ios_backgroundColor={primaryColor}
        trackColor={{
          false: 'gray',
          true: primaryColor,
        }}
      />
    </View>
  );
};

export default ThemedSwitch;
