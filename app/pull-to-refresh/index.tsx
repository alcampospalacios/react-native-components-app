import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useState } from 'react';
import { RefreshControl, ScrollView } from 'react-native';

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, 'primary');
  const [isLoading, setLoading] = useState(false);

  const onRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} colors={[primaryColor]} />
      }
    >
      <ThemedView center>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
