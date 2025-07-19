import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { Link } from 'expo-router';

const ModalScreen = () => {
  return (
    <ThemedView center>
      <Link href="/modal/modal-window">
        <ThemedText className="text-2xl font-semibold text-light-primary dark:text-dark-primary">
          Open modal
        </ThemedText>
      </Link>
    </ThemedView>
  );
};
export default ModalScreen;
