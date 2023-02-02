import React from "react";
import '../index.css';
import { useState } from 'react'

const ExperimentPage = () => {
    const [value, setValue] = useState(0);
    const reset = () => {
             setValue(0);
            };
  

    return(
        <>
       
       <section className='section'>  
       <h2>Experiment with Code</h2>
       <h2>{value}</h2>
       </section>

        </>
    );
};

export default ExperimentPage