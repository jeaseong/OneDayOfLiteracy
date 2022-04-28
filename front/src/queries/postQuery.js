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
