/**
  * Navbar Component used to display naigation bar which is common in every page
 */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  const onLogoutHandler = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  return (
    <div className="bg-dark">
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link class="navbar-brand" to="/">
            GoodRead
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
              {loggedIn ? (
                <Link onClick={onLogoutHandler} className="btn btn-light">
                  Logout
                </Link>
              ) : (
                <Link to="/login" className="btn btn-light">
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
