const mongoose = require("mongoose");

const roleEnum = ["ADMIN", "USER", "VIEWER"];

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Firstname is required"],
    },
    lastName: {
      type: String,
      required: [true, "Lastname is required"],
    },
    email: {
      type: String,
      required: [true, "Email id required"],
    },
    phone: {
      type: Number,
    },
    userRole: {
      type: String,
      enum: roleEnum,
      required: [true, "Email is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
