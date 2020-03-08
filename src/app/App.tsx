import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { TopBar } from './TopBar';
import { SideBar } from './SideBar';
import { RouterOutput } from './RouterOutput';


const App = () => {
  const [ sidebarVisible, setSidebarVisible ] = React.useState(true);

  const handleSidebarVisibility = () => setSidebarVisible(!sidebarVisible);

  return (
    <BrowserRouter>
      <TopBar setSidebarVisible={handleSidebarVisibility} />
      <SideBar hidden={sidebarVisible} />
      <RouterOutput />
    </BrowserRouter>
  );
}

export default App;
