import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Letters } from './Letters';

describe('Letters', () => {
  afterEach(cleanup);

  test('Snapshot passes', () => {
    const history = createMemoryHistory();
    const component = render(
      <Router history={history}>
        <Letters path='/test' />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  test('URL is manipulated correctly', () => {
    const history = createMemoryHistory();
    const component = render(
      <Router history={history}>
        <Letters path='/test' />
      </Router>
    );

    const aLink: any = component.container.querySelector('#a-link');
    fireEvent.click(aLink);

    setTimeout(() => {
      expect(history.location.pathname).toBe('/test/a');
    }, 100);
  });
});