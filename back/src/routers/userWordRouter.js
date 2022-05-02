import { userWordService } from "../services/userWordService";
import { Router } from "express";
import { loginRequired } from "../middlewares/loginRequired";
import { isValidData, invalidCallback } from "../middlewares/validationMiddleware";

const userWordRouter = Router();

userWordRouter.post(
  "/userword",
  loginRequired,
  isValidData("userword"),
  invalidCallback,
  async (req, res, next) => {
      try{
        const { word } = req.body;
        const userId = req.currentUserId;
        const userWord = await userWordService.addOrUpdateUserWord({ userId, word });

        res.status(200).json({ message: "success", userWord });
      } catch(error) {
        next(error);
      }
  }
);

userWordRouter.get(
  "/userword/:userId",
  isValidData("userword"),
  invalidCallback,
  async (req, res, next) => {
    try {
        const { userId } = req.params;
        const userWord = await userWordService.getUserWord({ userId });

        res.status(200).json(userWord);
    } catch (error) {
        next(error);
    }
  }
);

export { userWordRouter };