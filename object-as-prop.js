import './index.css';

const books = [
    
{
    title: 'The Book of Freedom: Exit the Simulation',
    author: 'Keexzus',
    img: 'https://m.media-amazon.com/images/I/41-Ii9NlK1L.jpg',
    id: 1, 
    
},

{
    title: 'Light One On and Pop One Open',
    author: 'Eric Cocoletzi',
    img: 'https://m.media-amazon.com/images/I/416B6UaQC-L._SX331_BO1,204,203,200_.jpg',
    id: 2,
    
},

{
    title: 'Someplace Ive Never Been Touch, But Would Like To Someday',
    author: 'Eric Cocoletzi',
    img: 'https://m.media-amazon.com/images/I/41RF16ePK-L._SX331_BO1,204,203,200_.jpg',
    id: 3,
    
},

];

const names = ['Batman ', 'Spiderman ','The Flash'];
const newNames = names.map((name) => {
     return<h1>{name}</h1>;
});
console.log(newNames);

const Booklist = () => {
    return (
    <section className='booklist'>
        {books.map((book) => {
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