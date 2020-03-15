import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Intro } from '../intro/Intro';

import { 
  BandsByLetter, SearchBands, RandomBand 
} from '../bands';

import { Band } from '../band';
import { Album } from '../album';

export const RouterOutput = () => {
  return (
      <Switch>
        <Route exact path='/' render={() => <Intro />} />
        <Route exact path='/bands/byletter/:letter' render={() => <BandsByLetter />} />
        <Route exact path='/bands/search' render={() => <SearchBands />} />
        <Route exact path='/bands/random' render={() => <RandomBand />} />
        <Route exact path='/band/:id' render={() => <Band />} />
        <Route exact path='/album/:id' render={() => <Album />} />
      </Switch>
  );
}