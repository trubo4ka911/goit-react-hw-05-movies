import { useEffect, useState, Suspense } from "react";
import { getCast } from "../Api/moviesApi";
import { useParams } from "react-router-dom";
import styles from "./views.module.css";

export default function MovieCreditView() {
  const [casts, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    getCast(movieId).then((data) => setCast(data));
  }, [movieId]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ul className={styles.actors}>
        {casts?.cast?.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <img
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                  : "https://s1.iconbird.com/ico/0612/practika/w256h2561339698323user.png"
              }
              alt=""
            />
          </li>
        ))}
      </ul>
    </Suspense>
  );
}
