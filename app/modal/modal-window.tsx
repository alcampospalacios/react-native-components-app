import ThemedButton from '@/components/ThemedButton';
import ThemedView from '@/components/ThemedView';
import { router } from 'expo-router';
import React from 'react';

const ModalScreen = () => {
  return (
    <ThemedView center>
      <ThemedButton
        onPress={() => {
          router.push('/modal/modal-window-sub');
        }}
      >
        Otro modal
      </ThemedButton>
    </ThemedView>
  );
};

export default ModalScreen;
