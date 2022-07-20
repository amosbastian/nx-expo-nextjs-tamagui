import { styled, YStack } from 'tamagui';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export const SharedUi = styled(YStack, {
  name: 'MyComponent',
  backgroundColor: 'red',
});

export default SharedUi;
