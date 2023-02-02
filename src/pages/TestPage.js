import React from "react";
import '../index.css';
import { useState, useEffect } from 'react'

const UseEffectCleanup = () => {
    const [size, setSize] = useState(window.innerWidth);
  
    const checkSize = () => {
      setSize(window.innerWidth);
    };
  
    useEffect(() => {
      console.log('useEffect');
      window.addEventListener('resize', checkSize);
      // can use code below or dependency array
    //   return () => {
    //     console.log('cleanup');
    //     window.removeEventListener('resize', checkSize);
    //   };
    }, [] );
    console.log('render');
   
    return (
      <>
        <section className='section'>  
        <h1>window</h1>
        <h2>{size} PX</h2>
        </section>
      </>
    );
  };
  

export default UseEffectCleanup;