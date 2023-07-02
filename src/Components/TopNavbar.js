import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from '../context'

const TopNavbar = () => {
    const { openSubmenu, closeSubmenu } = useGlobalContext();
    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        

        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 0.5;
        openSubmenu (page, { center, bottom });
    }
    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('link-btn')){
            closeSubmenu(e);
        }
    }
    return (
        <nav className='nav' onMouseOver={handleSubmenu} >
            <div className='nav-center'>
                {/* <div className='nav-header'>
                </div> */}
                <ul className='nav-links'>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            keex
                        </button>
                    </li>
                    <li>
                        <button className='link-btn' onMouseOver={displaySubmenu}>
                            coco
                        </button>
                    </li>
                     
                    
                </ul>
            </div>
        </nav>
    )
 }

 export default TopNavbar 