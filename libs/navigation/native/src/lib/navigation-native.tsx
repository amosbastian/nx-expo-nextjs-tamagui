import { Screen as HomeScreen } from '@nx-expo-nextjs/feature/home';
import { Screen as UserScreen } from '@nx-expo-nextjs/feature/user';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<{
  home: undefined;
  user: {
    id: string;
  };
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user"
        component={UserScreen}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  );
}
