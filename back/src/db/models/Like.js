<<<<<<< HEAD
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


=======
import { UserModel } from "../schemas/user";
import { PostModel } from "../schemas/post";

class Like {
  // 좋아요
  static async findByUserIdAndPostId({ userId, postId }) {
    const found = await UserModel.findOne({ _id: userId, postLikes: postId });
    return found;
  }
  
  static async deleteAllByPostId({ postId }) {
    const updated = await UserModel.updateMany({}, {$pull: { postLikes: postId }})
    return updated;
  }

  static async create({ userId, postId }) {
    const created = await UserModel.findOneAndUpdate({ _id: userId }, {$addToSet: { postLikes: postId }})
    return created;
  }

  static async delete({ userId, postId }) {
    const deleted = await UserModel.findOneAndUpdate({ _id: userId }, {$pull: { postLikes: postId }})
    return deleted;
  }


  // 해당 post들의 likeCount를 -1 해줌
  static async decreaseLikeCountByPostIds({ postIds }) {
    const decreased = await PostModel.updateMany({ _id: { $in: postIds }}, {$inc: {likeCount: -1}});
    return decreased;
  }

  // 해당 post들을 좋아요한 user들의 postLikes 기록에서 post들의 id 삭제 (사용 x)
  // static async deleteAllByPostIds({ postIds }) {
  //   const updated = await UserModel.updateMany({}, {$pull: { postLikes: { $in: postIds } }});
  //   return updated;
  // }
}

>>>>>>> dev-back
export { Like };