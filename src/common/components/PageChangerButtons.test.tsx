import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { PageChangerButtons } from './PageChangerButtons';

const decrement = jest.fn();
const increment = jest.fn();

describe('PageChangerButtons', () => {
  test('Back button calls right function', () => {
    increment.mockClear();
    decrement.mockClear();

    const component = render(
      <PageChangerButtons
        decrementPageCounter={decrement}
        incrementPageCounter={increment}
      />
    );

    const button: any = component.container.querySelector('#nav-button-back');
    fireEvent.click(button);

    expect(decrement.mock.calls.length).toBe(1);
    expect(increment.mock.calls.length).toBe(0);
  });

  test('Forward button calls right function', () => {
    increment.mockClear();
    decrement.mockClear();

    const component = render(
      <PageChangerButtons
        decrementPageCounter={decrement}
        incrementPageCounter={increment}
      />
    );

    const button: any = component.container.querySelector('#nav-button-forward');
    fireEvent.click(button);

    expect(increment.mock.calls.length).toBe(1);
    expect(decrement.mock.calls.length).toBe(0);
  });
});