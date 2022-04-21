import { ResultModel } from '../schemas/result';


class Result {
    static async create({ newResult }) {
        const createdNewResult = await ResultModel.create(newResult);
        return createdNewResult;
    }

    static async findById({ resultId }) {
        const result = await ResultModel.findOne({ _id: resultId });
        return result;
    }

    static async findAllByUserId({ userId }) {
        const results = await ResultModel.find({ userId });
        return results;
    }

    static async findAll() {
        const results = await ResultModel.find({});
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