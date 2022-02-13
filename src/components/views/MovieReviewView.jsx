import { useEffect, useState, Suspense } from "react";
import { getReview } from "../Api/moviesApi";
import { useParams } from "react-router-dom";
import styles from "./views.module.css";

export default function MovieReviewView() {
  const [reviews, setReviews] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    getReview(movieId).then((data) => setReviews(data));
  }, [movieId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {reviews &&
        (!reviews.results.length ? (
          <p>No reviews</p>
        ) : (
          <ul className={styles.review}>
            {reviews.results.map((review) => (
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
