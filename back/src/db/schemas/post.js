import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, },
    content: { type: String, required: true,},
    subject: { type: String, required: true, },
    user_id: { type: Schema.Types.ObjectId, required: true, ref: "User"},
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

PostSchema.virtual('user', {
  ref: 'User',
  localField: 'user_id',
  foreignField: '_id',
  justOne: true,
});

PostSchema.virtual('likes', {
  ref: 'Like',
  localField: '_id',
  foreignField: 'project_id',
  count: true,
});


const PostModel = model("Post", PostSchema);

export { PostModel };
