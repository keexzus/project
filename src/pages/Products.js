import React from "react";
import { Link } from 'react-router-dom'
import books from '../data';
const Products = () => {
  return (
    <section className='section'>
     <div className='products'>
        {books.map((book) => {
            return (
                <article key={book.id}>
                     <h5>{book.title}</h5>
                    <h5>{book.author}</h5>
                    <Link to= {`/products/${book.id}`}>Single Book View</Link>
                </article>
            );
        })}
       </div>
      </section>
  );
};

export default Products;
