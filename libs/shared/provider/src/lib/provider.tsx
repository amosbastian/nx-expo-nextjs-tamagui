import {
  tamaguiConfiguration as Tamagui,
  TamaguiProviderProps,
} from '@nx-expo-nextjs/ui';
import { NavigationProvider } from './navigation';

export function Provider({ children, ...rest }: TamaguiProviderProps) {
  return (
    <Tamagui.Provider disableInjectCSS defaultTheme="light" {...rest}>
      <NavigationProvider>{children}</NavigationProvider>
    </Tamagui.Provider>
  );
}
