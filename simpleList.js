import './index.css';

const books = [
    
{
    title: 'The Book of Freedom: Exit the Simulation',
    author: 'Keexzus',
    img: 'https://m.media-amazon.com/images/I/41-Ii9NlK1L.jpg',
    
},

{
    title: 'Light One On and Pop One Open',
    author: 'Eric Cocoletzi',
    img: 'https://m.media-amazon.com/images/I/416B6UaQC-L._SX331_BO1,204,203,200_.jpg',
    
},

];

const names = ['Batman ', 'Spiderman ','The Flash'];
const newNames = names.map((name) => {
     return<h1>{name}</h1>;
});
console.log(newNames);

const Booklist = () => {
    return <section className='booklist'>{newNames}</section>;
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