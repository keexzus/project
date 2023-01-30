import React from 'react';
import axios from 'axios';
import '../index.css';

import { useState } from 'react';
 

const url = 'https://icanhazdadjoke.com/';
// Accept : 'application/json'

const AxiosExample = () => {
  const [joke, setJoke] = useState('Click button for joke');

  const fetchDadJoke = async () => {
      try {
         const { data } = await axios(url, {
          headers: {
          Accept: 'application/json',
          },
       })
       console.log(data);
      setJoke(data.joke)
     } catch (error) {
     console.log(error.response);
    };
  }
  return (
    <section className='section text-center'>
      <button className='btn' onClick={fetchDadJoke}>
        random joke
      </button>
      <p className='dad-joke'>{joke}</p>
      <article className='section'>
        
        Axios HTTP Library is used to retrive data.
        API has joke limit.
      </article>
    </section>
  );
};
export default AxiosExample;
