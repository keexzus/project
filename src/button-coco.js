 import React from 'react';
import './index.css';
// import Books from './list-of-books.js'

const Category = ({filterItems}) => {

     return (
          <div className='section-filter-buttons'>
             <button className='btn'
             onClick={() =>
            filterItems('keex')}
              > keex
              </button>
             
            <button className='btn'
            onClick={() =>
            filterItems('coco')}
            > coco
            </button>

            <button className='btn'
            onClick={() =>
            filterItems('all')}
            > all
            </button>

          </div>
        );
      };
  

export default Category;