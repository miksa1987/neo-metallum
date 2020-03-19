import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { TopBar } from './TopBar';
import { RouterOutput } from './RouterOutput';


const App = () => {
  return (
    <Router>
      <TopBar/>
      <RouterOutput />
    </Router>
  );
}

export default App;
