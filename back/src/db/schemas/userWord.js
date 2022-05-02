import { Schema, model } from 'mongoose';
import data from "../../load/data/quiz";

const UserWord = new Schema(
    {
        userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
        word: {type: String, required: true, default: data[0].word},
        meaning: {type: String, required: true, default: data[0].meaning}
    },
    {
        timestamps: true
    }
)

const UserWordModel = model('UserWord', UserWord);

export { UserWordModel };