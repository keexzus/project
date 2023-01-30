import React from 'react';
import { Link, useParams  } from 'react-router-dom';
import books from '../data';
const SingleProduct = () => {
    
    const { bookId } = useParams();
    console.log('parameter: ' + bookId)
    const book = books.find((book) =>  book.id === bookId )
    
    const { title, author, img, id } = book;

    return (
         <section className='section product'>
            
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h5>{author}</h5>
            <h5>{id}</h5>
            <Link to='/products'>Go back to Book List</Link>
          </section>
    );
    
    };
export default SingleProduct; 