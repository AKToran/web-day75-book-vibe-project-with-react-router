import React, { useEffect, useState } from "react";
import { getStoredBooks } from "../../utilities/handleStorage";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import BookLi from "../Book/BookLi";
import { FaSortDown } from "react-icons/fa";

const ReadList = () => {
  const [sort, setSort] = useState("");

  const [readBooks, setReadBooks] = useState([]);
  const books = useLoaderData(); //all books

  useEffect(() => {
    const readListId = getStoredBooks();
    //get the books that matches the ids of read list:
    const filterReadBooks = books.filter((book) =>
      readListId.includes(book.bookId)
    );
    setReadBooks(filterReadBooks);
    setSort("");
  }, [books]);

  const handleSort = type => {
    setSort(type);

    if(type ==="Pages"){
      const sortedByPages = [...readBooks.sort((a,b)=> a.totalPages - b.totalPages)]
      setReadBooks(sortedByPages);
    } 
    if(type === "Ratings"){
      const sortedByRatings = [...readBooks.sort((a,b) => a.rating - b.rating)]
      setReadBooks(sortedByRatings);
    }
  }

  return (
    <div className="my-20">
      <div className="text-center ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-accent text-lg">
          Sort By {sort? `: ${sort}`: <FaSortDown></FaSortDown>} 
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-full p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("Ratings")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>
        <TabPanel>
          {readBooks.map((book) => (
            <BookLi key={book.bookId} book={book}></BookLi>
          ))}
        </TabPanel>
        <TabPanel>
          <h1>Wish List</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
