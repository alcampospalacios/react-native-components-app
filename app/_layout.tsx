import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';

import { allRoutes } from '@/constants/Routes';

import { useThemeColor } from '@/hooks/useThemeColor';

import { ThemeChangerProvider } from '@/components/context/ThemedContextChanger';
import '../global.css';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const colorScheme = useColorScheme();
  const backgroundColor = useThemeColor({}, 'background');

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ backgroundColor: backgroundColor, flex: 1 }}>
      <ThemeChangerProvider>
        {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <Stack
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            },
            headerStyle: {
              backgroundColor: backgroundColor,
            },
          }}
        >
          <Stack.Screen name="index" options={{ title: 'Inicio' }} />
          {allRoutes.map((route) => (
            <Stack.Screen
              key={route.name}
              name={route.name}
              options={{ title: route.title, headerShown: route.name !== 'slides/index' }}
            />
          ))}
        </Stack>
      </ThemeChangerProvider>
      {/* </ThemeProvider> */}
    </GestureHandlerRootView>
  );
}
