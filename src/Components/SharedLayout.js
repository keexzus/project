import { Outlet } from 'react-router-dom';
import React from 'react';
// import StyledNavbar from '../Components/StyledNavbar';
import Navbar  from '../Components/Navbar';
import HomeClick from './Home-Click.js'
import '../index.css';
import { AppProvider } from '../context'


const SharedLayout = () => {

    return (
        <>
        <AppProvider>  
        <HomeClick />
         <Navbar />
         <Outlet />
         </AppProvider>
        
        </>
    );
};

export default SharedLayout; 