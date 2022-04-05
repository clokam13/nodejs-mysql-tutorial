const express = require("express");
const dogs = require("../controllers/dogs.controllers");

const router = express.Router();

// GET route for Dogs
router.get("/dogs", dogs.retrieve);

// GET route for Dog Breed Search
router.get("/dog/:name", dogs.retrieveByName);

// POST route to add a new Dog
router.post("/dog", dogs.insert);

// PUT route to update a Dog
router.post("/dog/:id", dogs.update);

// DELETE route to delete a Dog
router.delete("dog/:id", dogs.remove);

module.exports = router;
