/**
 * BookList Component used for display Books in a Grid
 * 
 */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import BookItem from "../BookItem";

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get(Endpoints.GET_ALL_BOOKS_URL)
      .then((response) => setBooks(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <br />
      <h3 className="text-center">All Books</h3>
      <div class="row">
        {books.map((book) => (
          <BookItem data={book} />
        ))}
      </div>
    </div>
  );
};
export default BookList;
