const data = require('../data/zoo_data');

const { species, employees } = data;

const employee = employees.map((element) => {
  const info = {
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: element.responsibleFor.map(
      (animal) => species.find((animals) => animals.id === animal).name,
    ),
    locations: element.responsibleFor.map(
      (animal) => species.find((animals) => animals.id === animal).location,
    ),
  };
  return info;
});

function getEmployeesCoverage(param = employee) {
  // seu código aqui
  const check = employee.find(
    (employeeSrc) =>
      employeeSrc.fullName.includes(param.name) || employeeSrc.id === param.id,
  );
  if (param.name || param.id) {
    if (!check) {
      throw new Error('Informações inválidas');
    }
    return check;
  }
  return param;
}
// Totalmente baseado em https://github.com/tryber/sd-19-c-project-zoo-functions/pull/126/files
// Bruna Büttenbender
// Tive muita dificuldade após atingir os 70% e busquei muitas informações em outros PR fazendo
// code review. O código dela, além de me apresentar uma solução que pudesse utilizar, me mostrou
// também, toda uma explicação do código para que fosse entender ainda melhor do que se trata.
// Eu não teria conseguido a tempo se não fosse dessa forma :)
module.exports = getEmployeesCoverage;
