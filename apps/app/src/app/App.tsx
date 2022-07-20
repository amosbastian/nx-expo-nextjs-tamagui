import { NativeNavigation } from '@nx-expo-nextjs/navigation/native';
import { Provider } from '@nx-expo-nextjs/shared/provider';
import React from 'react';
import { useFonts } from 'expo-font';

const App = () => {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/ttf/Inter.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider>
      <NativeNavigation />
    </Provider>
  );
};

export default App;
