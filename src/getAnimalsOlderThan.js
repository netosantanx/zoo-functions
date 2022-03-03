const data = require('../data/zoo_data');

const { species } = data;
function getAnimalsOlderThan(animal, age) {
  const verificador = species.find((specie) => specie.name === animal);
  return verificador.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
