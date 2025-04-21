const getStoredBooks = () => {
  const storedBooks = localStorage.getItem("readList");
  let books;
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  } else {
    books = [];
  }
  return books;
};

const addToStorage = (id) => {
  const storedBooks = getStoredBooks();

  if(storedBooks.includes(id)){
    alert("Book already exits.")
  }
  else{
    storedBooks.push(id);
    localStorage.setItem('readList', JSON.stringify(storedBooks));
  }
};

export { addToStorage, getStoredBooks };
