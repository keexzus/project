import React, { useState } from 'react';
import data from '../data6.js';

function CocoBook() {
    const [ count, setCount ] = useState(0);
    const [ text, setText ] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count);
        if(count <= 0) {
            amount = 1
        } 
        if(count > 10) {
            amount = 10
        }
        setText(data.slice(0,amount))
    }
    return(
        <section className='section center'>
            <h3>Coco's New Book...</h3>
            <h2>French Park</h2>
            <form className='lorem-form' onSubmit={handleSubmit}>
                <label htmlFor='amount'>
                    paragraphs:
                </label>
                <input 
                type="number" 
                name="amount" 
                id="amount"
                value={count}
                onChange={(e) => setCount(e.target.value) }
                />
                <button type='submit' className='btn'>generate</button>
            </form>
           
            <article className='section center'>
                {text.map((item, index) => {
                    return <p key={index}>{item}</p>;
                     })}
            </article>
        </section>
    );
}

export default CocoBook;