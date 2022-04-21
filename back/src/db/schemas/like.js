import { Schema, model } from "mongoose";

const LikeSchema = new Schema({
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    post_id: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
});

const LikeModel = model("Like", LikeSchema);

export { LikeModel };