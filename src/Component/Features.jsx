import React from 'react';
import { Link } from 'react-router-dom';

const Features = ({ quiz }) => {
  const { id, logo, name } = quiz;
  return (
    <div className="card card-compact shadow-slate-600 lg:w-96 bg-base-100 shadow-xl">
      <figure><img className='w-[250px]' src={logo} alt="Shoes" /></figure>
      <div className="card-body">
        <p className='text-xl'>{name}</p>
        <div className="card-actions justify-end">
          <Link to ={`/quizes/${id}`}>
            <button className="btn btn-primary">Start Practice</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
