import { Outlet } from 'react-router-dom';
import React from 'react';
// import useEffect from 'react'
// import StyledNavbar from '../Components/StyledNavbar';
import Navbar  from '../Components/Navbar';
import HomeClick from './Home-Click.js'
import Submenu from '../pages/Submenu.js';
import TopNavbar from '../Components/TopNavbar';
import ShopClick from '../Components/ShopClick';
import '../index.css';
import { AppProvider } from '../context'
import { useGlobalContext } from '../context';
 

const SharedLayout = () => {
  
     

    return (
        <>
        
        <AppProvider >  
        
        
         <HomeClick />
          <TopNavbar /> 
          
         <Navbar />
         
         <Outlet />
         <Submenu /> 

         <ShopClick />

        
         </AppProvider>
         
        </>
    );
};

export default SharedLayout; 