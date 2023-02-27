import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quetion from "./Quetion"
const Quiz = () => {
  const topics = useLoaderData();
  console.log(topics.data.questions);
  
  return (
    <div className='py-24'>
     {
      topics.data.questions.map(quetion => <Quetion quetion={quetion}></Quetion>)
     }
    </div>
  );
};

export default Quiz;