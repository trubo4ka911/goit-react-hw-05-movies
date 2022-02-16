import { useEffect, useState, Suspense } from "react";
import { getReview } from "../../Api/moviesApi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./reviews.module.css";

export default function MovieReviewView() {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getReview(movieId)
      .then((data) => setReviews(data.results))
      .catch(toast.error("Not found!"));
  }, [movieId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {reviews &&
        (!reviews?.length ? (
          <p>No reviews</p>
        ) : (
          <ul className={styles.review}>
            {reviews.map((review) => (
              <li key={review.id}>
                <h4>{review.author}</h4>
                <p>{review.content}</p>
                <hr />
              </li>
            ))}
          </ul>
        ))}
    </Suspense>
  );
}
