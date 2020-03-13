import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup, fireEvent, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { SearchBands } from './SearchBands';

const mockUseQuery = jest.fn(() => ({
  data: {
    bands: [
      {
        name: 'testii',
        country: 'finland',
        id: '1',
        genre: 'thrash metal'
      }
    ]
  }
}));

let queryparams: any = null;
jest.mock('@apollo/react-hooks', () => ({
  ...jest.requireActual('@apollo/react-hooks'),
  useQuery: (query: any, params: any) => {
    queryparams = params;

    return {
      data: {
        bands: [
          {
            name: 'testii',
            country: 'finland',
            id: '1',
            genre: 'thrash metal'
          }
        ]
      }
    };
  }
}));

describe('SearchBands', () => {
  afterEach(cleanup);

  test('Renders correctly', () => {
    const component = render(
      <BrowserRouter>
        <SearchBands />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });

  test('Query is called with correct variables', () => {
    mockUseQuery.mockClear();

    const component = render(
      <BrowserRouter>
        <SearchBands />
      </BrowserRouter>
    );
      
    const nameInput: any = component.container.querySelector('#name');
    const genreInput: any = component.container.querySelector('#genre');
    const searchButton: any = component.container.querySelector('#submit-search');

    
    fireEvent.change(nameInput, { target: { value: 'testii' }});
    fireEvent.change(genreInput, { target: { value: 'thrash' }});
    fireEvent.click(searchButton);
    
    const expectedResult = {
      variables: {
        name: 'testii',
        genre: 'thrash',
        formationFrom: '',
        formationTo: '',
        start: 0
      }
    };

    expect(queryparams).toEqual(expectedResult);
  });
});