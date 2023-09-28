const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

// middlewares
const lastErrorHandler = require("./src/middleware/LastErrorHandler");
const notFound = require("./src/middleware/NotFound");
const rootRoute = require("./src/controller/RootRoute");
const limiter = require("./src/utils/expressRateLimit");

//  app in use
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(limiter);

app.get("/", rootRoute);
app.use(notFound);
app.use(lastErrorHandler);

app.listen(2709, () => {
  console.log("Server is listening on port http://localhost:2709/");
});