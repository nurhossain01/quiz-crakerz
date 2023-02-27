import React, { useState } from 'react';

const quetion = ({quetion}) => {
 
  const {options, question,correctAnswer} = quetion;
 
  return (
    <div className='text-start pl-24'>
      <h1 className='text-2xl text-pink-400'>{question}</h1>
      <ul className='pl-16 pb-8 pt-4'>
        {
          options.map(option =>
            <form action="">
              <input className='pr-2' type="radio" />{option}
            </form>
          )
        }
      </ul>
    </div>
  );
};

export default quetion;

