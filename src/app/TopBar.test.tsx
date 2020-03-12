import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, cleanup, fireEvent } from '@testing-library/react';

import { TopBar } from './TopBar';

describe('TopBar', () => {
  afterEach(cleanup);

  test('Snapshot passes', () => {
    const history = createMemoryHistory()
    const component = render(<Router history={history}><TopBar /></Router>);
    expect(component).toMatchSnapshot();
  });

  test('Logo click takes to home URL and changes bandSelect value', () => {
    const history = createMemoryHistory()

    const component = render(<Router history={history}><TopBar /></Router>);
    const homeLink: any = component.container.querySelector('#neo-metallum-logo');
    const bandSelect: any = component.container.querySelector('#bands-select-path');

    fireEvent.click(homeLink);
    
    expect(history.location.pathname).toBe('/');
    expect(bandSelect.value).toBe('default');
  });

  test('BandSelect by letter changes URL path', () => {
    const history = createMemoryHistory()
    const component = render(<Router history={history}><TopBar /></Router>);

    const bandsSelectByLetter: any = component.container.querySelector('#bands-select-byletter');
    fireEvent.click(bandsSelectByLetter);

    setTimeout(() => {
      expect(history.location.pathname).toBe('/bands/byletter/a');
    }, 100);
  });

  test('Search button changes path', () => {
    const history = createMemoryHistory()
    const component = render(<Router history={history}><TopBar /></Router>);

    const searchButton: any = component.container.querySelector('#search-bands-button');
    fireEvent.click(searchButton);

    setTimeout(() => {
      expect(history.location.pathname).toBe('/bands/search');
    }, 100);
  });
});