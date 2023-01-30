import './index.css';
import Books from './list-of-books.js'


const EventExamples = () => {
     const handleFormInput = (e) => {
        console.log(e.target);
        console.log(e.target.name);
        console.log(e.target.value);
        console.log('handle form input');
    };
     const handleButtonClick = () => {
        alert('Thanks for clicking!');
    };
    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log('form submitted');
    };
    
    return <section>
        <form onSubmit={handleFormSubmission}>
        
            <h2>Typical Form</h2>
            <input 
            type='text' 
            name='example' 
            onChange={handleFormInput}
            // onChange={(e) => console.log(e.target.value)}
            style={{ margin: '1rem 0'}}
            />
       <div> 
        <button type='submit'>Submit</button></div>
        <button onClick={handleFormSubmission}>Click</button>
       <div><button onClick={() => console.log('hello there')}>arrow</button>
       </div>  
       </form>
    </section>
} 
    //can pass onSubmit={handleFormSubmissoin}
    //inside button as onClick={handleFormSubmission}

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