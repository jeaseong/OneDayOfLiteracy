import { PostModel } from "../schemas/post";
import { findByPagination2 } from "../../utils/findByPagination";

class Post {
  static async create({ newPost }) {
    const createdNewPost = await PostModel.create([newPost], {
      runValidators: true,
    });
    return createdNewPost;
  }

  static async findById({ postId }) {
    const post = await PostModel.findOne({ _id: postId })
      .lean()
      .populate("subject", { _id: 0, subject: 1 });
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

  // Service의 deletePostsByUserId 메소드에서 post의 _id 리스트 얻기 위해 사용
  static async findByUserId({ userId }) {
    const posts = await PostModel.find({ userId }, {_id: 1}).lean();
    return posts;
  }

  static async findAll(page, limit, query) {
    // pagination 필요
    const populateField = "subject";
    const populateOption = { _id: 0, subject: 1 };
    const posts = await findByPagination2(
      PostModel,
      { page, limit },
      query,
      populateField,
      populateOption
    );

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

  static async getLikedUsers({ postId }) {
    const post = await PostModel.findOne({ postId }).populate("userLikes", {
      _id: 1,
      nickname: 1,
    });

    const likedUsers = post.userLikes;

    return likedUsers;
  }
}

export { Post };
