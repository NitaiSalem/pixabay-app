const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const requestImages = require("./routes/fetchImages");
const fetchImagesByPage = require("./routes/fetchImagesByPage");
const fetchImagesByCategory = require("./routes/fetchImagesByCategory");

app.use(cors());

// Routes
app.use("/requestImages", requestImages);
app.use("/requestImages/change-page", fetchImagesByPage);
app.use("/requestImages/change-category", fetchImagesByCategory);


app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occured, server can't start", error);
});
