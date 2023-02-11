import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar center'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>

      <NavLink
        to='/login'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Login
      </NavLink>

        <NavLink
        to='axiosexample'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Jokes
        </NavLink>


      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Counter
      </NavLink>
     
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
      </NavLink>
    
        
        <NavLink
        to='examplepage'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Heroes
        </NavLink>

        <NavLink
        to='testpage'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Test Page
        </NavLink>

        <NavLink
        to='simplecrm'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Simple CRM
        </NavLink>

        
        
        {/* <NavLink
        to='tabs'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Tabs
        </NavLink> */}


    </nav>
  );
};
export default Navbar;


/* <NavLink 
            to='/'
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'grey'};
            }}
            ></NavLink> */