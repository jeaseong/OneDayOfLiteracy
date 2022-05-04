import { User, Post, Comment } from "../db";

class commentService {
  static async addComment({ postId, content, author, userId, parentId }) {
    const [ post, user ] = await Promise.all([Post.findById({ postId }), User.findById({ userId })]);

    if (!post) return { errorMessage: "존재하지 않는 게시글입니다. "};
    if (!user) return { errorMessage: "존재하지 않는 사용자입니다. "};

    const newComment = {
        postId,
        content,
        author,
        userId,
        parentId,
    }

    const createdComment = await Comment.create({ newComment });
    return createdComment;
  }

  static async getComments({ postId, page, limit }) {
    const post = await Post.findById({ postId });
    if (!post) return { errorMessage: "존재하지 않는 게시글입니다. "};
    
    let isLast = false;
    page = Number(page);
    limit = Number(limit);
    const query = { postId, parentId: null };
    const total = await Comment.count({ query });
    const totalPages = Math.ceil(total / limit);
    
    if (totalPages === page) isLast = true;
    if (totalPages < page) return { errorMessage: "존재하지 않는 페이지입니다" };

    const comments = await Comment.findByPostId({ page, limit, query });
    return { isLast, comments };
  }

  static async setComment({ commentId, toUpdate }){
    const comment = await Comment.findById({ commentId });
    if(!comment) return { errorMessage: "존재하지 않는 댓글입니다."};
    
    for(key in Object.keys(toUpdate)){
      if(!toUpdate[key]) delete toUpdate[key];
    }

    const updatedComment = await Comment.update({ commentId, toUpdate });
    return updatedComment;
  }

  static async deleteComment({ commentId }){
    const comment = await Comment.findById({ commentId });
    if(!comment) return { errorMessage: "존재하지 않는 댓글입니다."};

    const deletedComment = await Comment.delete({ commentId });
    return deletedComment;
  }
};

export { commentService };