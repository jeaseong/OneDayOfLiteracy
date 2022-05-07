import { Schema, model } from "mongoose";

<<<<<<< HEAD
const LikeSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    postId: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
});
=======
const LikeSchema = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    postId: { type: Schema.Types.ObjectId, required: true, ref: "Post" },
  },
  {
    timestamps: true,
  }
);
>>>>>>> dev-back

const LikeModel = model("Like", LikeSchema);

export { LikeModel };