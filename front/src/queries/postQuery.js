import { useInfiniteQuery, useQuery, useQueryClient } from "react-query";
import { get } from "../utils/api";

/**
 * 유저 프로필 페이지에서 보여줄 글 목록을 받아옵니다.
 * @param {string} id
 * @returns {{userPosts: array, isFetching: boolean, error: boolean}}
 */
export function useGetUserPostList(id) {
  const queryclient = useQueryClient();

  const { isFetching, error, data } = useQuery(
    ["post", id],
    () => get(`posts/users/${id}`).then((res) => res.data),
    {
      staleTime: 60000,
      cacheTime: 120000,
      onSuccess: (data) => queryclient.setQueryData(["post", id], data),
    }
  );

  return { userPosts: data, isFetching, error };
}

export function useGetPostList(endpoint = "") {
  const fetchPostList = async ({ pageParam = 1 }) => {
    const res = await get(`posts?${endpoint}&page=${pageParam}&limit=9`);
    const { posts, isLast } = res.data;
    return { posts, nextPage: pageParam + 1, isLast };
  };

  return useInfiniteQuery(["posts"], fetchPostList, {
    staleTime: 60000,
    cacheTime: 120000,
    getNextPageParam: (lastPage) =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
  });
}
