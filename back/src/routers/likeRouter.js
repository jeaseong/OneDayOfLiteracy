import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { likeService } from "../services/likeService";

const likeRouter = Router();

// POST /like => 좋아요 추가
likeRouter.post("/like/:postId", 
  loginRequired,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const { postId } = req.params;
      const newLike = await likeService.addLike({ userId, postId });

      if (newLike.errorMessage) {
        throw new Error(newLike.errorMessage);
      }
    
      res.status(201).send("success");
    } catch (error) {
      next(error);
    };
});

// DELETE /like/:userId/:postId => 좋아요 취소
likeRouter.delete("/like/:postId", 
  loginRequired,
  async (req, res, next) => {
    try {
      const userId = req.currentUserId;
      const { postId } = req.params;
      const deletedLike = await likeService.deleteLike({ userId, postId });
      
      if (deletedLike.errorMessage) {
        throw new Error(deletedLike.errorMessage);
      }

      res.status(200).send("성공적으로 삭제가 완료되었습니다.");
    } catch (error) {
      next(error);
    }
});

// GET /likes/:postId => 글에 "좋아요!"를 누른 사람들 정보 반환
likeRouter.get('/likes/:postId', async (req, res, next) => {
  try{
    const { postId } = req.params;

    const likedUsers = await likeService.getPostLikes({ postId });
    if (likedUsers.errorMessage){
      throw new Error(likedUsers.errorMessage);
    }
    
    res.status(200).json(likedUsers);
  } catch(err) {
    next(err);
  }
});



export { likeRouter };