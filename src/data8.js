 
import React from 'react';
import { SlSocialTwitter } from "react-icons/sl";
import { SlPencil } from 'react-icons/sl'
import { SlSocialInstagram } from 'react-icons/sl'

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
            
            {label:'Instagram', icon:<SlSocialInstagram/>, url:'https://www.instagram.com/ericcocoletzi/'},
        ],
    },
    
];

export default sublinks;