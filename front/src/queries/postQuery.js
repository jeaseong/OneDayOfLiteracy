import { useInfiniteQuery, useMutation, useQueryClient } from "react-query";
import { del, get, post } from "../utils/api";

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

export const usePostLikeAdd = (postId) => {
  const queryClient = useQueryClient();

  return useMutation(() => post(`like/${postId}`), {
    onMutate: () => {
      const staleCurrentUserData = queryClient.getQueryData(["userState"]);
      queryClient.setQueryData(["userState"], () => ({
        ...staleCurrentUserData,
        postLikes: [...staleCurrentUserData.postLikes, postId],
      }));

      // onError에서 rollback으로 받을 함수
      return () => {
        queryClient.setQueryData(["userState"], staleCurrentUserData);
      };
    },
    onError: (err, rollback) => rollback(),
  });
};

export const usePostDislike = (postId) => {
  const queryClient = useQueryClient();

  return useMutation(() => del(`like/${postId}`), {
    onMutate: () => {
      const staleCurrentUserData = queryClient.getQueryData(["userState"]);
      const newPostLikeList = staleCurrentUserData.postLikes.filter(
        (likeId) => likeId !== postId
      );
      queryClient.setQueryData(["userState"], () => ({
        ...staleCurrentUserData,
        postLikes: newPostLikeList,
      }));

      // onError에서 rollback으로 받을 함수
      return () => {
        queryClient.setQueryData(["userState"], staleCurrentUserData);
      };
    },
    onSettled: () => console.log("좋아요"),
    onError: (err, rollback) => rollback(),
  });
};
