import { Link, useLocation } from "react-router-dom";

const MoviesList = ({ data }) => {
  const location = useLocation();
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesList;
