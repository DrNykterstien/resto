const TableModel = require('../models/table.model');
const { createOne } = require('../utils/crud');

const createTableReservation = reservation => {
  try {
    return createOne(TableModel, { ...reservation });
  } catch {
    return {
      data: null,
      success: false,
      code: 500,
      message: 'Internal Server Error'
    };
  }
};

module.exports = {
  createTableReservation
};
