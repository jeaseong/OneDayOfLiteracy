import { UserModel } from "../schemas/user";
import { mongoose } from "mongoose";

class Like {
  // 좋아요
  static async findByUserIdAndPostId({ userId, postId }) {
    const found = await UserModel.findOne({ _id: userId, postLikes: postId });
    return found;
  }

  static async deleteAllByPostId({ postId }) {
    const updated = await UserModel.updateMany({}, {$pull: { postLikes: postId }})
    return updated;
  }

  static async create({ userId, postId }) {
    const created = await UserModel.findOneAndUpdate({ _id: userId }, {$addToSet: { postLikes: postId }})
    return created;
  }

  static async delete({ userId, postId }) {
    const deleted = await UserModel.findOneAndUpdate({ _id: userId }, {$pull: { postLikes: postId }})
    return deleted;
  }
}

export { Like };