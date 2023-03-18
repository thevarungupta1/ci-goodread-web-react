import { useState } from 'react';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const ReviewForm = () => {
    const initialValues = {
        userId: '',
        name: '',
        email: '',
        bookId: '',
        content: '',
        rating: ''
    }

    const onSubmit = (values) => {
        axios.post()
        .then(response => {

        }, (error) => {

        }).catch(error => console.log(error))
    }

    const validationSchema = Yup.object({
        email: Yup.string()
          .required("email is required")
          .email("email is not valid"),
        password: Yup.string()
          .required("password is required")
          .min(6, "password must be 6 character long"),
      });

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
        validateOnMount: true
    })

    return(
        <div>
            <h2>Write a Review</h2>
            <hr />
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">What did you think?</label>
                    <textarea className='form-control'  cols="30" rows="10"></textarea>
                </div>

                <input type="submit" value="Submit" className="btn btn-primary btn-block" />
            </form>
        </div>
    )
}
export default ReviewForm;
