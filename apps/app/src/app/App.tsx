import { NativeNavigation } from '@nx-expo-nextjs/navigation/native';
import { NavigationProvider } from '@nx-expo-nextjs/provider/navigation';
import React from 'react';

const App = () => {
  return (
    <NavigationProvider>
      <NativeNavigation />
    </NavigationProvider>
  );
};

export default App;
