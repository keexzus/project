import React from "react";
import '../index.css';
import {useState} from 'react';
// import { data } from '../data3.js'
// import { Simulate } from "react-dom/test-utils";

const CounterStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
           setValue(0);
          };

    return(
         <>
       <section className='section'>

        <h2>Skills Counter</h2>
        <h1>{value}</h1>
        
        <button className='btn' onClick={() => setValue
        (value +1)}>Increase Value 
        </button>

        <button className='btn' onClick={reset}>
          reset
        </button>

      </section>
          
       
         </>
    
        )
        };
    


  export default CounterStateCounter;
