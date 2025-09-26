import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useMovieDetail from "../../hooks/movie/useMovieDetail";
import MovieComponent from "../../components/movie";
import { usePopularMovie } from "../../hooks/movie/usePopular";
import { getMovieDetail, type MovieDetail } from "../../services/moviedetail";

const DetailScreen = () => {
  const navigate = useNavigate();
  const { popularMovie } = usePopularMovie();
  const { id } = useParams<{ id: string }>();

  const { movie, loading, error } = useMovieDetail(Number(id));
  
  const [movieDetails, setMovieDetails] = useState<Record<number, MovieDetail>>({});
  
    useEffect(() => {
      const fetchDetails = async () => {
        const detailsMap: Record<number, MovieDetail> = {};
        for (const movie of popularMovie) {
          const detail = await getMovieDetail(movie.id);
          if (detail) {
            detailsMap[movie.id] = detail;
          }
        }
        setMovieDetails(detailsMap);
      };
  
      if (popularMovie.length > 0) {
        fetchDetails();
      }
    }, [popularMovie]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movie) return <p>No data found</p>;
  return (
    <div className="w-full mt-24 pl-4">
      <div className="grid grid-cols-2 gap-4">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg w-full h-[350px] object-cover"
        />
        <div>
          <h1 className="text-2xl font-bold">{movie.title}</h1>
          <div className="flex flex-wrap font-medium mt-1">
            <div className="mr-3">Genre: {movie.genres.map(genre => genre.name).join(', ')}</div>
            <div className="mr-3">{movie.runtime} minutes</div>
            {/* <img src="./assets/star.png" alt="" className="w-[14px] h-[14px] mr-2"/> */}
            <div>⭐{movie.vote_average}</div>
          </div>
          <p>Synopsis:</p>
          <p className="mt-2 text-gray-600">{movie.overview}</p>

          <button
            onClick={() => navigate(-1)}
            className="mt-6 px-4 py-2 text-white rounded-lg cursor-pointer"
            style={{backgroundColor: "#0A1128"}}
          >
          Back
          </button>
        </div>
      </div>
      <h1 className="text-2xl font-bold font-poppins mt-10">Don't Miss These</h1>
        <div className="flex flex-row gap-1 overflow-scroll scrollbar-hidden pt-3">
              {popularMovie.map((movie) => (
                <MovieComponent key={movie.id} movie={movie} detail={movieDetails[movie.id]} />
              ))}
            </div>
    </div>
    
  );
};

export default DetailScreen;
