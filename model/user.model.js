import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    UserName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    contact: {
      type: String,
      trim: true,
    },
  },
  { versionKey: false }
);

const User = mongoose.model("User", userSchema);
export default User;
