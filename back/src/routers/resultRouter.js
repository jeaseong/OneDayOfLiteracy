import is from "@sindresorhus/is";
import { Router } from "express";
import { resultService } from "../services/resultService";

const testRouter = Router();

testRouter.post("/result", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const { userId, result } = req.body;

    await resultService.addResult({ userId, result });

    res.status(200).json({ success: true });
  } catch (error) {
    next(error);
  }
});

testRouter.get("/results/:userId", async (req, res, next) => {
  try {

    const userId = req.params.userId;

    const results = await resultService.getResults({ userId });

    if (results?.errorMessage) {
      throw new Error(results.errorMessage);
    }

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

testRouter.delete("/results/:userId", async (req, res, next) => {
  try {
    const userId = req.params.userId;

    const deleteResult = await resultService.deleteResults({ userId });
    if (deleteResult.deletedCount !== 1) {
      throw new Error("정상적으로 삭제되지 않았습니다.");
    }

    res.status(200).send({ success: true });
  } catch (error) {
    next(error);
  }
});

testRouter.get("/results", async (req, res, next) => {
  try {
    const results = await resultService.getAllResults();

    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
});

testRouter.get("/result/:resultId", async (req, res, next) => {
  try {
    const resultId = req.params.resultId;

    const result = await resultService.getOneResult({ resultId });
    if (result.errorMessage) {
      throw new Error(result.errorMessage);
    }

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
});

testRouter.delete("/result/:resultId", async (req, res, next) => {
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
