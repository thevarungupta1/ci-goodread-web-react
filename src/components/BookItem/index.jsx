/**
 * BookItem Component used to display single item in grid layout
 */
import { Link } from "react-router-dom";

const BookItem = (props) => {
  const { _id, title, image } = props.data;
  return (
    <div class="col-sm-3">
      <div class="card" style={{ margin: "15px 0px" }}>
        <img
          src={image}
          class="card-img-top"
          alt={title}
          style={{ height: "300px" }}
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>

          <Link to={"/books/detail/" + _id} class="btn btn-dark btn-block">
            Show Details
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BookItem;
