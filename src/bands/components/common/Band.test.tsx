import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { Band } from './Band';

const mockBand = {
  name: 'test',
  genre: 'heavy metal',
  country: 'usa',
  id: '1'
}

describe('Band', () => {
  afterEach(cleanup);

  test('Snapshot passes', () => {
    const history = createMemoryHistory();
    const component = render(
      <Router history={history}>
        <Band band={mockBand} />
      </Router>
    );
    expect(component).toMatchSnapshot();
  });

  test('URL is manipulated correctly', () => {
    const history = createMemoryHistory();
    const component = render(
      <Router history={history}>
        <Band band={mockBand} />
      </Router>
    );

    const bandLink: any = component.container.querySelector('#band-info-link');
    fireEvent.click(bandLink);

    setTimeout(() => {
      expect(history.location.pathname).toBe('/band/1');
    }, 100);
  });
});