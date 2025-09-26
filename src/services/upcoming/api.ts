import API from "../api";
import type { ResponseData } from "./type";

export const getUpcoming = async () => {
  try {
    const response = await API.get(`movie/upcoming`);

    if (response.status === 200) {
      return response.data as ResponseData;
    }
  } catch (error: any) {
    console.error(error);
  }
};
