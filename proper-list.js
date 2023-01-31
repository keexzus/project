import './index.css';

import Books from './list-of-books.js'

const names = ['Batman ', 'Spiderman ','The Flash'];
const newNames = names.map((name) => {
     return<h1>{name}</h1>;
});
console.log(newNames);

const Booklist = () => {
    return (
    <section className='booklist'>
        {Books.map((book) => {
            const { img, title, author, id } = book;
            return <Book img={img} title={title} author={author} key={id} />
                
        
        })}
    </section>
    );
};


    const Book = (props) => {
        const { img, title, author, children } = props;
    console.log(props);
    return (
         
        <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h2>{author}</h2>
        {children}
        
 </article>
    );
    };
       


export default Booklist; 