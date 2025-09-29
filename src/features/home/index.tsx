// import { useNavigate } from "react-router-dom";
import { usePopularMovie } from "../../hooks/movie/usePopular";
import MovieComponent from "../../components/movie";
import Upcoming from "../../components/movieupcoming";
import useUpcoming from "../../hooks/movie/useUpcoming";
import { useEffect, useState } from "react";
import { getMovieDetail } from "../../services/moviedetail/api";
import type { MovieDetail } from "../../services/moviedetail/type";

const HomeScreen = () => {
  // const navigate = useNavigate();
  const { popularMovie } = usePopularMovie();
  const { upcomingMovie } = useUpcoming();

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

  return (
    // <div className="flex flex-row">
      
      <div className="w-full">
        <div className="">
          <div className="flex flex-col gap-3 ml-10">
            <h1 className="text-2xl font-bold mt-24 font-poppins">TRENDING NOW</h1>
            <div className="flex flex-row gap-1 overflow-scroll scrollbar-hidden py-2">
              {popularMovie.map((movie) => (
                <MovieComponent key={movie.id} movie={movie} detail={movieDetails[movie.id]} />
              ))}
            </div>
            <h1 className="text-2xl font-bold mt-12 font-poppins">UPCOMING</h1>
            <div className="flex flex-row gap-1 overflow-scroll scrollbar-hidden py-2">
              {upcomingMovie.map((upcoming) => (
                <Upcoming key={upcoming.id} upcoming={upcoming}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    // </div>
    
  );
};

export default HomeScreen;
