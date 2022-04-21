import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getImagesByPage } from "../actions/getImagesByPage";
import CategoryModal from "./CategoryModal";

const NavButtons = ({ images }) => {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("flowers");
  const dispatch = useDispatch();

  const changePage = (page, diff, category) => {
    dispatch(getImagesByPage(page + diff, category));
    setPage(page + diff);
  };

  return (
    <div className="nav-buttons-container">
      <div className="next-button-container">
        <Button
          className="next-button"
          disabled={page <= 1}
          onClick={() => {
            changePage(page, -1, category);
          }}
        >
          Prev
        </Button>
      </div>

      <CategoryModal
        setCategory={setCategory}
        setPage={setPage}
        category={category}
      />

      <div className="next-button-container">
        <Button
          className="next-button"
          disabled={images?.length !== 9}
          onClick={() => {
            changePage(page, 1, category);
          }}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default NavButtons;
