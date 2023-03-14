import React from 'react';
 import { useGlobalContext } from '../context';
// import { NavLink } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { links } from '../data7';

const Navbar = () => {
const { isSidebarOpen, closeSidebar } = useGlobalContext();
 
return (

         <aside 
         className={ `${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar' }`}
         >
            <div >
            <button className='close-btn' onClick= {closeSidebar}>
                <FaTimes />
            </button>
            </div>
            <ul className='links'>
                {links.map((link) => {
                    const { id, url, text} = link;
                    return (
                        <li key={id}>
                            <a href={url}>
                                {text}
                            </a>
                         </li>
                      );
                 })}
             </ul>
             </aside>
   );
   };
   
export default Navbar; 

 