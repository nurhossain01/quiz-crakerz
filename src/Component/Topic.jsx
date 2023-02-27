import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Features from "./Features"

const Topic = () => {
  const quizes = useLoaderData();
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-9 lg:px-12 lg:py-48 md:py-14 sm:py-14'>
      {
        quizes.data.map(quiz => <Features key={quiz.id} quiz={quiz}></Features>)
      }
    </div>
  );
};

export default Topic;