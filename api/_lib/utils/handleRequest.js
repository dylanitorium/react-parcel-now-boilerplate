module.exports = actions => (req, res) => {
  const { method } = req;

  const action = actions[method];

  if (action) {
    try {
      return action(req, res);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  return res.status(405).json({ message: "Method not found" });
};
