// import { useParams, useLocation } from "react-router-dom";
// import {Link} from "react-router-dom"

// export default function MovieCreditView({ credits }) {
//     const location = useLocation();
//     const { movieId } = useParams();
//     const credit = credits.find(credit=>credit.id===Number(movieId))
//     return (
//         <>
//             <h2>{credit.name}</h2>

//             <ul>
//                 {credit.movies.map(movie => (
//                     <li key={movie.id}>
//                         <Link to={{
//                             pathname: `/movies/${movie.id}`,
//                             state: {
//                                 from: {
//                                     location,
//                                     labal: "Back"
//                             }
//                             }
//                         }}>
//                             {movie.title}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </>)
// }
import { useEffect, useState } from "react";
import { getCast } from "../Api/moviesApi";
import { useParams } from "react-router-dom";

export default function MovieCreditView() {
  const [casts, setCast] = useState(null);

  const { moviesId } = useParams();

  useEffect(() => {
    getCast(moviesId).then((data) => setCast(data));
  }, [moviesId]);
  console.log(casts);
  return (
    casts && (
      <ul>
        {casts.cast.map((item) => (
          <li key={item.id}>
            <p>{item.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/w200${item.profile_path}`}
              alt=""
            />
          </li>
        ))}
      </ul>
    )
  );
}
