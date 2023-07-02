import React from 'react';
import { useState } from 'react';
import data from './data4';
import SingleQuestion from './Question.js';
import './index.css';
 

const ToggleQuestions = () => {
    const [questions,  ] = useState(data);
    return <>
        <div className='container'>
            <h3>Questions and Answers about Login</h3>
            <section className='info'>
                {questions.map((question) => {
                return <SingleQuestion key={question.id}
                {...question} />
                    })}
            </section>
        </div>
    </>
}

export default ToggleQuestions 