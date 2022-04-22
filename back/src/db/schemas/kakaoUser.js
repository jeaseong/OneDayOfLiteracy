import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  //userId: { type: String, required: true },
  nickname: { type: String, required: true },
  email: { type: String },
});

const KaKaoUserModel = model("kakaoUser", UserSchema, "kakao-users");

export { KaKaoUserModel };
