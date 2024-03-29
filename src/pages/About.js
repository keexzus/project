import React from "react";
import '../index.css';
import { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';
// import { data } from '../data3.js'
// import { Simulate } from "react-dom/test-utils";

const CounterStateCounter = () => {
  const [value, setValue] = useState(0);
  const { closeSubmenu } = useGlobalContext()
  useEffect(() => {
    console.log('call useEffect')
    if (value >= 1) {
    document.title =`New Messages(${value})`;
    }
  }, [value]);
  // empty dependency array only loads on initial render
  // [value] runs on every render
  const reset = () => {
           setValue(0);
          };

       return(
         <>
       <section className='section center' onMouseOver={closeSubmenu}>
        
          <h2>Skills Counter:</h2>
        <h2>Get New Messages! </h2>
         <h2> (Window must be Only tab)</h2>
        <h1>{value}</h1>
        
        <button className='btn' onClick={() => setValue(value +1)}>Increase Value 
        </button>

        <button className='btn' onClick={reset}>
          reset
        </button>

      </section>

          </>
    
        )
        };
    


  export default CounterStateCounter;
