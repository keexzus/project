// in react, can only pass the data down
// we can only pass props down
import Books from './list-of-books.js'

const Booklist = () => {
    const getBook = (id) => {
        const book = Books.find((book) => book.id === id);
        console.log(book);
        
    };
         return (
        <section className='booklist'>
            {Books.map((book) => {
                return <Book {...book} key={book.id} getBook={getBook}  />
            })} 
            
     </section>
    );
};

const Book = (props) => {
    const { img, title, author, getBook, id, number } = props;    
    console.log(props)
    const getSingleBook = () => {
        getBook(id);
    };
    
    return (
        <article className='book'>
        <img src={img} />
        <h2>{title}</h2>
        <h2>{author}</h2>
       
         <button onClick={getSingleBook}>display title</button>
        
        </article>
    );
}; // <button onClick={() => getBook(id)}> click me </button>

const Image = () => {
    <img src='https://m.media-amazon.com/images/I/41-Ii9NlK1L.jpg' 
    alt='The Book of Freedom: Exit the Simulation'/>
}

const Author = () => <h4>Keexzus</h4>

export default Booklist; 