import { useThemeChanger } from '@/components/context/ThemedContextChanger';
import ThemedCard from '@/components/ThemedCard';
import ThemedSwitch from '@/components/ThemedSwitch';
import ThemedView from '@/components/ThemedView';
import { useState } from 'react';
// import { useColorScheme } from 'react-native';

const ThemesScreen = () => {
  // const theme = useColorScheme();
  // const { colorScheme, setColorScheme } = useColorScheme();
  const { toggleTheme, currentTheme, setSystemTheme, isSystemTheme } = useThemeChanger();
  console.log(currentTheme);
  console.log(isSystemTheme);

  const [isDarkThemeActive, setIsDarkThemeActive] = useState(
    currentTheme === 'dark' ? true : false,
  );
  const [isSystemModeActive, setIsSystemMode] = useState(isSystemTheme);

  const toogleSystemMode = () => {
    setIsSystemMode(!isSystemModeActive);
    setSystemTheme();
  };

  const toogleDarkMode = () => {
    setIsDarkThemeActive(!isDarkThemeActive);
    toggleTheme();
  };

  return (
    <ThemedView>
      <ThemedCard>
        <ThemedSwitch
          onValueChange={() => toogleDarkMode()}
          value={isDarkThemeActive}
          text="Modo oscuro"
        />
        <ThemedSwitch
          className="mt-5"
          onValueChange={() => toogleSystemMode()}
          value={isSystemModeActive}
          text="Modo sistema"
        />
      </ThemedCard>
    </ThemedView>
  );
};
export default ThemesScreen;
