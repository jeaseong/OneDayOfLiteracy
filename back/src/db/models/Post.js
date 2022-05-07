import { PostModel } from "../schemas/post";

class Post {
  static async create({ newPost }) {
    const createdNewPost = await PostModel.create(newPost);
    return createdNewPost;
  }

  static async findById({ postId }) {
    const post = await PostModel.findOne({ _id: postId });
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
    const posts = await PostModel.find({ userId });
    return posts;
  }

  static async findAll() {
    const posts = await PostModel.find({});
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
}

export { Post };
