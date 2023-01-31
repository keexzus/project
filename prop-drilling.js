// in react, can only pass the data down
// we can only pass props down
import Books from './list-of-books.js'

const Booklist = () => {
    const someValue ='shakeAndBake'
    const displayValue = () => {
        console.log(someValue);
    }
    return (
        <section className='booklist'>
            {Books.map((book) => {
                return <Book {...book} key={book.id} 
                displayValue = {displayValue} />
            })} 
            
    </section>
    );
};

const Book = (props) => {
    const { img, title, author, displayValue } = props;    
    console.log(props)
    
    return (
        <article className='book'>
        <img src={img} />
        <h2>{title}</h2>
        <button onClick={displayValue}>display title</button>
        <Author />
        </article>
    );
};

const Image = () => {
    <img src='https://m.media-amazon.com/images/I/41-Ii9NlK1L.jpg' 
    alt='The Book of Freedom: Exit the Simulation'/>
}

const Author = () => <h4>Keexzus</h4>

export default Booklist 