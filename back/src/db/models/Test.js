import { TestModel } from '../schemas/test';


class Test {
    static async create({ newTest }) {
        const createdNewTest = await TestModel.create(newTest);
        return createdNewTest;
    }

    static async findById({ testId }) {
        const test = await TestModel.findOne({ _id: testId });
        return test;
    }

    static async findAll() {
        const tests = await TestModel.find({});
        return tests;
    }

    static async update({ testId, toUpdate }) {
        const filter = { _id: testId };
        const option = { returnOriginal: false };
    
        const updatedTest = await TestModel.findOneAndUpdate(
          filter,
          toUpdate,
          option
        );
        return updatedTest;
    }

    static async delete({ testId }) {
        const deletedTest = await TestModel.deleteOne({ _id: testId });
        return deletedTest;
    }
}

export { Test };