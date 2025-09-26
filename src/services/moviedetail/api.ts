import API from "../api";
import type { MovieDetail } from "./type";

export const getMovieDetail = async (id: number) => {
  try {
    const response = await API.get(`movie/${id}`);
    if (response.status === 200) {
      return response.data as MovieDetail;
    }
  } catch (error: any) {
    console.error(error);
  }
};
