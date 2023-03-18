import Constants from "./Contants";

const Endpoints = {
    LOGIN_URL: `${ Constants.BASE_URL }/auth/login`,
    REGISTER_URL: `${ Constants.BASE_URL }/auth/register`,
    GET_ALL_BOOKS_URL: `${ Constants.BASE_URL }/books`,
    GET_BOOK_BY_ID_URL: `${ Constants.BASE_URL }/books`,
}

export default Endpoints;