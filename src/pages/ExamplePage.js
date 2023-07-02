import React, { useState } from 'react';
import '../index.css';
import { data } from '../data2.js';
import { useGlobalContext } from '../context';
// import useState from 'react';
const UseStateArray = () => {
    const [people, setPeople] = useState(data);
    const { closeSubmenu } = useGlobalContext();
    
    const removeItem = (id) => {
      setPeople((oldPeople) => {
        let newPeople = oldPeople.filter((person) => person.id !== id);
        return newPeople;
      });
      }
       // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    
 return (
    <> 
    <section className='section' onMouseOver={closeSubmenu}>  
      {people.map((person) => {
            const { id, name } = person;
            return ( 
                // <section className='section'>   
                <div key={ id } 
                className='item'>
                    <h4>{name}</h4>
                    <button className='btn' onClick={() => removeItem(id)}>Remove</button>
                    </div>
                // </section>
            );
        })}
        </section>
        <div class ='section' onMouseOver={closeSubmenu}>  
        <button className='btn-2' onClick={() => setPeople([])}>clear all</button>
        <button className='btn-2' onClick={() => setPeople(data)}>reset all</button>
        </div>
    
    </>
  );
};
export default UseStateArray;
