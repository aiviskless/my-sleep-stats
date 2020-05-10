const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");
const compression = require("compression");
const helmet = require("helmet");
const app = express();

app.use(compression()); // Compress all routes
// serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("./client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.use(express.json());
app.use(helmet());

const db = config.get("mongoURI");
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected..."))
  .catch((err) => console.log(err));

app.use("/api/items", require("./routes/api/items"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}...`));
