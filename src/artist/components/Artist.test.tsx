import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { gql } from 'apollo-boost';
import { MockedProvider } from '@apollo/react-testing';

import { Artist, GET_ARTIST_QUERY } from './Artist';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({ goBack: () => {} }),
  useParams: () => ({
    id: '123'
  })
}));

const mocks = [
  {
    request: {
      query: GET_ARTIST_QUERY,
      variables: {
        id: '123',
      }
    },
    result: {
      data: {
        artist: {
          id: '123',
          name: 'test',
          realName: 'test',
          age: '33',
          origin: 'Fin',
          gender: 'None',
          photoUrl: 'http://awesome.pic.info',
          biography: '',
          trivia: ''
        }
      }
    }
  }
];

describe('Album view', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const component = render(
      <MockedProvider mocks={mocks}>
        <Artist />
      </MockedProvider>
    );
    expect(component).toMatchSnapshot();
  });
});