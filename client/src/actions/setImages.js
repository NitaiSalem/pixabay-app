import {SET_IMAGES} from "./types";

export const setImages = (details) => {
    return {
      type: SET_IMAGES,
      payload: details,
    };
  };
  