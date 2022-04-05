const express = require("express");
const dogs = require("../controllers/dogs.controllers");

const router = express.Router();

// GET route for Dogs
router.get("/dogs", dogs.retrieve);

// GET route for Dog Breed Search
router.get("/dog/:name", dogs.retrieveByName);

module.exports = router;
