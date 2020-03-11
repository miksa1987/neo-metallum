import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { TopBar } from './TopBar';
import { RouterOutput } from './RouterOutput';


const App = () => {
  return (
    <BrowserRouter>
      <TopBar/>
      <RouterOutput />
    </BrowserRouter>
  );
}

export default App;
