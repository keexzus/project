// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import books from '../data';

// const SingleProduct = () => {
//   const { bookId } = useParams();
//   console.log('parameter: ' + bookId);

//   const book = books.find((book) => book.id === bookId);

//   // Check if book is found before accessing its properties
//   if (!book) {
//     return (
//       <section className='section'>
//         <h2>Book not found!</h2>
//         <Link to='/products'>Go back to Book List</Link>
//       </section>
//     );
//   }

//   const { title, author, img, id } = book;

//   return (
//     <section className='section product'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h5>{author}</h5>
//       <h5>{id}</h5>
//       <Link to='/products'>Go back to Book List</Link>
//     </section>
//   );
// };

// export default SingleProduct;
 

import React from 'react'
import { Link, useParams  } from 'react-router-dom';
import books from '../data';
const SingleProduct = () => {
    
    const { bookId } = useParams();
    console.log('parameter: ' + bookId)
    const book = books.find((book) =>  book.id === bookId )
    
    // console.log("the boook value is: " + book);
    // console.log(' the id of the book we are trying to find is: ' + bookId)

    // return;

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