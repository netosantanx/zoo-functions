const data = require('../data/zoo_data');

const { employees } = data;
function isManager(id) {
  if (id === employees[1].id || id === employees[2].id || id === employees[4].id) {
    console.log('true');
    return true;
  }
  console.log('false');
  return false;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const relatedEmployees = employees.filter((element) =>
    element.managers.includes(managerId));
  return relatedEmployees.map(
    (element) => `${element.firstName} ${element.lastName}`,
  );
}

module.exports = { isManager, getRelatedEmployees };
