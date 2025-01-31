require('dotenv').config()
const express = require('express');
const cors = require('cors');
const userRouter = require("./routes/userRouter");
const connectDB = require('./config/db');

connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

process.on('unhandledRejection', (error, promise) => {
  console.log(`Logged Error: ${error}`);
  server.close(() => process.exit(1));
})