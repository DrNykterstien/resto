const { faker } = require("@faker-js/faker");

const tableBuildParams = (input = {}) => {
  return {
    fullName: input.fullName || faker.name.findName(),
    email: input.email || faker.internet.email(),
    occation:
      input.occation ||
      faker.helpers.arrayElement(['wedding', 'birthday', 'other'])
      ,
    handledAt: input.handledAt || faker.date.future(),
    message: input.message || faker.lorem.words(5),
  };
};

const tableFactory = async (input = {}) => {
  const table = tableBuildParams(input);
  return table;
};

const tablesFactory = async (count = 10, input = {}) => {
  let tables = [];
  for (let i = 0; i < count; i++)
    tables.push(tableBuildParams(input));
  return tables;
};

module.exports = {
  tableFactory,
  tablesFactory,
  tableBuildParams,
};
