const express = require("express");
const { API_URL, API_KEY, IMG_LIMIT } = require("../constants");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const response = await axios.get(
      `${API_URL}/?key=${API_KEY}&q=flowers&per_page=${IMG_LIMIT}&page=1&safesearch=true`
    );

    const {
      data: { hits },
    } = response;

    const sortedImages = hits.sort((a, b) => {
      return a.id - b.id;
    });

    res.json(sortedImages);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
