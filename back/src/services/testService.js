import { Test } from "../db";

class testService {
    static async addTest({ question, questionType, content, choices, answer }) {
        const test = await Test.findByQuestion({ question });
        if(test){
            const errorMessage = 
              "해당 질문의 테스트가 존재합니다.";
            return { errorMessage };
        }

        const num = Test.countDocs() + 1;
        const newTest = {
          num,
          question,
          questionType,
          content,
          choices: JSON.stringify(choices),
          answer,
        };

        const createdNewTest = await Test.create({ newTest });
        return createdNewTest;
    }

    static async getTest({ num }){
        const test = await Test.findByNum({ num });
        if(!test){
            const errorMessage = 
              "해당 번호의 질문이 존재하지 않습니다.";
            return { errorMessage };
        }

        return test;
    }

    static async searchTest({ question }){
        let query = undefined;
        if (question) {
          query = {
            question: { $regex: decodeURIComponent(question), $options: "i" },
          };
        } 

        const tests = await Test.findByRegex(query);
        return tests;
    }

    static async evaluateTest(submission){
        const tests = await Test.findByRegex();

        const score = 0;
        tests.forEach( (v,i) => {
            if(!(v.num === i+1)){
                const errorMessage =
                  "DB내에서 Test 관련 도큐먼트의 num 필드에 문제가 있습니다.(back-error)";
                return { errorMessage };
            }

            if(submission[v.num] == v.answer){
                score++;
            }
        })

        const result = { result: score, };
        return result;
    }


    static async setTest({ num, toUpdate }){
        const test = await Test.findByNum({ num });

        if (!test) {
            const errorMessage = "해당 번호의 질문이 존재하지 않습니다.";
            return { errorMessage };
        }

        // 수정해야하는 필드에 맞는 값을 업데이트
        const toUpdateFields = Object.keys(toUpdate);
        toUpdateFields.forEach((key) => {
          if (!toUpdate[key]) delete toUpdate[key];
        });

        if(toUpdate["choices"]){
            toUpdate["choices"] = JSON.stringify(toUpdate["choices"]);
        }

        const updatedTest = await Test.update({ num, toUpdate });
        return updatedTest;
    }

    static async deleteTest({ num }){
        const deleteResult = await Test.delete({ num });
        return deleteResult;
    }
}

export { testService };