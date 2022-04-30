import { useQuery, useQueryClient } from "react-query";
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

/**
 * 전체 글 목록을 받아옵니다.
 * @returns {{postList: array, isFetching: boolean, error: unknown}}
 */
export function useGetPostList() {
  const queryclient = useQueryClient();

  const { isFetching, error, data } = useQuery(
    ["posts"],
    () => get("posts").then((res) => res.data),
    {
      staleTime: 30000,
      cacheTime: 120000,
      onSuccess: (data) => queryclient.setQueryData(["posts"], data),
      onError: () => queryclient.setQueryData(["posts"], []),
    }
  );

  return { postList: data, isFetching, error };
}
