import MenuItem from '@/components/MenuItem';
import ThemedView from '@/components/ThemedView';
import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import { View } from 'react-native';
const ComponentsApp = () => {
  return (
    <ThemedView margin={10}>
      {animationMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}

      <View className="my-5"></View>

      {uiMenuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}
      <View className="my-5"></View>
      {menuRoutes.map((route, index) => (
        <MenuItem
          key={route.title}
          title={route.title}
          icon={route.icon}
          name={route.name}
          isFirst={index === 0}
          isLast={index === animationMenuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};
export default ComponentsApp;
