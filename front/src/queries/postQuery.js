import { useQuery, useQueryClient } from "react-query";
import { get } from "../utils/api";

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

export function useGetPostList() {
  const queryclient = useQueryClient();

  const { isFetching, error, data } = useQuery(
    ["posts"],
    () => get("posts").then((res) => res.data),
    {
      staleTime: 30000,
      cacheTime: 120000,
      onSuccess: (data) => queryclient.setQueryData(["posts"], data),
    }
  );

  return { postList: data, isFetching, error };
}
