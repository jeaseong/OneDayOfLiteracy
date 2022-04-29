import { Router } from "express";
import { uploader, deleteImg } from "../middlewares/imageUploadMiddleware";
import { userAuthService } from "../services/userService";
import { postService } from "../services/postService";

const uploadRouter = Router();


uploadRouter
  .post('/uploads/user/:userId',
    uploader('user'), 
    deleteImg,
    async (req, res, next) => {
    try {
      console.log(req.files);
      const { userId } = req.params;
      const dirName = req.files[0].bucket.split("/")[1];
      const imageName = req.files[0].key;
      const toUpdate = {
        profileUrl: `https://team2.cdn.ntruss.com/${dirName}/${imageName}`
      };
      const setUser = await userAuthService.setUser({ userId, toUpdate })
      res.status(201).json({ message: "success" });
    } catch (err) {
      next(err);
    }
  }
);

uploadRouter
  .post('/uploads/post/:postId', 
    uploader('post'), 
    deleteImg,
    async (req, res, next) => {
      try {
        console.log(req.files);
        const { postId } = req.params;
        const urlList = req.files.map((obj) => {
          const dirName = obj.bucket.split("/")[1];
          const imageName = obj.key;
          return `https://team2.cdn.ntruss.com/${dirName}/${imageName}`;
        })
        
        const toUpdate = {
            imageUrls: urlList, 
        };
        const setPost = await postService.setPost({ postId, toUpdate });
        res.status(201).json({ message: "success" });
      } catch (err) {
          next(err);
      } 
});

// mode : users / posts
// key : 12345679.png
uploadRouter.delete("/uploads/remove/:mode/:key", deleteImg, async (req, res, next) => {
    res.status(200).json({ message: "success"});
})
export { uploadRouter };