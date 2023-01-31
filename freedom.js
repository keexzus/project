
const Booklist = () => {
    return <section className='booklist'>
        <Book job='developer' />

    </section>
}

const Book = (props) => {
    console.log(props)
    const title ='The Book of Freedom: Exit the Simulation';
    return (
        <article className='book'>
        <Image />
        <h2>{title}</h2>
        <Author />
        </article>
    );
};

const Image = () => (
    <img src='https://m.media-amazon.com/images/I/41-Ii9NlK1L.jpg' 
    alt='The Book of Freedom: Exit the Simulation'/>
)

const Author = () => <h4>Keexzus</h4>

export default Booklist 