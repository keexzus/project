import './index.css';
import Books from './list-of-books.js'


const EventExamples = () => {
   
    
    return ( 
    <section>
        <form>
            <h2>Typical Form</h2>
            <input 
            type='text' 
            name='product' 
            onChange={(e) => console.log(e.target.value)}
            style={{ margin:'1rem 0'}}
            />
         
          <div> 
          <button type='submit'>Submit</button>
          </div>
       
       <div>
        <button onClick={() => console.log('hello there')}
        type='button'>click me arrow</button>
       </div>  
       </form>
    </section>
    )
} 


const Booklist = () => {
    return (
    <section className='booklist'>
        <EventExamples />
        {Books.map((book) => {
            const { img, title, author, id } = book;
            return <Book {...book} key={book.id} />
            // return<Book book={book} key={book.id}
            //for above, bottom const Book = props.book
                
                })}
    </section>
    );
};


    
const Book = (props) => {
        const { img, title, author, children } = props;
        //const Book = ({ book: { img, title, author } }) => {}
    console.log(props);
    return (
         
        <article className='book'>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h2>{author}</h2>
        {/* {children} */}
        
        </article>
    );
    };
       
export default Booklist; 