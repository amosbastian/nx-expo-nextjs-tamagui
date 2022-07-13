import { StyleSheet, Text, View } from 'react-native';

/* eslint-disable-next-line */
export interface ScreenProps {}

export function Screen(props: ScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
