import "./App.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getImages } from "./actions/getImages";
import Images from "./components/Images";
import NavButtons from "./components/NavButtons";

function App() {
  const images = useSelector((state) => state.fetchedImages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getImages());
  }, []);

  return (
    <div className="app">
      {images.length > 0 && (
        <div className="app-body-container">
          <div className="nav-buttons-container">
            <NavButtons images={images} />
          </div>
          <Images images={images} />
        </div>
      )}
    </div>
  );
}

export default App;
