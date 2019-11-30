const { DispensaryUser } = require("../../_lib/db/models");
const handleRequest = require("../../_lib/utils/handleRequest");

const actions = {
  GET: async (req, res) => {
    const {
      query: { auth0Id }
    } = req;

    const dispensaryUser = await DispensaryUser.findByPk(auth0Id);

    if (!dispensaryUser) {
      return res.status(404).json({ message: "Resource not found" });
    }

    return res.status(200).json(dispensaryUser);
  },
  POST: async (req, res) => {}
};

module.exports = handleRequest(actions);
