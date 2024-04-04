import React, { createContext } from 'react';
import Nav from './component/nav/Nav';
import { Outlet, useLoaderData } from 'react-router-dom';

export const Productcontext = createContext([])
const App = () => {
  const {showdata} = useLoaderData()
  // console.log(showdata)
  return (
    <Productcontext.Provider value = {showdata}>
      <div className='backgrondd'>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </Productcontext.Provider>
  );
};

export default App;