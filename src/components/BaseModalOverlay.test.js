import { render } from '@testing-library/vue';

import BaseModalOverlay from './BaseModalOverlay.vue';

describe('BaseModalOverlay: ', () => {
  test('renders', () => {
    const { html } = render(BaseModalOverlay);

    expect(html()).toMatchInlineSnapshot(`"<div class=\\"fixed inset-0 bg-black bg-opacity-80\\" data-testid=\\"base-modal-overlay\\"></div>"`);
  });
});
