 
import React from 'react';
import { SlSocialTwitter } from "react-icons/sl";
import { SlPencil } from 'react-icons/sl'

const sublinks = [
    {
        page:'keex',
        links: [
            {label:'Twitter', icon:<SlSocialTwitter />,  url:'https://twitter.com/keexzus' },
            {label:'Blog', icon:<SlPencil />, url:'https://enriqueavalos.wordpress.com/'},
        ],
    },
    {
        page:'coco',
        links: [
            {label:'Twitter', icon:<SlSocialTwitter/>,  url:'https://twitter.com/ELCOCOLETZI'},
            {label:'Blog', icon:<SlPencil />, url:'https://ericcocoletzi.com/'},
        ],
    },
    
];

export default sublinks;