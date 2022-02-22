import { Link, useLocation } from "react-router-dom";
import styles from "./movieList.module.css";

const MoviesList = ({ data }) => {
  const location = useLocation();
  return (
    <div>
      <ul className={styles.beads}>
        {data.map((item) => (
          <li key={item.id}>
            <Link
              to={{ pathname: `/movies/${item.id}`, state: { from: location } }}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesList;
