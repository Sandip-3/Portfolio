const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:8000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api/email', require('./routes/portfolioRoute'));

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`App running in Port ${PORT}`);
});
