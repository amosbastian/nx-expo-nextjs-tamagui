import { render } from '@testing-library/react';

import { Provider } from './provider';

describe('Provider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Provider>
        <div>Hello, World!</div>
      </Provider>
    );
    expect(baseElement).toBeTruthy();
  });
});
