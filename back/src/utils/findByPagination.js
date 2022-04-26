//model 과 { query, page, limit } 으로 페이지네이션
async function findbyPagination(model, options = {}, query = {}) {
  const { page, limit } = options;

  if (page && limit) {
    return await model
      .find(query)
      .skip((page - 1) * limit)
      .limit(limit);
  }

  return await model.find(query);
}

export { findbyPagination };
