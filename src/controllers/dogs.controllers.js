const db = require("../utils/db.util");

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
  pool = db.getPool();

  let sql = "INSERT INTO dogs (name, breed) VALUES (?, ?)";

  pool.query(sql, [req.body.name, req.body.breed], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(202);
    }
  });
};

const update = (req, res) => {
  // Update a dog in the database based on ID
  pool = db.getPool();

  let sql = "UPDATE dogs SET name=? , breed=? WHERE id=?";

  pool.query(
    sql,
    [req.body.name, req.body.breed, req.params.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        if (result.affectedRows == 0) {
          res.sendStatus(404);
        } else {
          res.sendStatus(202);
        }
      }
    }
  );
};

const remove = (req, res) => {
  // Delete a dog in the database
  pool = db.getPool();

  let sql = "DELETE FROM dogs WHERE id=?";

  pool.query(sql, [req.params.id], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      if (result.affectedRows == 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(202);
      }
    }
  });
};

module.exports.retrieve = retrieve;
module.exports.retrieveByName = retrieveByName;
module.exports.update = update;
module.exports.insert = insert;
module.exports.remove = remove;
