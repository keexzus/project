 import React, { useState, useEffect } from 'react';
import './index.css';
// import Books from './list-of-books.js'

const Category = ({filterItems}) => {

  const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};

  const [theme, setTheme] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

     return (
          <div className= 'section-filter-buttons' >
            {/* <div className={`section-filter-buttons ${theme}`}> */}
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

            <button className='btn' onClick={toggleTheme}>
              dark mode
            </button> 
                  

          </div>
        );
      };
  

export default Category;