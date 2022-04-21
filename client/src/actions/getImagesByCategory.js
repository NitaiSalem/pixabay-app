import axios from "axios";
import { setImages } from "./setImages";

export const getImagesByCategory = (category) => async (dispatch) => {
  try {
    const response = await axios.get(`/requestImages/change-category/${category}`);
    dispatch(setImages(response.data));
  } catch (err) {
    console.error(err);
  }
};


