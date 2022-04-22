import { Schema, model } from "mongoose";

const LikeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    postId: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
});

const LikeModel = model("Like", LikeSchema);

export { LikeModel };