import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: { type: String, required: true, },
    content: { type: String, required: true,},
    tags: [{ type: String, required: false, }],
    subjectId: { type: Schema.Types.ObjectId, required: true, ref: "Subject" },
    userId: { type: Schema.Types.ObjectId, required: true, ref: "User"},
  },
  {
    timestamps: true,
    selectPopulatedPaths: false,
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

PostSchema.virtual('subject', {
  ref: 'Subject',
  localField: 'subjectId',
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
