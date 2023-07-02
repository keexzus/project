import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../context';

const ShowHide = () => {
  const [show, setShow] = useState(false);
  const { closeSubmenu } = useGlobalContext();
  return (
    <>
    <div className='section' onMouseOver={closeSubmenu}>  
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
      </div>
      <div className='section'>
        
      </div>
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: '2rem' }}  >
      <h1>Window</h1>
      <h1>(stretch in desktop)</h1>
      <h2>size : {size} px</h2>
    </div>
   
  );
};

export default ShowHide;
