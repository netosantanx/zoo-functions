const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(animal) {
  if (!animal) {
    const contador = {};
    species.forEach((element) => {
      contador[element.name] = element.residents.length;
    });
    return contador;
  }
  const foundAnimal = (obj) => species.find((type) => type.name === obj.specie);
  if (Object.entries(animal).length === 1) {
    return foundAnimal(animal).residents.length;
  }
  return foundAnimal(animal).residents.filter(
    (element) => element.sex === animal.sex,
  ).length;
}

module.exports = countAnimals;
