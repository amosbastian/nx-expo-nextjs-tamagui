import {
  Anchor,
  Button,
  H1,
  Paragraph,
  Separator,
  SharedUi,
  XStack,
  YStack,
} from '@nx-expo-nextjs/ui';
import { useLink } from 'solito/link';

/* eslint-disable-next-line */
export interface ScreenProps {}

export function Screen(props: ScreenProps) {
  const linkProps = useLink({
    href: '/user/amos',
  });

  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      padding="$4"
      space
    >
      <YStack space="$4" maxWidth={600}>
        <H1 textAlign="center">Welcome to Tamagui.</H1>
        <Paragraph textAlign="center">
          Here's a basic starter to show navigating from one screen to another.
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <SharedUi />
        <Separator />
        <Paragraph textAlign="center">
          Tamagui is made by{' '}
          <Anchor href="https://twitter.com/natebirdman" target="_blank">
            Nate Wienert
          </Anchor>
          , give it a star{' '}
          <Anchor
            href="https://github.com/tamagui/tamagui"
            target="_blank"
            rel="noreferrer"
          >
            on Github
          </Anchor>
          .
        </Paragraph>
      </YStack>

      <XStack>
        <Button {...linkProps}>Link to user</Button>
      </XStack>
    </YStack>
  );
}
