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
    if (!post) return { errorMessage: "존재하지 않는 게시글입니다. " };

    const query = { postId, parentId: null };
    //page 혹은 limit의 값이 "", undefined 이런 경우 => 페이지네이션 안한다.
    if (!page || !limit) {
      const comments = await Comment.findByPostId({ query })
      return { isLast: true, comments };
    }

    let isLast = false;
    page = Number(page);
    limit = Number(limit);
    const total = await Comment.count({ query });

    if (total === 0) return {};
    
    const totalPages = Math.ceil(total / limit);
    if (totalPages === page) isLast = true;
    if (totalPages < page)
      return { errorMessage: "존재하지 않는 페이지입니다" };

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

  // 게시글 삭제 시에 진행할 댓글 삭제 Service
  static async deleteCommentsByPostId({ postId }){
    const comments = await Comment.findAllByPostId({ postId });
    comments.forEach(async (comment) => {
      const deletedComment = await Comment.delete({ commentId: comment.userId._id });
      if(!deletedComment._doc["isDeleted"]){
        return { errorMessage: "댓글이 정상적으로 삭제되지 않았습니다.(back-error)"}
      }
    });
    return { success: true };
  }
};

export { commentService };