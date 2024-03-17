const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const salesRouter = require("./routes/finance/salesRoute");
const expenseRouter = require("./routes/finance/expenseRoute");




app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB Connection Success!!!");
});


const testRouter = require("./routes/test");
app.use("/test", testRouter);

const FruitTypeRouter = require("./routes/coordinator/FruitTypeRoute.js");
app.use("/FruitType", FruitTypeRouter);


// Use the routes
app.use('/sales', salesRouter);
app.use('/expense', expenseRouter);


// Start the server
const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
