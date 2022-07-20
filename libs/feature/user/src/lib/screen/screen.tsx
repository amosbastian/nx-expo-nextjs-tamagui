import { Button, Paragraph, YStack } from '@nx-expo-nextjs/ui';
import { createParam } from 'solito';
import { Link } from 'solito/link';

const { useParam } = createParam<{ id: string }>();

/* eslint-disable-next-line */
export interface ScreenProps {}

export function Screen(props: ScreenProps) {
  const [id] = useParam('id');

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space>
      <Paragraph
        textAlign="center"
        fontWeight="800"
      >{`User ID: ${id}`}</Paragraph>
      <Link href="/">
        <Button>Go Home</Button>
      </Link>
    </YStack>
  );
}
