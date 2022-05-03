import { Schema, model } from "mongoose";

const CommentSchema = new Schema(
  {
    postId: { type: Schema.Types.ObjectId, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    parentId: { type: Schema.Types.ObjectId, required: false },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

CommentSchema.virtual('childComments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'parentId',  
})

const CommentModel = model('Comment', CommentSchema);

export { CommentModel };
