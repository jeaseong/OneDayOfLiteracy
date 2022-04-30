import { PostModel } from "../schemas/post";
import { findByPagination2 } from "../../utils/findByPagination";

class Post {
  static async create({ newPost }) {
    const createdNewPost = await PostModel.create([newPost], {runValidators: true});
    return createdNewPost;
  }

  static async findById({ postId }) {
    const post = await PostModel.findOne({ _id: postId }).lean().populate("subject", {_id: 0, subject: 1});
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

  
  // 페이지네이션 지원하는 버전으로 바꾸면서 
  // 필요는 없지만, 남겨둠
  static async findByUserId({ userId }) {
    const posts = await PostModel.find({ userId }).lean().populate("subject", {_id: 0, subject: 1});
    return posts;
  }

  static async findAll(page, limit, query) {
    // pagination 필요
    const populateField = "subject";
    const populateOption = {_id: 0, subject: 1};
    const posts = await findByPagination2(PostModel, { page, limit }, query, populateField, populateOption);

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
