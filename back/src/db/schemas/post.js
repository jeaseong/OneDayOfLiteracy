import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, },
    content: { type: String, required: true,},
    subject: { type: String, required: true, },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User"},
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PostSchema.virtual('user', {
  ref: 'User',
  localField: 'userId',
  foreignField: '_id',
  justOne: true,
});

PostSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'postId',
  count: true,
});


const PostModel = model("Post", PostSchema);

export { PostModel };
