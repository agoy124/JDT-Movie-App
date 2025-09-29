// import React from "react";
import { Card } from "../card";

import type { Movie } from "../../services/movie";
import type { MovieDetail } from "../../services/moviedetail";
import { useNavigate } from "react-router-dom";

interface Props {
  movie: Movie;
  detail?: MovieDetail;
}

const MovieComponent = ({ movie, detail }: Props) => {
  const navigate = useNavigate();
  const { title, poster_path, vote_average, id } = movie;
  const runtime = detail?.runtime;
  const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

  return (
    <div onClick={() => navigate(`/detail/${id}`)} className="cursor-pointer">
      <Card color="#FFFFFF" borderRadius="10px" width="200px">
        <div className="flex flex-col">
          {poster_path ? (
            <img
              src={`${IMAGE_BASE_URL}${poster_path}`}
              alt={title}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <img
            src="/fallback.jpg"
            alt="No poster available"
            className="w-full h-full object-cover rounded-md"
            />
          )}
          <div className="flex flex-wrap text-gray-950 font-medium text-[12px] mt-2">
            <p 
          className="w-9/12 font-poppins text-left pr-1">{title}</p>
          <img
          src="src\assets\star.png"
          alt="Movie Rating"
          className="w-[12px] h-[12px] mt-1" />
          <div>
            {vote_average}
          </div>
          <div>{runtime} mins</div>
          </div>
          
          
        </div>
      </Card>
    </div>
    

  );
};


export default MovieComponent;
