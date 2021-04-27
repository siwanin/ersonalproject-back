const express = require("express");

const db = require("./models");
const errorMiddleware = require("./middlewares/error");
const userRoute = require("./Route/userRoute");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRoute);


app.use((req, res, next) => {
  res.status(404).json({ message: "path not found on this server" });
});

app.use(errorMiddleware);

// app.use((err, req, res, next) => {
//   console.log(err);
//   res.status(500).json({ message: err.message });
// });

// db.sequelize.sync({ force:true})

const port = 8000;
app.listen(port, () => console.log(`server running on port ${port}`));
