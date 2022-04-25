import { PostModel } from "../schemas/post";

class Post {
  static async create({ newPost }) {
    const createdNewPost = await PostModel.create(newPost);
    return createdNewPost;
  }

  static async findById({ postId }) {
    const post = await PostModel.findOne({ id: postId }).populate("subject", {_id: 0, subject: 1});
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

  static async findAll() {
    // pagination 필요
    const posts = await PostModel.find({});
    return posts;
  }

  static async delete({ postId }) {
    const deletedPost = await PostModel.deleteOne({ id: postId });
    return deletedPost;
  }

  static async deleteByUserId({ userId }) {
    const deletedPosts = await PostModel.deleteMany({ userId });
    return deletedPosts;
  }
}

export { Post };
