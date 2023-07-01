import React from "react";
 import './index.css';
// import book from './list-of-books.js';
 
const BookGenre = ({books}) => {
     return (
         <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} 
                // number={index} 
                />
            })}
            </section>
     );
};
 const Book = (props) => {
    const { img, title, author, buy } = props;    
    return (
        <article className='book'>
        <img src={img} alt={''}/>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <button class='btn-2'><a href={buy}>Buy</a></button>
        <div>
      </div>
         </article>
   );
};  
 export default BookGenre; 