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

module.exports.retrieve = retrieve;
module.exports.retrieveByName = retrieveByName;
