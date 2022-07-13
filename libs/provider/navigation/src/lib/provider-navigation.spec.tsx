import { render } from '@testing-library/react';

import ProviderNavigation from './provider-navigation';

describe('ProviderNavigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProviderNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
