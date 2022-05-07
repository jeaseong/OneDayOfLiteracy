import { ResultModel } from '../schemas/result';


class Result {
    static async create({ newResult }) {
        const createdNewResult = await ResultModel.create(newResult);
<<<<<<< HEAD
=======
        delete createdNewResult._doc["__v"];
>>>>>>> dev-back
        return createdNewResult;
    }

    static async findById({ resultId }) {
<<<<<<< HEAD
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

=======
        const result = await ResultModel.findOne({ _id: resultId }, { __v: 0 });
        return result;
    }

    static async findByUserId({ userId }) {
        const result = await ResultModel.findOne({ userId }, { __v: 0 });
        return result;
    }

    static async findAll() {
        const results = await ResultModel.find({}, { __v: 0 });
        return results;
    }

    static async updateByUserId({ userId, toUpdate }){
        const option = { returnOriginal: false };
        const updatedResult = await ResultModel.findOneAndUpdate({ userId }, toUpdate, option);
        return updatedResult;
    }

    static async deleteByUserId({ userId }) {
        const deletedResult = await ResultModel.deleteOne({ userId });
        return deletedResult;
    }
    
>>>>>>> dev-back
    static async delete({ resultId }) {
        const deletedResult = await ResultModel.deleteOne({ _id: resultId });
        return deletedResult;
    }
<<<<<<< HEAD
}
=======
}

export { Result };
>>>>>>> dev-back
