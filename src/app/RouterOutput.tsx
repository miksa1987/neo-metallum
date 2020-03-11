import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import { Intro } from '../intro/Intro';

import { 
  BandsByLetter, SearchBands 
} from '../bands';

import { Band } from '../band';

const Layout = styled.div`
  @media screen and (min-width: 600px) {
    margin-left: calc(25vw + 2rem);
  }
`;

export const RouterOutput = () => {
  return (
      <Switch>
        <Route exact path='/' render={() => <Intro />} />
        <Route exact path='/bands/byletter/:letter' render={() => <BandsByLetter />} />
        <Route exact path='/bands/search' render={() => <SearchBands />} />
        <Route exact path='/band/:id' render={() => <Band />} />
      </Switch>
  );
}