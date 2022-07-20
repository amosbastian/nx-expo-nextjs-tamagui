import { Button, Paragraph, YStack } from '@nx-expo-nextjs/ui';
import { ChevronLeft } from '@tamagui/feather-icons';
import { createParam } from 'solito';
import { useLink } from 'solito/link';

const { useParam } = createParam<{ id: string }>();

/* eslint-disable-next-line */
export interface ScreenProps {}

export function Screen(props: ScreenProps) {
  const [id] = useParam('id');

  const linkProps = useLink({
    href: '/',
    as: '/',
    shallow: false,
  });

  return (
    <YStack flex={1} justifyContent="center" alignItems="center" space>
      <Paragraph
        textAlign="center"
        fontWeight="800"
      >{`User ID: ${id}`}</Paragraph>
      <Button icon={ChevronLeft} {...linkProps}>
        Go home
      </Button>
    </YStack>
  );
}
