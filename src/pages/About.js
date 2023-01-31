import React from "react";
import '../index.css';
import {useState} from 'react';

const CounterStateCounter = () => {
  const [value, setValue] = useState(0);
  const reset = () => {
           setValue(0);
          };

          return(
      <>
      <section className='section'>

        <h2>Skills</h2>
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
