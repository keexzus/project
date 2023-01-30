import React from 'react';
import '../index.css';
import { data } from '../data2.js';
// import useState from 'react';


const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
  return (
    <> 
      {people.map((person) => {
            const { id, name } = person;
            return ( 
                <section className='section'>   
                <div key={id} className='item'>
                    <h4>{name}</h4>
                    
                </div>
                </section>
            );
        })}
        <div className='section'>  
        <button className='btn-2 ' onClick={() => setPeople([])}>clear items</button>
        </div>
    
    </>
  );
};

export default UseStateArray;
