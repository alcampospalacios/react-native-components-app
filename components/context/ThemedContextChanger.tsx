import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'nativewind';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

interface ThemeChangerContextType {
  currentTheme: 'light' | 'dark';
  isSystemTheme: boolean;
  toggleTheme: () => void;
  setSystemTheme: () => void;
}

const ThemedContextChanger = createContext<ThemeChangerContextType>({} as ThemeChangerContextType);

export const useThemeChanger = () => {
  const themeChanger = useContext(ThemedContextChanger);

  return themeChanger;
};

export const ThemeChangerProvider = ({ children }: PropsWithChildren) => {
  const { colorScheme, setColorScheme } = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');
  const [isSystemEnabled, setIsSystemEnabled] = useState(colorScheme === undefined);

  const currentTheme = isSystemEnabled ? colorScheme : isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    AsyncStorage.getItem('theme').then((theme) => {
      if (!theme) return;
      setIsDarkMode(theme === 'dark');
      setIsSystemEnabled(theme === 'system');
      setColorScheme(theme as 'dark' | 'light' | 'system');
    });
  }, []);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <ThemedContextChanger.Provider
        value={{
          currentTheme: currentTheme ?? 'light',
          isSystemTheme: isSystemEnabled,
          toggleTheme: async () => {
            setIsDarkMode(!isDarkMode);
            setColorScheme(!isDarkMode ? 'dark' : 'light');
            setIsSystemEnabled(false);

            await AsyncStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
          },
          setSystemTheme: async () => {
            setIsSystemEnabled(true);
            setColorScheme('system');
            await AsyncStorage.setItem('theme', 'system');
          },
        }}
      >
        {children}
      </ThemedContextChanger.Provider>
    </ThemeProvider>
  );
};
