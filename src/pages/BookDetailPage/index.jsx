import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import { useParams } from "react-router-dom";
import Endpoints from "../../api/Endpoints";
import BookDetail from "../../components/BookDetail";

const BookDetailPage = () => {
  const { id } = useParams();
  const [book, setBooks] = useState({});

  useEffect(() => {
    fetchBookById();
  }, [id]);

  const fetchBookById = () => {
    axios
      .get(Endpoints.GET_BOOK_BY_ID_URL + "/" + id)
      .then((response) => setBooks(response.data.data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navbar />
      <BookDetail data={book} />
    </>
  );
};

export default BookDetailPage;
