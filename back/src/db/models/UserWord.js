import { UserWordModel } from "../schemas/userWord";

class UserWord{
    static async create({ newUserWord }) {
        const createdNewUserWord = await UserWordModel.create(newUserWord);
        return createdNewUserWord;
    }

    static async findByUserId({ userId }) {
        const userWord = await UserWordModel.findOne({ userId }, { __v: 0 });
        return userWord;
    }

    static async update({ userId, toUpdate }){
        const filter = { userId };
        const option = { 
            returnOriginal: false,
            projection: {
                __v: 0,
            }
        }

        console.log(filter, option, toUpdate);
        const updatedUserWord = await UserWordModel.findOneAndUpdate(
          filter,
          toUpdate,
          option
        );
        
        return updatedUserWord;
    }
}

export { UserWord }