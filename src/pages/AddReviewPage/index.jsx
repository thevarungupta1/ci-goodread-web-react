import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar";
import ReviewForm from "../../components/ReviewForm";
import Endpoints from '../../api/Endpoints';
import { useParams } from "react-router-dom";

const AddReviewPage = () => {
  const {id} = useParams()
  const [ book, setBook ] = useState({})

  useEffect(() => {
    fetchBookById()
  }, [id])
  
  const fetchBookById = () => {
    axios.get(Endpoints.GET_BOOK_BY_ID_URL +'/'+ id)
    .then(response => setBook(response.data.data))
    .catch(error => console.log(error))
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="wrapper">
              
                <img src={book.image} />
                
            </div>
          </div>
          <div className="col-md-8">
            <div className="wrapper">
            <h2>{ book.title }</h2>
                <p>{ book.author }</p>
                <p>{ book.description }</p>
              <ReviewForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AddReviewPage;
