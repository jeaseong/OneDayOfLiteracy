import is from "@sindresorhus/is";
import { Router } from "express";
import { resultService } from "../services/resultService";

const resultRouter = Router();

resultRouter.post("/result", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const { userId, result } = req.body;

    const userResult = await resultService.addResult({ userId, result });

    if(userResult.errorMessage){
      throw new Error(userResult.errorMessage);
    }

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
});

resultRouter.get("/results/:userId", async (req, res, next) => {
  try {

    const userId = req.params.userId;

    const result = await resultService.getResultByUserId({ userId });

    if (result?.errorMessage) {
      throw new Error(result.errorMessage);
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

resultRouter.delete("/results/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const deleteResult = await resultService.deleteResultByUserId({ userId });
    if (deleteResult.deletedCount == 0) {
      throw new Error("정상적으로 삭제되지 않았습니다.");
    }

    res.status(200).send({ success: true });
  } catch (error) {
    next(error);
  }
});

resultRouter.get("/results", async (req, res, next) => {
  try {
    const results = await resultService.getAllResults();

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

resultRouter.get("/result/:resultId", async (req, res, next) => {
  try {
    const resultId = req.params.resultId;

    const result = await resultService.getResult({ resultId });
    if (result.errorMessage) {
      throw new Error(result.errorMessage);
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

resultRouter.delete("/result/:resultId", async (req, res, next) => {
  try {
    const resultId = req.params.resultId;

    const deleteResult = await resultService.deleteResult({ resultId });
    if (deleteResult.deletedCount !== 1) {
      throw new Error("정상적으로 삭제되지 않았습니다.");
    }

    res.status(200).send({ success: true });
  } catch (error) {
    next(error);
  }
});

export { resultRouter };
