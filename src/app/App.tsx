import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { TopBar } from './TopBar';
import { RouterOutput } from './RouterOutput';
import { Notification } from '../common';


const App = () => {
  return (
    <Router>
      <TopBar/>
      <RouterOutput />
      <Notification />
    </Router>
  );
}

export default App;
