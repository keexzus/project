import React from "react";
import '../index.css';
// import { Link } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Greeting from './greeting.js';



const About = () => {
  return (
    <section >
      

        <div className='container-2'> 
      <p>This is a ReactJS site</p>
         <p>Made by Keex in the USA</p>
         <p>Goal is to escape the matrix</p>
         <br></br>
         <p>Skills:</p>
         <br></br>
         <ul>
          <li>ReactJS</li>
          <li>JSX</li>
          <li>CSS</li>
          <li>React Router</li>
         <li>Axios HTTP Library</li>
         <li>Rest API's</li>
         <li>not an expert in everything,<br></br>
            but I'll figure it out
         </li>
         <li>backend functionality: Summer 2023</li>
         </ul>
      </div>
      
    
    </section>
  );
};

export default About;
