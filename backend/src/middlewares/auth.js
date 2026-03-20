module.exports.authMiddleware = (req, res, next) => {
  req.user = { id: "demo-user" }; // temporal
  next();
};
