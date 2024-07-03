const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const baseRouter = require("./routes/UserRouter");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

dotenv.config();
const app = express();
connectDb();

app.use(cors());
app.use(express.json());
app.use(errorHandler);
app.use("/api/v1/users", baseRouter);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
