import './index.css';


const firstBook = {
    title: 'The Book of Freedom: Exit the Simulation',
    author: 'Keexzus',
    img: 'https://m.media-amazon.com/images/I/41-Ii9NlK1L.jpg',
    
};

const secondBook = {
    title: 'Light One On and Pop One Open',
    author: 'Eric Cocoletzi',
    img: 'https://m.media-amazon.com/images/I/416B6UaQC-L._SX331_BO1,204,203,200_.jpg',
    
};

const Booklist = () => {
    return (
    <section className='booklist'>
        <Book 
            author= {firstBook.author}
            title= {firstBook.title}
            img= {firstBook.img}
            >
             <p>
                'The Book of the Century.' - Anon
                </p> 
                <button className="button-52">
                    Buy Book
                    </button>
        </Book>
        
        < Book 
            author= {secondBook.author}
            title= {secondBook.title}
            img= {secondBook.img}
            >
        </Book>

    </section>
    );
    
}

// const Book = ({ img, title, author, children }) => {
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
        // can also do the following:
        //const { img, title, author } = props;
        //return (
        //<article className='book'
        //img src={img} alt={title} />
        //<h2>{title}</h2>
        //<h4>{author}</h4>
        //</article>
        //or simply destructure in function parameters
        //const Book = ({ img, title, author }) => {
        //return (
        //<article className='book'>
        //<img src={img} alt={title} />
        //<h2>{title}</h2>
        //<h4>{author}</h4>

//         const Book = (props) => {
//    console.log(props)
//     return (
         
//         <article className='book'>
//         <img src={props.img} alt={props.title} />
//         <h2>{props.title}</h2>
//         <h2>{props.author}</h2>



export default Booklist; 