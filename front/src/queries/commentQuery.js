import { useInfiniteQuery } from "react-query";
import { get } from "../utils/api";

export function useGetCommentList(postId) {
  const fetchCommentList = async ({ pageParam = 1 }) => {
    const res = await get("");
    const { comments, isLast } = res.data;
    return { comments, nextPage: pageParam + 1, isLast };
  };

  return useInfiniteQuery(["comments", postId], fetchCommentList, {
    staleTime: 60000,
    cacheTime: 120000,
    getNextPageParam: (lastPage) =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
  });
}
