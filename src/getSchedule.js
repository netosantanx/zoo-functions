const data = require('../data/zoo_data');

const { species, hours } = data;
const getAnimal = species.map(({ name }) => name);
const dayKeys = Object.keys(hours);

const getDay = (day, { open, close }) => {
  const workTime = `Open from ${open}am until ${close}pm`;
  const animals = species
    .filter((specie) => specie.availability.includes(day))
    .map((item) => item.name);
  return {
    [day]: {
      officeHour: day === 'Monday' ? 'CLOSED' : workTime,
      exhibition: day === 'Monday' ? 'The zoo will be closed!' : animals,
    },
  };
};

function getSchedule(scheduleTarget) {
  if (getAnimal.includes(scheduleTarget)) {
    return species.find(({ name }) => name === scheduleTarget).availability;
  }
  return dayKeys.reduce((acc, value) => {
    const object = getDay(value, hours[value]);
    if (dayKeys.includes(scheduleTarget)) {
      return getDay(scheduleTarget, hours[scheduleTarget]);
    }
    return { ...acc, ...object };
  }, {});
}
// Baseado em https://github.com/tryber/sd-19-c-project-zoo-functions/pull/109/files
// Totais e sinceros agradecimentos ao Cleyton Alves.
// Infelizmente eu não consegui desenvolver este por minha própria conta e, da mesma forma que o coverage,
// utilizei o código de um colega para implementar.
// Este aqui, em específico, confesso que não entendi compreender todos os detalhes, apesar de entender
// o seu funcionamento. Então será algo que visitarei em breve para aprimorar o conhecimento.
module.exports = getSchedule;
