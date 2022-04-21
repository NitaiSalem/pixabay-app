const express = require("express");
const { API_URL, API_KEY, IMG_LIMIT } = require("../constants");
const router = express.Router();
const axios = require("axios");

router.get("/:category/:page", async (req, res) => {
  const { category, page } = req.params;
  try {
    const response = await axios.get(
      `${API_URL}/?key=${API_KEY}&q=${category}&per_page=${IMG_LIMIT}&page=${page}&safesearch=true`
    );
    const {
      data: { hits },
    } = response;

    //sorting by id as I haven't seen a date property in the image object.
    const sortedImages = hits.sort((a, b) => {
      return a.id - b.id;
    });

    res.json(sortedImages);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
