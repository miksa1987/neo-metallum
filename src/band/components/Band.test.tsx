import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { gql } from 'apollo-boost';
import { MockedProvider } from '@apollo/react-testing';

import { Band, GET_BAND_QUERY } from './Band';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '123'
  })
}));

const mocks = [
  {
    request: {
      query: GET_BAND_QUERY,
      variables: {
        id: '123',
      }
    },
    result: {
      data: {
        band: [
          {
            name: 'test',
            country: 'finland',
            location: 'helsinki',
            id: '123',
            genre: 'heavy metal',
            status: 'active',
            label: 'label',
            yearsActive: '1999-2009',
            photoUrl: '',
            logoUrl: '',
            members: [
              { id: '1', name: 'x', role: 'guitars' }
            ],
            albums: [
              { id: '12', name: 'y', type: 'album', releaseDate: '31 October 1987'}
            ]
          }
        ]
      }
    }
  }
];

describe('Band view', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const component = render(
      <MockedProvider mocks={mocks}>
        <Band />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});