import { Post } from '../db'

class postService {
  static async addPost({ title, content, subjectId, tags, userId }) {}
  static async getPost({ postId }) { }
  static async setPost({ postId, toUpdate }) { }
  static async getPostsByUserId({ userId }) { }
  static async getAllPosts({}) { }
  static async getPostsByTag({ tag }) { }
  static async deletePost({ postId }) { }
  static async deletePostsByUserId({ userId }) { }
}


export { postService };