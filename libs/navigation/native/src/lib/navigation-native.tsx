import { Screen as HomeScreen } from '@nx-expo-nextjs/feature/home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<{
  home: undefined;
  'user-detail': {
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
      {/* <Stack.Screen
        name="user-detail"
        component={UserDetailScreen}
        options={{
          title: 'User',
        }}
      /> */}
    </Stack.Navigator>
  );
}
