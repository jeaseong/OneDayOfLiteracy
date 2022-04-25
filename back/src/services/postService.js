import { User, Post, Subject } from '../db'

class postService {
  static async addPost({ title, content, subjectId, tags, userId }) {
    // subjectId 에 대한 검증
    const subject = await Subject.findById({ subjectId });
    if (!subject) {
        return { errorMessage: "Error: Invalid subjectId" }
    }

    // userId 에 대한 검증
    const user = await User.findById({ userId });
    if (!user) {
        return { errorMessage: "Error: Invalid userId "}
    }

    const createdNewPost = await Post.create({
      title,
      content,
      subjectId,
      tags,
      userId,
    });

    createdNewPost.errorMessage = null;

    return createdNewPost;
  }

  static async getPost({ postId }) { 
    const post = await Post.findById({ postId });
    return post;
  }

  static async setPost({ postId, toUpdate }) { 
    const post = await Post.findById({ postId });

    if (!post) {
        return { errorMessage: "해당 글이 존재하지 않습니다." };
    }

    const toUpdateField = Object.keys(toUpdate);
    toUpdateField.forEach((key) => {
      if (!toUpdate[key]) delete toUpdate[key];
    });

    const updatedPost = await Post.update({ postId, toUpdate });
    return updatedPost;
  }

  static async getPostsByUserId({ userId }) { 
    // userId 에 대한 검증
    const user = await User.findById({ userId });
    if (!user) {
        return { errorMessage: "Error: Invalid userId "}
    }

    const posts = await Post.findByUserId({ userId });
    return posts;
  }

  static async getAllPosts({}) { 
    const posts = await Post.findAll();
    return posts;
  }

  static async getPostsByTags({ tags }) { }
  
  static async deletePost({ postId }) { 
    const result = await Post.delete({ postId })
    if (result.count !== 1) {
        return { errorMessage: "Error: 정상적으로 삭제되지 않았습니다." }
    }

    return { errorMessage: null }
  }

  static async deletePostsByUserId({ userId }) { 
    // userId 에 대한 검증
    const user = await User.findById({ userId });
    if (!user) {
        return { errorMessage: "Error: Invalid userId "}
    }

    // 정상적으로 지워졌는지 검증 필요
    const result = await Post.deleteByUserId({ userId });
    if (result.count === 0) { 
        return { errorMessage: "Error: 정상적으로 삭제되지 않았습니다." }
    }

    return { errorMessage: null }
  }
}


export { postService };