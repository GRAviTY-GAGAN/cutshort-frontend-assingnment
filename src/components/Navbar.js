import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
      <div className='navbar'>
        <div className='circle bg-purple'>1</div> <div className='line bg-purple'></div>
        <div className={location.pathname === '/' ? 'line' : 'line bg-purple'}></div> <div className={location.pathname === '/' ? 'circle' : 'circle bg-purple'}>2</div> <div className={location.pathname === '/' ? 'line' : 'line bg-purple'}></div>
        <div className={location.pathname === '/setup' || location.pathname === '/' ? 'line' : 'line bg-purple'}></div> <div className={location.pathname === '/setup' || location.pathname === '/' ? 'circle' : 'circle bg-purple'}>3</div> <div className={location.pathname === '/setup' || location.pathname === '/' ? 'line' : 'line bg-purple'}></div>
        <div className={location.pathname === '/congratulations' ? 'line bg-purple' : 'line'}></div> <div className={location.pathname === '/congratulations' ? 'circle bg-purple' : 'circle'}>4</div>
    </div>
  );
};

export default Navbar;


// step 1 : always active.
// step 2 : only deactivated when user is in step 1.
// step 3 ; only deactivated when user is in step 1 or step 2.
// step 4 : only ACTIVATED when user is in step 4.