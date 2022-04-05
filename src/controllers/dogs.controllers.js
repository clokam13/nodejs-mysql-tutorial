const db = require("../utils/db.util");

// Define Dog Breeds array
const dogs = [
  { id: "1", name: "Happy", breed: "Golden Retriever" },
  { id: "2", name: "Silky", breed: "Labrador" },
  { id: "3", name: "Mika", breed: "Husky" },
];

const retrieve = (req, res) => {
  pool = db.getPool();

  let sql = "SELECT * FROM dogs";
  // Get dogs from database
  pool.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.status(200).send(result);
    }
  });
};

const retrieveByName = (req, res) => {
  pool = db.getPool();

  let sql = "SELECT * FROM dogs WHERE name=?";

  pool.query(sql, [req.params.name], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      if (result.length == 0) {
        res.sendStatus(404);
      } else {
        res.status(200).send(result);
      }
    }
  });
};

const insert = (req, res) => {
  // Insert a dog into the database
};

const update = (req, res) => {
  // Update a dog in the database
};

const remove = (req, res) => {
  // Delete a dog in the database
};

module.exports.retrieve = retrieve;
module.exports.retrieveByName = retrieveByName;
module.exports.update = update;
module.exports.insert = insert;
module.exports.remove = remove;
