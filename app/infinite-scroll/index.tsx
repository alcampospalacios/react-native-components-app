import FadeInImage from '@/components/FadeInImage';
import ThemedView from '@/components/ThemedView';
import { useState } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  const loadMore = () => {
    const newArray = Array.from({ length: 10 }, (_, index) => numbers.length + (index + 1));

    setNumbers([...numbers, ...newArray]);
  };

  return (
    <ThemedView>
      <FlatList
        data={numbers}
        renderItem={({ item }) => <ListItem number={item} />}
        keyExtractor={(item) => item.toString()}
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
        ListFooterComponent={() => (
          <View className="flex justify-center items-center my-20">
            <ActivityIndicator />
          </View>
        )}
      />
    </ThemedView>
  );
};
export default InfiniteScrollScreen;

interface ListItemProps {
  number: number;
}

const ListItem = ({ number }: ListItemProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/500/400`}
      style={{ height: 400, width: '100%' }}
    />
  );
};
