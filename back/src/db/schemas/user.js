import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  nickname: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  badge: [{ type: String }],
  level: { type: Number, default: 0 },
  point: { type: Number, default: 0 },
});

const UserModel = model("User", UserSchema, "users");

export { UserModel };
