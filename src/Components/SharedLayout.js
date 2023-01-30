import { Outlet } from 'react-router-dom';

import StyledNavbar from '../Components/StyledNavbar';
import React from 'react';
import '../index.css';

const SharedLayout = () => {

    return (
        <>
        <StyledNavbar />
         <Outlet />
        
        </>
    );
};

export default SharedLayout; 