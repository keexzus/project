import React, { useState } from 'react';
 import BookGenre from '../BookGenre.js';
import Category from '../button-coco.js';
import books from '../list-of-books.js';
import { useGlobalContext } from '../context'

const TabsHome = () => {
    const [ bookItem, setBookItem ] = useState(books);
    // const [ categories, setCategories ] = useState([])
    const { closeSubmenu } = useGlobalContext()

    const filterItems = (category) => {
        if(category === 'all') {
            setBookItem(books);
            return;
        }
        const newBooks = books.filter((book) => book.category === category)
        setBookItem(newBooks)
 }
    return(
        
            <section className='section-3' onMouseOver={closeSubmenu}> 
                 
                    <h2>Santanero Literature</h2>
        <Category filterItems={filterItems} />
        <BookGenre books={bookItem} />
                
            </section>
        

    )
}

export default TabsHome; 

 