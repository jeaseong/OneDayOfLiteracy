import { useInfiniteQuery } from "react-query";
import { get } from "../utils/api";

export function useGetPostList(endpoint = "") {
  const fetchPostList = async ({ pageParam = 1 }) => {
    const res = await get(`${endpoint}page=${pageParam}&limit=9`);
    const { posts, isLast } = res.data;
    return { posts, nextPage: pageParam + 1, isLast };
  };

  return useInfiniteQuery(["posts", endpoint], fetchPostList, {
    staleTime: 60000,
    cacheTime: 120000,
    getNextPageParam: (lastPage) =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
  });
}
