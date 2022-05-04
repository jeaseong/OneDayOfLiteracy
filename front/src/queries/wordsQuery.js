import { useQuery, useQueryClient } from "react-query";
import { get } from "../utils/api";

export function useWordsQuery() {
  const queryClient = useQueryClient();
  const { userState } = queryClient.getQueryData("userState");
  const { isFetching, error, data } = useQuery(
    "words",
    () => get(`users/${userState.id}/userword`).then((res) => res.data),
    {
      staleTime: Infinity,
      onSuccess: () => console.log("단어가 준비되었습니다."),
      onError: () => {
        console.log("테스트가 준비가 안됐습니다.");
        queryClient.setQueryData("words", false);
      },
    }
  );
  return { words: data, isFetching, error };
}
