import { useState, useEffect } from "react";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Endpoints from "../../api/Endpoints";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const LoginPage = () => {
  // initialValues
  const initialValues = {
    email: "",
    password: "",
  };

  // onSubmit
  const onSubmit = (values) => {
    axios
      .post(Endpoints.LOGIN_URL, values)
      .then(
        (response) => {},
        (error) => {}
      )
      .catch((error) => console.log(error));
  };

  // validationSchema
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(6, "password must be 6 character long"),
  });

  // seting up formik
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2 className="text-center">GoodRead</h2>
          <div className={styles.wrapper}>
            <h2>Login</h2>
            <hr />
            <form>
              <div className="form-group">
                <label htmlFor="name">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className={`form-control ${
                    formik.touched.email && formik.errors.email
                      ? "is-invalid"
                      : null
                  }`}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.email && formik.errors.email ? (
                  <small className="text-danger">{formik.errors.email}</small>
                ) : null}
              </div>

              <div className="form-group">
                <label htmlFor="name">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className={`form-control ${
                    formik.touched.password && formik.errors.password
                      ? "is-invalid"
                      : null
                  }`}
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                  <small className="text-danger">
                    {formik.errors.password}
                  </small>
                ) : null}
              </div>

              <input
                type="submit"
                value="Login"
                className="btn btn-primary btn-block"
              />
            </form>
            <br />
            <p className="text-center">
              <Link>New User? Click Here</Link>
            </p>
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default LoginPage;
