import { useEffect, useState } from "react";
import { getMovieDetail, type MovieDetail } from "../../services/moviedetail";

const useMovieDetail = (id: number) => {
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getMovieDetail(id);
        if (response) {
          setMovie(response);
        }
      } catch (err: any) {
        setError(err.message || "Failed to fetch movie detail");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { movie, loading, error };
};

export default useMovieDetail;
