import React from "react";


// in react, can only pass the data down
// we can only pass props down
import Books from './list-of-books.js'
import './index.css'

const Booklist = () => {
     return (
        <section className='booklist section'>
            {Books.map((book, index) => {
                return <Book {...book} key={book.id} number={index}  />;
            })}; 
            
     </section>
    );
};

const Book = (props) => {
    const { img, title, author, number } = props;    
    // console.log(number);
    
    return (
        
        <article className='book'>
        <img src={img} alt={''}/>
        <h2>{title}</h2>
        <h2>{author}</h2>
        <div>
        <span className='number'>{`# ${number + 1}`}</span>
        </div>
         </article>
         
    );
};  

// const Image = () => {
//     <img src='https://m.media-amazon.com/images/I/41-Ii9NlK1L.jpg' 
//     alt='The Book of Freedom: Exit the Simulation'/>
// }

// const Author = () => <h4>Keexzus</h4>

export default Booklist; 