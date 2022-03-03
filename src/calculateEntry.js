const data = require('../data/zoo_data');

const { prices } = data;
const adultValue = prices.adult; // - de 18 anos
const childValue = prices.child; // entre 18 e 50
const seniorValue = prices.senior; // acima de 50
function countEntrants(entrants) {
  if (!entrants || !entrants.length) { // Ideia do ! e do !entrants.length tirada de code review do Henrique Gouveia, por aqui tava sempre dando falha ao receber objeto vazio :P
    return 0;
  }
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  return {
    child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  const allPersons = countEntrants(entrants);
  if (!allPersons) {
    return 0;
  }
  const allChildValue = allPersons.child * childValue;
  const allAdultValue = allPersons.adult * adultValue;
  const allSeniorValue = allPersons.senior * seniorValue;
  const totalValue = allChildValue + allAdultValue + allSeniorValue;
  return totalValue;
}

module.exports = { calculateEntry, countEntrants };
