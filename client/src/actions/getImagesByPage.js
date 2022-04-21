import axios from "axios";
import { setImages } from "./setImages";

export const getImagesByPage = (page, category) => async (dispatch) => {
  try {
    const response = await axios.get(
      `/requestImages/change-page/${category}/${page}`
    );
    dispatch(setImages(response.data));
  } catch (err) {
    console.error(err);
  }
};
