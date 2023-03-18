/**
 * BookDetail Component used to display individual book details
 */
import ReviewList from "../ReviewsList";
import styles from "./styles.module.css";

const BookDetail = (props) => {
  const { title, author, description, image } = props.data;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 text-center">
          <div className={styles.wrapper}>
            <img src={image} className="img-responsive" />
          </div>
        </div>
        <div className="col-md-8">
          <div className={styles.wrapper}>
            <h1>{title}</h1>
            <p className={styles.author}>{author}</p>
            <p>{description}</p>
          </div>

          <div className={styles.wrapper}>
            <ReviewList />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookDetail;
