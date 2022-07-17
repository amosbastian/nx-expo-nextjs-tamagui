import { render } from '@testing-library/react';
import { NativeNavigation } from './navigation-native';

describe('NativeNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NativeNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
