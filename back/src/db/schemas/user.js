import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    nickname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    badge: [{ type: String }],
    level: { type: Number, default: 0 },
    point: { type: Number, default: 0 },
    postLikes: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    profileUrl: { type: String, required: false, default: null },
    kakaoId: {type: Number, required: false, default: 0},
    introduce: {type: String, required: false, default: "소개를 해주세요!"},
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema, "users");

export { UserModel };
