import { PostModel } from "../schemas/post";
import { findByPagination } from "../../utils/findByPagination";

class Post {
  static async create({ newPost }) {
    const createdNewPost = await PostModel.create(newPost);
    return createdNewPost;
  }

  static async findById({ postId }) {
    const post = await PostModel.findOne({ _id: postId }).populate("subject", {_id: 0, subject: 1});
    return post;
  }

  static async update({ postId, toUpdate }) {
    const filter = { _id: postId };
    const option = { returnOriginal: false };

    const updatedPost = await PostModel.findOneAndUpdate(
      filter,
      toUpdate,
      option
    );
    return updatedPost;
  }

  static async findByUserId({ userId }) {
    const posts = await PostModel.find({ userId }).populate("subject", {_id: 0, subject: 1});
    return posts;
  }

  static async findAll(page, limit, query) {
    // pagination 필요
    // console.log(Object.prototype.toString.call(findByPagination)); //[object AsyncFunction]
    const posts = await findByPagination(PostModel, { page, limit }, query);
    return posts;
  }

  static async delete({ postId }) {
    const deletedPost = await PostModel.deleteOne({ _id: postId });
    return deletedPost;
  }

  static async deleteByUserId({ userId }) {
    const deletedPosts = await PostModel.deleteMany({ userId });
    return deletedPosts;
  }

  static async getLikedUsers({ postId }){
    const post = await PostModel.findOne({ postId }).populate("userLikes", {_id: 1, nickname: 1});

    const likedUsers = post.userLikes;
    
    return likedUsers;
  }
}

export { Post };
