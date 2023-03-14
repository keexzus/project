import React from 'react';
// import { useGlobalContext } from '../context';
import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';

 
const OriginalNavbar = () => {
  //  const { openSidebar, openModal } = useGlobalContext(); 

  return (
    <aside> 
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

        <NavLink
        to='cocobook'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >French Park
        </NavLink>

        <NavLink
        to='grocerylist'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        >Grocery List</NavLink>

        
        {/* <button className='close-btn' onClick={openSidebar}>
          <FaTimes />
        </button> */}

        {/* <NavLink
        to='extraforms'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Forms
        </NavLink> */}

        
        
        {/* <NavLink
        to='tabs'
        className={({ isActive }) => (isActive ? 'link active' : 'link')}
        > Tabs
        </NavLink> */}
        
       
      </nav>
     </aside>
  );
};
export default OriginalNavbar;


/* <NavLink 
            to='/'
            style={({ isActive }) => {
                return { color: isActive ? 'red' : 'grey'};
            }}
            ></NavLink> */