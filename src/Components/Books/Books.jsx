import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(()=>{
    fetch("bookData.json")
    .then(res =>res.json())
    .then(data => setAllBooks(data));
  },[])

  // console.log(allBooks);
  return (
    <div>
      <h1 className='text-4xl lg:text-5xl text-center font-bold my-12'>Books</h1>
      <div className='p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch'>
        {
          allBooks.map(book => <Book key={book.bookId} book={book}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;