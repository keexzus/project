import React, { useState } from 'react'

const ControlledInputs = () => {
    const [company, setCompany] = useState('')
    const [firstName, setFirstName] = useState('')
    const [email, setEmail] = useState('')
    const [people, setPeople] = useState([]);
    
    const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email && company){
    const person = { id: new Date().getTime().toString(), company:company, firstName:firstName, email:email};
    setPeople((people)=> {
    return [...people, person]
    });
    setCompany('')
    setFirstName('')
    setEmail('')
    } else {
        console.log('empty values');
    }
    }
    
    // if property value matches variable, you can skip One step
    //
    return (
    <>
    <article className='section'>
        <form className='form' onSubmit={handleSubmit}>

    <div className='form-label-2'>
    <label htmlFor='company' >Company: </label>
    <input 
    type='text' 
    id='company' 
    name='company' 
    value={company}
    onChange={(e)=> setCompany(e.target.value)}
    />
    </div>
        
    <div className='form-label-2'>
        <label htmlFor='firstName' >Name: </label>
       <input 
    type='text' 
    id='firstName' 						
    name='firstName' 
    value={firstName}
    onChange={(e)=> setFirstName(e.target.value)}/>
        </div>
    
    <div className='form-label-2'>
        <label htmlFor='email'>Email: </label>
        <input 
    type='text' 
    id='email' 
    name='email' 
    value={email}
    onChange={(e)=> setEmail(e.target.value)}
    />
    </div>
        <button type='submit' className='btn'> add person </button>
    {/* <button type='submit' onClick={handleSubmit}> add </button> */}

    {people.map((person, index)=> {
    const { id, company, firstName, email } = person;
    return (
        <div className='item' key={id}>
        <h4>{company}</h4>
        <h4>{firstName}</h4>
        <p>{email}</p>
    
         </div>
         );
         })}
    
    </form>
        
        
   
        
    </article>
    </>
    );
    };

    export default ControlledInputs
  