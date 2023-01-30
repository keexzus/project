import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <NavLink
        to='/'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Home
      </NavLink>
      <NavLink
        to='/about'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        About
      </NavLink>
      <NavLink
        to='/products'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
      >
        Products
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
        > API
        </NavLink>

        <NavLink
        to='examplepage'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Example Page
        </NavLink>

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