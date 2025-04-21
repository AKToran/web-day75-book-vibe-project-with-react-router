import React from 'react';
import bookimg from '../../assets/books.jpg';

const Banner = () => {
  return (
    <div className='my-8 p-20 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-4 bg-base-200'>
      <div className='space-y-8'>
        <h1 className='text-5xl font-semibold'>Books to freshen up your bookshelf</h1>
        <button className='btn btn-accent'>View List</button>
      </div>
      <div>
        <img src={bookimg} alt="" />
      </div>
    </div>
  );
};

export default Banner;