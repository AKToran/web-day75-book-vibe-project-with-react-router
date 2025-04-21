import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName, author, bookId, image, tags, rating, category, yearOfPublishing } =
    book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card shadow-sm border-3 border-gray-400 h-full">
        <figure className="m-4 p-6 bg-base-300">
          <img className="h-[200px]" src={image} alt="Books" />
        </figure>
        <div className="card-body">
          <div>
            {tags.map((t, index) => (
              <small
                className="border-1 border-sky-600 rounded-lg me-6 p-1 bg-base-300 text-black text-sm"
                key={index}
              >
                {t}
              </small>
            ))}
          </div>
          <h2 className="card-title text-2xl">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>By: {author}</p>
          <hr className="border-b-2 border-dashed border-gray-200" />
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              <FaStar></FaStar> {rating}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
