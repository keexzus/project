import React from 'react';
import {FaBars} from 'react-icons/fa'
import { useGlobalContext } from '../context.js'

const HomeClick = () => {

    const { openSidebar, openModal } = useGlobalContext()
    return(
        <div> 
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars />
            </button>
        </div>
    )
}  

export default HomeClick