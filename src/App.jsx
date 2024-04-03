import React from 'react';
import Nav from './component/nav/Nav';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <div className='backgrondd'>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default App;