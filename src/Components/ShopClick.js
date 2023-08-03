import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
// import { FontAwesomeIcon } from 'react-icons/fa'
// import '@fortawesome/fontawesome-free/css/all.min.css'



const ShopClick = () => {

    
    return(
        <div> 

             <a href="https://silver-croissant-3600d0.netlify.app/"
             target="_blank"
              >

            <button className='sidebar-shopping-cart'>
            <FaBeer />
            {/* <i class="fa fa-shopping-cart" aria-hidden="true"> </i> */}
            </button>
             
            </a>

        </div>
    )

}  

export default ShopClick