import { Test } from "../db";

class TestService {
    static async addTest({ question, questionType, content, choices, answer }) {
        const test = await Test.findByQuestion({ question });
        if(test){
            const errorMessage = 
              "해당 질문의 테스트가 존재합니다.";
            return { errorMessage };
        }

        const newTest = { question, questionType, content, choices, answer };
        const createdNewTest = await Test.create({ newTest });

        return createdNewTest;
    }

    static async getTest({ question }){
        const test = await Test.findByQuestion({ question });
        if(!test){
            const errorMessage = 
              "해당 질문의 테스트가 존재하지 않습니다.";
            return { errorMessage };
        }

        return test;
    }

    static async searchTest({ question }){
        const query = {
          question: { $regex: decodeURIComponent(question), $options: "i" },
        };

        const tests = await Test.findByRegex(query);
        return tests;
    }



    static async 
}

export { TestService };