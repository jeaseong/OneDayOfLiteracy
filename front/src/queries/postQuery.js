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
      const staleUserData = queryClient.getQueryData(["userState"]);
      queryClient.setQueryData(["userState"], () => ({
        ...staleUserData,
        postLikes: [...staleUserData.postLikes, postId],
      }));

      // onError에서 rollback으로 받을 함수
      return () => queryClient.setQueryData(["userState"], staleUserData);
    },
    onError: (err, rollback) => rollback(),
  });
};

export const usePostDislike = (postId) => {
  const queryClient = useQueryClient();

  return useMutation(() => del(`like/${postId}`), {
    onMutate: () => {
      const staleUserData = queryClient.getQueryData(["userState"]);
      const newPostLikeList = staleUserData.postLikes.filter(
        (likeId) => likeId !== postId
      );
      queryClient.setQueryData(["userState"], () => ({
        ...staleUserData,
        postLikes: newPostLikeList,
      }));

      // onError에서 rollback으로 받을 함수
      return () => queryClient.setQueryData(["userState"], staleUserData);
    },
    onSettled: () => console.log("좋아요"),
    onError: (err, rollback) => rollback(),
  });
};
