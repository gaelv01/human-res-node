module.exports = (req, res, next) => {
  return res
    .status(200)
    .json({ code: 200, message: "Welcome to Node.js Human Resources System." });
};
