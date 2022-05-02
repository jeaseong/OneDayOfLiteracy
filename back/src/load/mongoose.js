import { Test } from "../db";
import { Quiz } from "../db";
import tests from "./data/test";
import quizzes from "./data/quiz";

export default async () => {
    const insertOneTest = async (v) => {
        try { 
            const question = v.question;
            
            const testDoc = await Test.findByQuestion({ question });
            if(testDoc) {
                // testDoc이 이미 있다. => 생성하면 안되고 넘어간다.
                return false;
            }
            
            const newTest = v;
            await Test.create({ newTest });
        
            return false

        } catch(error) {
            const question = v.question;
            console.log(question)
            console.error("\x1b[35m%s\x1b[0m", error);
            return true;
        }
    }

    const insertOneQuiz = async (v) => {
      try{
        const word = v.word;

        const quiz = await Quiz.findByWord({ word });
        if(!quiz) {
          // quiz가 이미 있다. => 생성하면 안되고 넘어간다.
          return false;
        }

        const newQuiz = v;
        await Quiz.create({ newQuiz });
        
        return false;
      } catch(error) {
        const word = v.word;
        console.log(word);
        console.error("\x1b[35m%s\x1b[0m", error);
        return true;
      }
    } 
    
    // 반복문 돌면서 객체 하나씩 DB에 있는지 확인하고, 없으면 저장
    let isError = false;
    for (let v of tests) {
      isError = await insertOneTest(v);
      if (isError) break;
    }

    for (let v of quizzes) {
      isError = await insertOneQuiz(v);
      if (isError) break;
    }

    return isError;
}