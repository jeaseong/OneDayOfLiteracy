import { LikeModel } from '../schemas/like';


class Like {
    static async create({ newLike }) {
        const createdNewLike = await LikeModel.create(newLike);
        return createdNewLike;
    }

    static async findAllByUserId({ userId }) {
        const likes = await LikeModel.find({ userId });
        return likes;
    }

    static async findAllByPostId({ postId }) {
        const likes = await LikeModel.find({ postId });
        return likes;
    }

    static async deleteAllByUserId({ userId }) {
        const deletedLikes = await LikeModel.deleteMany({ userId });
        return deletedLikes;
    }

    static async deleteAllByPostId({ postId }) {
        const deletedLikes = await LikeModel.deleteMany({ postId });
        return deletedLikes;
    }

    static async delete({ LikeId }) {
        const deletedLike = await LikeModel.deleteOne({ _id: LikeId });
        return deletedLike;
    }
}


export { Like };