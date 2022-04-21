import InfoModal from "./InfoModal";

const Images = ({ images }) => {
  return (
    <div className="images-container">
      {images.map((image) => {
        return (
          <div className="image-container" key={image.id}>
            <InfoModal image={image} />
            <img
              className="image"
              src={image.largeImageURL}
              alt={image.tags}
              id={image.id}
              width="100%"
              height="100%"
              style={{ objectFit: "cover", maxHeight: "260px" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Images;
