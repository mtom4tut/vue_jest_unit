import { render, screen } from '@testing-library/vue';

import BaseIcon from './BaseIcon.vue';

import icons from '../icons';

describe('BaseIcon: ', () => {
  let icon;

  beforeEach(() => {
    icon = Object.keys(icons)[0];
  });

  function renderIcon(name, classes = null) {
    const options = {
      props: {
        name,
        class: classes,
      },
    };

    return render(BaseIcon, options);
  }

  test('renders', () => {
    renderIcon(icon);

    expect(screen.getByTestId('base-icon')).not.toBeEmptyDOMElement();
  });

  test('renders non-existent icon', () => {
    renderIcon('nonExistentIcon');

    expect(screen.getByTestId('base-icon')).toBeEmptyDOMElement();
  });

  test('renders icons with default class', () => {
    renderIcon(icon);

    expect(screen.getByTestId('base-icon')).toHaveClass('w-6 h-6');
  });

  test('renders icons with custom class', () => {
    const customClasses = 'custom class test';
    renderIcon(icon, customClasses);

    expect(screen.getByTestId('base-icon')).toHaveClass(customClasses);
  });
});
