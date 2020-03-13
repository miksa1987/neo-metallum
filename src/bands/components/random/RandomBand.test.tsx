import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { RandomBand } from './RandomBand';

const mockBand = {
  name: 'test',
  genre: 'heavy metal',
  country: 'usa',
  id: '1'
}

jest.mock('@apollo/react-hooks', () => ({
  ...jest.requireActual('@apollo/react-hooks'),
  useQuery: () => ({ data: { randomBand: { mockBand }}})
}));

describe('Band', () => {
  afterEach(cleanup);

  test('URL is manipulated correctly', () => {
    const history = createMemoryHistory();
    const component = render(
      <Router history={history}>
        <RandomBand />
      </Router>
    );
    setTimeout(() => {
      expect(history.location.pathname).toBe('/band/1');
    }, 100);
  });
});