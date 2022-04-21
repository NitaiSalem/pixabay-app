import axios from "axios";
import { setImages } from "./setImages";

export const getImages = () => async (dispatch) => {
    try {
      const response = await axios.get(`/requestImages`);
      dispatch(setImages(response.data));
    } catch (err) {
      console.error(err);
    }
  };
  


  