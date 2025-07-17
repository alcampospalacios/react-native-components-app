import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';
import { View, ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  className?: string;
  safe?: boolean;
  backgroundColor?: string;
  children: React.ReactNode;
  margin?: number;
  center?: boolean;
}

const ThemedView = ({
  style,
  className,
  safe = false,
  center = false,
  children,
  backgroundColor,
  margin = 0,
}: Props) => {
  const bgColor = backgroundColor ?? useThemeColor({}, 'background');
  const safeAre = useSafeAreaInsets();

  // TODO: Usar className o estilos no usar los dos juntos, fue a modo de aprendizaje

  return (
    // <View className="bg-light-background dark:bg-dark-background flex-1 justify-center items-center">
    <View
      style={[
        {
          paddingTop: safe ? safeAre.top : 0,
          marginHorizontal: margin,
        },
        style,
      ]}
      className={[
        center ? 'flex-1 justify-center items-center' : '',
        'bg-light-background dark:bg-dark-background flex-1',
        className,
      ].join(' ')}
    >
      {children}
    </View>
  );
};

export default ThemedView;
