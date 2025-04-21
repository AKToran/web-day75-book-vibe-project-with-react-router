import React from "react";
import { useLoaderData, useParams } from "react-router";
import "./bookDetails.css";
import { addToStorage } from "../../utilities/handleStorage";

const BookDetails = () => {
  const { id } = useParams();
  const idInt = parseInt(id);
  const books = useLoaderData();
  const book = books.find((b) => b.bookId === idInt);
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
    review,
  } = book;


  return (
    <div className="flex flex-col md:flex-row my-12">
      <div className="md:w-1/2 h-fit bg-base-300 rounded-2xl">
        <img className="p-20" src={image} alt="" />
      </div>
      <div className="p-8 md:w-1/2 space-y-6">
        <h1 className="text-4xl">{bookName}</h1>
        <p>By: {author}</p>
        <hr />
        <p>{category}</p>
        <hr />
        <p>Review: {review}</p>
        <h4>
          <span className="font-bold">Tag:</span>{" "}
          {tags.map((t, i) => (
            <span key={i} className="me-2">
              {t}
            </span>
          ))}
        </h4>
        <hr />
        <table>
          <tbody>
            <tr>
              <td className="pe-8">Number of Pages:</td>
              <td className="font-bold">{totalPages}</td>
            </tr>
            <tr>
              <td className="pe-8">Publisher:</td>
              <td className="font-bold">{publisher}</td>
            </tr>
            <tr>
              <td className="pe-8">Year of Publishing:</td>
              <td className="font-bold">{yearOfPublishing}</td>
            </tr>
            <tr>
              <td className="pe-8">Rating:</td>
              <td className="font-bold">{rating}</td>
            </tr>
          </tbody>
        </table>

        <button onClick={() =>{
          addToStorage(bookId)
        }} className="btn btn-accent btn-outline me-4 mb-0">
          Mark as Read
        </button>
        <button className="btn btn-info">Add To WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
