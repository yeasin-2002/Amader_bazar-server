const lastErrorHandler = (err, eq, res, next) => {
  console.log(err.message);
  res.status(500).json({
    message: "Something went wrong",
    error: err.message,
  });
};

module.exports = lastErrorHandler;