import { Schema, model } from "mongoose";

const Quiz = new Schema(
    {
        num: {type: String, required: true, },
        word: {type: String, required: truen, },
        meaning: {type: Stirng, required: true, },
    },
    {
        timestamps: true,
    }
)

const QuizModel = model('Quiz', Quiz);

export { QuizModel };