import { render } from '@testing-library/react';

import NavigationNative from './navigation-native';

describe('NavigationNative', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<NavigationNative />);
    expect(baseElement).toBeTruthy();
  });
});
