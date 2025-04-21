import React, { useEffect, useState } from "react";
import { getStoredBooks } from "../../utilities/handleStorage";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useLoaderData } from "react-router";
import BookLi from "../Book/BookLi";

const ReadList = () => {
  const [readBooks, setReadBooks] = useState([]);
  const books = useLoaderData(); //all books
  
  useEffect(() => {
    const readListId = getStoredBooks();
    //get the books that matches the ids of read list:
    const filterReadBooks = books.filter((book) => readListId.includes(book.bookId));
    setReadBooks(filterReadBooks);
  }, [books]);

  console.log(readBooks);

  return (
    <div className="my-20">
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>
        <TabPanel>
          {
            readBooks.map(book => <BookLi key={book.bookId} book={book}></BookLi>)
          }
        </TabPanel>
        <TabPanel>
          <h1>Wish List</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
