import { UserWordModel } from "../schemas/userWord";

class UserWord{
    static async create({ newUser }) {
        const newUserWord = await UserWordModel.create(newUser);
        return newUserWord;
    }

    static async findByUserId({ userId }) {
        const userWord = await UserWordModel.findOne({ userId });
        return userWord;
    }

    static async update({ userId, toUpdate }){
        const option = { returnOriginal: false }
        const updatedUserWord = UserWordModel.findOneAndUpdate({ userId }, toUpdate, option);
        return updatedUserWord;
    }
}

export { UserWord }