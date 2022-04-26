import { Result } from "../db";

class resultService {
  static async addResult({ userId, result }) {
    const newResult = { userId, result };

    const createdNewResult = await Result.create({ newResult });
    return createdNewResult;
  }

  static async getResults({ userId }) {
    const results = await Result.findAllByUserId({ userId });
    if (results.length === 0) {
      const errorMessage = "해당 유저의 결과가 존재하지 않습니다.";
      return { errorMessage };
    }

    return results;
  }

  static async deleteResults({ userId }) {
    const deleteResult = await Result.deleteAllByUserId({ userId });
    return deleteResult;
  }

  static async getAllResults() {
    const results = Result.findAll();
    return results;
  }

  static async getOneResult({ resultId }) {
    const result = await Result.findById({ resultId });
    if (!result) {
      const errorMessage = "해당 결과가 존재하지 않습니다.";
      return { errorMessage };
    }

    return result;
  }

  static async deleteResult({ resultId }) {
    const deleteResult = Result.delete({ resultId });
    return deleteResult;
  }
}

export { resultService };
