import is from "@sindresorhus/is";
import { Router } from "express";
import { testService } from "../services/testService";

const testRouter = Router();

testRouter.get("/tests", async (req, res, next) => {
  try {
    const question = req.query.question;

    const tests = await testService.searchTest({ question });

    res.status(200).json(tests);
  } catch (error) {
    next(error);
  }
});

testRouter.post("/test/result", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const submission = req.body;

    const score = await testService.evaluateTest(submission);
    if (score.errorMessage) {
      console.error("\x1b[35m%s\x1b[0m", score.errorMessage);
      res.status(500).json(score);
    }

    res.status(200).json(score);
  } catch (error) {
    next(error);
  }
});

testRouter.post("/test", async (req, res, next) => {
  try {
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    const question = req.body.question;
    const questionType = req.body.questionType;
    const content = req.body.content;
    const choices = req.body.choices;
    const answer = req.body.answer;

    const test = await testService.addTest({
      question,
      questionType,
      content,
      choices,
      answer,
    });

    if (test.errorMessage) {
      throw new Error(test.errorMessage);
    }

    res.status(200).json(test);
  } catch (error) {
    next(error);
  }
});

testRouter.get("/test/:num", async (req, res, next) => {
  try {
    const num = req.params.num;

    const test = await testService.getTest({ num });
    if (test.errorMessage) {
      throw new Error(test.errorMessage);
    }

    res.status(200).json(test);
  } catch (error) {
    next(error);
  }
});

testRouter.put("/test/:num", async (req, res, next) => {
  try {
    if(is.emptyObject(req.body)){
        throw new Error(
          "headers의 Content-Type을 application/json으로 설정해주세요"
        );
    }

    const num = req.params.num;
    const { question, questionType, content, choices } = req.body;
    const toUpdate = { question, questionType, content, choices };

    const test = await testService.setTest({ num, toUpdate });
    if (test.errorMessage) {
      throw new Error(test.errorMessage);
    }

    res.status(200).json(test);
  } catch (error) {
    next(error);
  }
});

testRouter.delete("/test/:num", async (req, res, next) => {
  try {
      const num = req.params.num;

      const deleteResult = await testService.deleteTest({ num });
      if(deleteResult.deletedCount !== 1){
          throw new Error("정상적으로 삭제되지 않았습니다.");
      }

      res.status(200).send({ success: true, });

  } catch (error) {
      next(error);
  }
});
