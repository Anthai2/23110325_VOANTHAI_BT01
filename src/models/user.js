import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: String,
    lastName: String,
    address: String,
    phoneNumber: String,
    gender: Boolean,
    image: String,
    roleId: String,
    positionId: String,
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
  },
);

module.exports = mongoose.model("User", userSchema);
