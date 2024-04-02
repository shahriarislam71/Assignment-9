import React from 'react';
import Nav from './component/nav/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;