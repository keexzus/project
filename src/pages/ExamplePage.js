import React from 'react';
import '../index.css';
import { data } from '../data2.js';
// import useState from 'react';
const UseStateArray = () => {
    const [people, setPeople] = React.useState(data);
    
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
      {people.map((person) => {
            const { id, name } = person;
            return ( 
                <section className='section'>   
                <div key={id} className='item'>
                    <h4>{name}</h4>
                    <button className='btn' onClick={() => removeItem(id)}>Remove</button>
                    
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
