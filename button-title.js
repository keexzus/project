import React, { useState } from 'react';
import './index.css';
const UseStateBasics = () => {

    const [title, setTitle] = useState('Santanero Book Club');

    const handleClick = () => {
    if (title === 'Santanero Book Club') {
        setTitle('Only the Best Books!');
    }   else {
    setTitle('Santanero Book Club');
  }
  };

    return (
    <>
    <h1>{title}</h1>
    
    <div className='section'>

    <button type='button' className='btn' onClick={handleClick}>
        Change Title
    </button>
    </div>
    </>
 );


};

export default UseStateBasics;