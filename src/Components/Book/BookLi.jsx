import React from "react";
import { Link } from "react-router";

const BookLi = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    rating,
    category,
    yearOfPublishing,
    publisher,
    totalPages,
  } = book;
  return (
    <div className="my-4 p-4 shadow-lg border-2 border-gray-300 rounded-lg md:flex md:gap-6">
      <div>
        <img className="w-24" src={image} alt="Book image" />
      </div>
      <div>
        <h1 className="text-2xl">{bookName}</h1>
        <h3>By: {author}</h3>
        <div className="flex gap-8">
          <p>
            Tags: #{tags[0]} #{tags[1]}
          </p>
          <p>Published Year: {yearOfPublishing}</p>
        </div>
        <p>Publisher: {publisher}</p>
        <p>Category: {category}</p>
        <div className="flex gap-8 items-center">
          <p>Rating: {rating}</p>
          <p>Pages: {totalPages}</p>
          <Link to={`/bookDetails/${bookId}`}>
            <button className="btn btn-sm btn-accent">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookLi;
