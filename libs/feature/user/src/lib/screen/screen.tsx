import { StyleSheet, Text, View } from 'react-native';
import { createParam } from 'solito';
import { TextLink } from 'solito/link';

const { useParam } = createParam<{ id: string }>();

/* eslint-disable-next-line */
export interface ScreenProps {}

export function Screen(props: ScreenProps) {
  const [id] = useParam('id');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`User ID: ${id}`}</Text>
      <TextLink href="/">Go Home</TextLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 16,
  },
});
