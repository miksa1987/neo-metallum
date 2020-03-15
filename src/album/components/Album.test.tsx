import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { gql } from 'apollo-boost';
import { MockedProvider } from '@apollo/react-testing';

import { Album, GET_ALBUM_QUERY } from './Album';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '123'
  })
}));

const mocks = [
  {
    request: {
      query: GET_ALBUM_QUERY,
      variables: {
        id: '123',
      }
    },
    result: {
      data: {
        album: [
          {
            name: 'test',
            releaseData: 'January 1st, 2019',
            label: 'Killall media',
            id: '123',
            format: 'CD',
            type: 'Full-length',
            coverUrl: 'http://very.fancy-pic.com',
            band: {
              id: '123',
              name: 'Nothingband',
            },
            lineup: [
              { id: '1', name: 'x', role: 'guitars' }
            ],
            reviews: [
              { id: '12', title: 'y', rating: '66,6%' }
            ],
            musics: [
              { id: '666', title: 'Song from hell', number: '1', length: '66:06' }
            ]
          }
        ]
      }
    }
  }
];

describe('Album view', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const component = render(
      <MockedProvider mocks={mocks}>
        <Album />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});