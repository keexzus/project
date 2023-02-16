import React, { useState } from 'react';

const ExtraForms = () => {

         const [value, setValue] = useState(0);
        
         const handleSubmit = (e) => {
         e.preventDefault(); 
         const formData = new FormData(e.currentTarget);

        //  console.log(formData);
        //  const email = formData.get('email');
        //  console.log([...formData.entries()])
        const newUser = Object.fromEntries(formData)
        console.log(newUser)
        e.currentTarget.reset()
         }
        return (
        
        <article className='section'>
            <form className='form' onSubmit={handleSubmit}>
            <h4>Form API</h4>
         <div className='form-label-2'>
            <label htmlFor='name' >Name: </label>
           <input 
        type='text' 
        id='name' 						
        name='name' 
        // onChange={(e)=> setValue(e.target.value)}
        />
            </div>
        
        <div className='form-label-2'>
            <label htmlFor='email'>Email: </label>
            <input 
        type='text' 
        id='email' 
        name='email' 
        // onChange={(e)=> setValue(e.target.value)}
        />
        </div>
            <button type='submit' className='btn'> add person </button>
            
        </form>
     </article>
        
        );
        };
  
export default ExtraForms