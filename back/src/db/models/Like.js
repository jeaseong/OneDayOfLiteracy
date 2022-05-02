import { UserModel } from "../schemas/user";
import { mongoose } from "mongoose";
import { PostModel } from "../schemas/post";

class Like {
  // 좋아요
  static async findByUserIdAndPostId({ userId, postId }) {
    const found = await UserModel.findOne({ _id: userId, postLikes: postId });
    return found;
  }

  static async findByPostIds({ postIds }) {
    const found = await PostModel.find({ _id: { $in: postIds }});
    return found;
  }
  
  static async deleteAllByPostId({ postId }) {
    const updated = await UserModel.updateMany({}, {$pull: { postLikes: postId }})
    return;
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