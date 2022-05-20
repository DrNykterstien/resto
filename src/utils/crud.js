const createOne = async (model, data) => {
  try {
    const doc = await model.create({ ...data });
    return {
      data: doc,
      success: true,
      code: 200,
      message: 'Operation done successfully'
    };
  } catch (error) {
    return {
      data: null,
      success: false,
      code: 400,
      message: error.message
    };
  }
};

module.exports = {
  createOne
};
