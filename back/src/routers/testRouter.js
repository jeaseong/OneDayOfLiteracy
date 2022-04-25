import is from "@sindresorhus/is";
import { Router } from "express";
import { TestService } from "../services/testService";

const testRouter = Router();

testRouter.get(
    "/test/query",
    async (req, res, next) => {
        try{
            const question = req.query.question;
            if(!question){
                throw new Error("URL 쿼리에서 ?question={찾고싶은 질문 문자열} 형식으로 요청하세요");
            }

            const tests = await TestService.searchTest({ question });
            
            res.status(200).send(tests);
        } catch(error) {
            next(error);
        }
    }
);