import { Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { getImagesByCategory } from "../actions/getImagesByCategory";

const CategoryModal = ({ category, setCategory, setPage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpen = () => setIsModalOpen(true);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const updateCategory = (newCategory) => {
    dispatch(getImagesByCategory(newCategory));
    setIsModalOpen(false);
    setPage(1);
    setCategory(newCategory);
  };

  const categories = [
    "backgrounds",
    "fashion",
    "nature",
    "science",
    "education",
    "feelings",
    "health",
    "people",
    "religion",
    "places",
    "animals",
    "industry",
    "computer",
    "food",
    "sports",
    "transportation",
    "travel",
    "buildings",
    "business",
    "music",
  ];

  const style = {
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    alignItems: "center",
    padding: "15px",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: 600,
    maxHeight: 600,
    bgcolor: "background.paper",
    borderRadius: "3px",
    boxShadow: 24,
    "@media (max-width: 1024px)": {
      width: "90%",
      gridTemplateColumns: "1fr 1fr",
    },
  };

  return (
    <div className="top-button-container">
      <Button variant="contained" onClick={handleOpen}>
        Choose category
      </Button>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isModalOpen}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isModalOpen}>
          <Box sx={style}>
            {categories.map((cat) => {
              return (
                <Button
                  key={cat}
                  style={{
                    color:
                      cat === category
                        ? "rgb(255, 255, 255)"
                        : "rgb(0, 66, 209)",
                    backgroundColor:
                      cat === category
                        ? "rgb(0, 66, 209)"
                        : "rgb(255, 255, 255)",
                    margin: "10px",
                    fontSize: window.innerWidth > 1024 ? "15px" : "10.5px",
                  }}
                  variant="outlined"
                  size="small"
                  onClick={() => updateCategory(cat)}
                >
                  {cat}
                </Button>
              );
            })}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default CategoryModal;
