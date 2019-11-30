const { DispensaryUser } = require("../../_lib/db/models");
const handleRequest = require("../../_lib/utils/handleRequest");

const actions = {
  GET: async (req, res) => {
    const dispensaryUsers = await DispensaryUser.findAll();
    return res.status(200).json(dispensaryUsers);
  }
};

module.exports = handleRequest(actions);
