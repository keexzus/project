import React from 'react';
import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// import { useGlobalContext } from '../context.js'

const ShopClick = () => {

    // const { openSidebar, openModal } = useGlobalContext()
    return(
        <div> 

             <a href="https://silver-croissant-3600d0.netlify.app/"
             target="_blank"
              >

            <button className='sidebar-shopping-cart'>
            <i class="fa fa-shopping-cart" aria-hidden="true"> </i>
            </button>
             
            </a>

        </div>
    )

}  

export default ShopClick