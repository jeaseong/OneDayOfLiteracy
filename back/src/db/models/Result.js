import { ResultModel } from '../schemas/result';


class Result {
    static async create({ newResult }) {
        const createdNewResult = await ResultModel.create(newResult);
        delete createdNewResult._doc["__v"];
        return createdNewResult;
    }

    static async findById({ resultId }) {
        const result = await ResultModel.findOne({ _id: resultId }, { __v: 0 });
        return result;
    }

    static async findAllByUserId({ userId }) {
        const results = await ResultModel.find({ userId }, { __v: 0 });
        return results;
    }

    static async findAll() {
        const results = await ResultModel.find({}, { __v: 0 });
        return results;
    }

    static async deleteAllByUserId({ userId }) {
        const deletedResults = await ResultModel.deleteMany({ userId });
        return deletedResults;
    }

    static async delete({ resultId }) {
        const deletedResult = await ResultModel.deleteOne({ _id: resultId });
        return deletedResult;
    }
}

export { Result };