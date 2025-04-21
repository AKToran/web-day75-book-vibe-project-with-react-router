import React from "react";
import { FaStar } from "react-icons/fa";

const Book = ({ book }) => {
  const { bookName, author, image, review, rating, category,publisher } = book;
  return (
    <div className="card shadow-sm border-3 border-gray-400">
      <figure className="m-4 p-6 bg-base-300">
        <img
          className="h-[200px]"
          src={image}
          alt="Books"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {bookName}
          <div className="badge badge-secondary">{publisher}</div>
        </h2>
        <p>
          By: {author}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline"> <FaStar></FaStar> {rating}</div>
        </div>
      </div>
    </div>
  );
};

export default Book;
