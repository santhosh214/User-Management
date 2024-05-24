const express = require("express");
const dotenv = require("dotenv");
const baseRouter = require("./routes/UserRouter");
const connectDb = require("./config/dbConnection");

dotenv.config();
const app = express();
connectDb();

app.use(express.json());
app.use("/api/v1/users", baseRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
