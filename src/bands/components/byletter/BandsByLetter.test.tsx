import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { gql } from 'apollo-boost'; // For the query to work

import { BandsByLetter, GET_BANDS_QUERY } from './BandsByLetter';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    letter: 'a'
  })
}));

const mocks = [
  {
    request: {
      query: GET_BANDS_QUERY,
      variables: {
        letters: 'a**',
        start: 0
      }
    },
    result: {
      data: {
        bands: [
          {
            name: 'test',
            country: 'finland',
            id: '1',
            genre: 'heavy metal'
          }
        ]
      }
    }
  }
];

describe('BandsByLetter', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const component = render(
      <MockedProvider mocks={mocks}>
        <BandsByLetter />
      </MockedProvider>
    );

    expect(component).toMatchSnapshot();
  });
});