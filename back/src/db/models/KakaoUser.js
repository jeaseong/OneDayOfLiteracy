import { KakaoUserModel } from "../schemas/kakaoUser";

class KakaoUser {
  static async create({ newKakaoUser }) {
    const createdNewUser = await KakaoUserModel.create(newKakaoUser);
    delete createdNewUser._doc["password"];

    return createdNewUser;
  }

  static async findById({ userId }) {
    const user = await KakaoUserModel.findOne(
      { _id: userId },
      { __v: 0 }
    );
    return user;
  }

  static async update({ userId, toUpdate }) {
    const filter = { _id: userId };
    const option = { returnOriginal: false };

    const updatedUser = await KakaoUserModel.findOneAndUpdate(
      filter,
      toUpdate,
      option
    );

    delete updatedUser._doc["password"];

    return updatedUser;
  }

  static async findByEmail({ email }) {
    const user = await KakaoUserModel.findOne({ email });
    
    
    return user;
  }

  static async findAll() {
    const users = await KakaoUserModel.find({}, { __v: 0 });
    return users;
  }

  static async delete({ userId }) {
    const deletedUser = await KakaoUserModel.deleteOne({ _id: userId });
    return deletedUser;
  }
}

export { KakaoUser };
