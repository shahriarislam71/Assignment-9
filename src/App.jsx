import React, { createContext, useState } from 'react';
import Nav from './component/nav/Nav';
import { Outlet, useLoaderData } from 'react-router-dom';

export const Productcontext = createContext([])
export const AppliedJobData = createContext([])
const App = () => {
  const { showdata, initialCart } = useLoaderData()
  // console.log(initialCart)
  const [cart,setcart] = useState(initialCart)
  return (
    <Productcontext.Provider value={showdata}>
      <AppliedJobData.Provider value = {[cart,setcart]}>
        <div className='backgrondd'>
          <Nav></Nav>
        </div>
        <Outlet></Outlet>
      </AppliedJobData.Provider>
    </Productcontext.Provider>
  );
};

export default App;