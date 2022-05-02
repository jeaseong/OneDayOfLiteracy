import { QuizModel } from "../schemas/quiz";

class Quiz{
    static async create({ newQuiz }) {
        const newCreatedQuiz = await QuizModel.create(newQuiz);
        return newCreatedQuiz;
    }
    
    static async findByNum({ num }){
        const quiz = await QuizModel.findOne({ num }, {__v:0});
        return quiz;
    }
    
    static async findByWord({ word }){
        const quiz = await QuizModel.findOne({ word }, {__v: 0});
        return quiz;
    }
}

export { Quiz }