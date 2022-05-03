import { CommentModel } from '../schemas/comment';

class Comment {
  static async create({ newComment }) {
    const createdComment = await CommentModel.create(newComment);
    return createdComment;
  }

  static async findByPostId({ postId }) {
    const comments = await CommentModel.find({ postId, parentId: null }).populate('childComments');
    return comments;
  }

  static async findById({ commentId }) {
    const comment = await CommentModel.findOne({ _id: commentId }).populate('childComments');
    return comment;
  }

  static async update({ commentId, toUpdate }) {
    const filter = { _id: commentId };
    const option = { returnOriginal: false };
    const updatedComment = await CommentModel.findOneAndUpdate(
      filter,
      toUpdate,
      option
    );

    return updatedComment;
  }

  static async delete({ commentId }) {
    // soft delete 방식 사용
    const filter = { _id: commentId };
    const toUpdate = { isDeleted: true };
    const option = { returnOriginal: false };

    const deletedComment = await CommentModel.findOneAndUpdate(
      filter,
      toUpdate,
      option,
    );

    return deletedComment;
  }
}

export { Comment };