import React from "react";

// import { useState } from 'react';
// in react, can only pass the data down
// we can only pass props down
import Books from './list-of-books.js'
import './index.css'

const Booklist = () => {
    // const [value, setValue] = useState(0)
     return (
        <section className='booklist'>
            {Books.map((book, index) => {
                return <Book {...book} key={book.id} number={index} />
            })}
            
     </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;    
    // console.log(number);
    
    return (
        
        <article className='book'>
        <img src={img} alt={''}/>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <div>
        {/* <span className='number'>{`# ${number + 1}`}</span> */}
        </div>
         </article>
         
    );
};  

// const Image = () => {


export default Booklist; 