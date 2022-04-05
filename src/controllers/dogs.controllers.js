// Define Dog Breeds array
const dogs = [
  { id: "1", name: "Happy", breed: "Golden Retriever" },
  { id: "2", name: "Silky", breed: "Labrador" },
  { id: "3", name: "Mika", breed: "Husky" },
];

const retrieve = (req, res) => {
  res.status(200).send(dogs);
};

const retrieveByName = (req, res) => {
  var notFound = true;
  // Find dog breed based on name
  dogs.forEach((dog) => {
    if (dog.name == req.params.name) {
      //res.status(200).send(`${req.params.name} is a ${dog.breed}`);
      notFound = false;
      res.status(200).send(dog);
    }
  });

  if (notFound) res.sendStatus(404);
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
