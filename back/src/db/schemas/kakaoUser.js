import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  //userId: { type: String, required: true },
  nickname: { type: String, required: true },
  email: { type: String },
  badge: [{ type: String }],
  level: { type: Number, default: 0 },
  point: { type: Number, default: 0 },
});

const KaKaoUserModel = model("kakaoUser", UserSchema, "kakao-users");

export { KaKaoUserModel };
