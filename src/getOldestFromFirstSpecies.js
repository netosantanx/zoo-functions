const data = require('../data/zoo_data');

const { species, employees } = data;
function getOldestFromFirstSpecies(employeeId) {
  const animal = employees.find(({ id }) => id === employeeId).responsibleFor[0];
  const employee = species.find(({ id }) => id === animal).residents;
  return Object.values(employee.sort((a, b) => b.age - a.age)[0]);
}

module.exports = getOldestFromFirstSpecies;
