import { Stack } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

const ModalLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: Platform.OS === 'ios' ? 'modal' : 'formSheet',
        }}
      />
      <Stack.Screen
        name="modal-window-sub"
        options={{
          presentation: Platform.OS === 'ios' ? 'modal' : 'formSheet',
        }}
      />
    </Stack>
  );
};

export default ModalLayout;
