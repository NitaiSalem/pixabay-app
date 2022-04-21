import { Popover, Typography } from "@mui/material";
import { useState } from "react";

const InfoModal = ({ image }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const id = isOpen ? "simple-popover" : undefined;

  const openModal = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="info-modal-container">
      <div className="modal-button-container" onClick={openModal}>
      </div>
      <Popover id={id} anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        <Typography sx={{ p: 2 }}>user: {image.user}</Typography>
        <Typography sx={{ p: 2 }}>views: {image.views}</Typography>
        <Typography sx={{ p: 2 }}>likes: {image.likes}</Typography>
        <Typography sx={{ p: 2 }}>id: {image.comments}</Typography>
        <Typography sx={{ p: 2 }}>collections:{image.collections} </Typography>
        <Typography sx={{ p: 2 }}>downloads: {image.downloads}</Typography>
      </Popover>
    </div>
  );
};

export default InfoModal;
