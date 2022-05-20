const getHomeRenderingController = async (req, res) => {
  res.render('pages/website/home');
};

module.exports = {
  getHomeRenderingController
};
