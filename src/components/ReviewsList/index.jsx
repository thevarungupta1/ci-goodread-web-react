import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const ReviewList = () => {
    const { id } = useParams()
    const [ reviews, setReviews ] = useState([])

    const fetchReviewsByBookId = () => {
        axios.get('')
        .then(response => setReviews(response.data.data))
        .catch(error => console.log(error))
    }
    return(
        <>
            <h2>Rating & Reviews</h2>
            <br />
            <Link to={`/books/${ id }/review`} className="btn btn-warning btn-block">Write a Review</Link>
            <br />
            <hr />
            <p>Displaying { reviews.length } reviews</p>
            

        </>
    )
}

export default ReviewList;
