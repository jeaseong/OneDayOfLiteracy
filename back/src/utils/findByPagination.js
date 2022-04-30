import { isEmptyArray } from "./validation/isEmptyType";

// model 과 { query, page, limit } 으로 페이지네이션

async function findByPagination2(model, options = {}, query = {}, populateField = "", populateOption = {}) {
  const { page, limit } = options;

  //let [posts, next_posts,isLast] = [null,null,null];
  let posts=null, next_posts=null, isLast=null;
  
  if (page && limit) {
    [posts, next_posts] = await Promise.all([
      model
        .find(query)
        .lean()
        .skip((page - 1) * limit)
        .limit(limit)
        .populate(populateField, { _id: 0, subject: 1 }),
      model
        .find(query)
        .lean()
        .skip(page * limit)
        .limit(limit)
        .populate(populateField, { _id: 0, subject: 1 }),
    ]);
    
    if(isEmptyArray(next_posts)){
      isLast = true;
    } else {
      isLast = false;
    }
    

  } else {
    posts = await model
      .find(query)
      .lean()
      .populate(populateField, populateOption);
    isLast = true;
  }

  return {
    isLast,
    posts,
  }
}

// 결과 예시
// {
//   isLast: true,
//   posts: [
//     {
//       _id: new ObjectId("626c1f46c5537963f7a9c534"),
//       title: '속담공부📚',
//       content: '가는 말이 고와야 오는 말도 곱다',
//       tags: [Array],
//       subjectId: new ObjectId("6266d188932900c85ece9510"),
//       author: 'elice modified',
//       userId: new ObjectId("6262e83919e6e1394bca128b"),
//       imageUrls: [],
//       category: '소설',
//       createdAt: 2022-04-29T17:24:22.632Z,
//       updatedAt: 2022-04-29T17:24:22.632Z,
//       __v: 0,
//       subject: [Object]
//     }
//   ]
// }

export { findByPagination2 };

// ※ lean() 이란?
// lean 쿼리를 이용하면 쿼리 객체가 리턴되는 것이 아니라 순수 JSON object가 반환
// lean()을 쓰면 mongodb, mongoose에서 지원해주는 것들의 일부 사용 불가(아래) => 그러나, populate 랑 virtual populate 모두 가능!
// Change tracking
// Casting and validation
// Getters and setters
// Virtuals (including "id")
// save() function
// 출처 : https://velog.io/@moongq/MongoDBMongoose-%ED%8D%BC%ED%8F%AC%EB%A8%BC%EC%8A%A4-%ED%96%A5%EC%83%81%EC%8B%9C%ED%82%A4%EA%B8%B0



