const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `Database Connected: ${conn.connection.name}, ${conn.connection.name}`
    );
  } catch (err) {}
};
