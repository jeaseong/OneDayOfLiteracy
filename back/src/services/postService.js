import { User, Post, Subject } from '../db'

class postService {
  static async addPost({ title, content, tags, subjectId, userId }) {
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
  
    const newPost = {
      title,
      content,
      tags,
      subjectId,
      userId,
    }

    const createdNewPost = await Post.create({ newPost });
    createdNewPost.errorMessage = null;

    // 작성한 user의 포인트 적립 (기존 포인트 + 작성한 글 포인트)
    const points = user.point + subject.point;

    await User.update({
      userId: user._id,
      toUpdate: { "point": points }
    });

    return createdNewPost;
  }

  static async getPost({ postId }) { 
    const post = await Post.findById({ postId });
    if (!post) return { errorMessage: "해당 글이 존재하지 않습니다."};
    return post;
  }

  static async setPost({ postId, toUpdate }) { 
    const post = await Post.findById({ postId });

    if (!post) return { errorMessage: "해당 글이 존재하지 않습니다." };

    const userId = toUpdate.userId;
    const subjectId = toUpdate.subjectId;

    const user = await User.findById({ userId });
    const subject = await Subject.findById({ subjectId });

    if (!user) return { errorMessage: "해당 유저가 존재하지 않습니다."};
    if (!subject) return { errorMessage: "해당 주제가 존재하지 않습니다."};

    const toUpdateField = Object.keys(toUpdate);
    toUpdateField.forEach((key) => {
      if (!toUpdate[key]) delete toUpdate[key];
    });

    const updatedPost = await Post.update({ postId, toUpdate });
    updatedPost.errorMessage = null;
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

  static async getAllPostsByQuery(page, limit, query) { 
    const posts = await Post.findAll(page, limit, query);
    return posts;
  }

  static async getTaggedPosts(page, limit, tags){
    const andList = []
    tags.forEach(tag => {
      const cond = {tags: {$regex: decodeURI(tag), $options: 'iu'}};
      
      andList.push(cond)
    })

    const query = {$and: andList};

    const posts = await Post.findAll(page, limit, query);
    return posts;
  }

  static async getPostsByTags({ tags }) { }
  
  static async deletePost({ postId }) { 
    const result = await Post.delete({ postId })

    if (result.deletedCount !== 1) {
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
    if (result.deletedCount === 0) { 
        return { errorMessage: "Error: 정상적으로 삭제되지 않았습니다." }
    }

    return { errorMessage: null }
  }

  static async getPostLikes({ postId }) {
    const post = await Post.findById({ postId });
    if(!post) {
        return { errorMessage: "해당 글이 존재하지 않습니다." };
    }

    const likedUsers = await Post.getLikedUsers({ postId });
    
    return likedUsers;
  }
}


export { postService };