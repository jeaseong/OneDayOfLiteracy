import { useInfiniteQuery, useQueryClient, useMutation } from "react-query";
import { get, post, put, del } from "utils/api";

export const useGetCommentList = (postId) => {
  const fetchCommentList = async ({ pageParam = 1 }) => {
    const res = await get(`posts/${postId}/comments?page=${pageParam}&limit=6`);
    const { comments, isLast } = res.data;
    return { comments, nextPage: pageParam + 1, isLast };
  };

  return useInfiniteQuery(["comments", postId], fetchCommentList, {
    staleTime: 60000,
    cacheTime: 120000,
    getNextPageParam: (lastPage) =>
      !lastPage.isLast ? lastPage.nextPage : undefined,
  });
};

export const usePostComment = (postId) => {
  const queryClient = useQueryClient();
  //comment에 parentId가 있으면 대댓글, 없으면 일반 부모 댓글
  // parentId 있으면 setQueryData 해줘야됨. 바로 보이게
  return useMutation(
    async (comment) => await post(`posts/${comment.postId}/comments`, comment),
    {
      onMutate: (comment) => {
        const curComments = queryClient.getQueryData([
          "comments",
          comment.postId,
        ]);
      },
      onSuccess: () => queryClient.invalidateQueries(["comments", postId]),

      onError: (err) => console.log(err),
    }
  );
};

export const useUpdateComment = (commentId, content, postId) => {
  const queryClient = useQueryClient();
  return useMutation(
    (commentId, content) => put(`comments/${commentId}`, content),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["comments", postId]);
        console.log("성공?");
      },
      onError: () => console.log("이게 모얌"),
    }
  );
};

export const useDeleteComment = () => {
  const queryClient = useQueryClient();
  return useMutation((comment) => del(`comments/`, comment._id), {
    onSuccess: () => {
      queryClient.invalidateQueries("comments");
    },
    onError: () => console.log("이게 모얌"),
  });
};
