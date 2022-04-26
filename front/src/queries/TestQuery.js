import { useMutation, useQuery, useQueryClient } from "react-query";
import { get, post } from "../utils/api";

export function useTestQuery() {
  const queryClient = useQueryClient();
  const { isLoading, error, data } = useQuery(
    "test",
    () => get("test").then((res) => res.data),
    {
      staleTime: Infinity,
      onSuccess: () => console.log("test가 준비되었습니다."),
      onError: () => {
        console.log("테스트가 준비가 안됐습니다.");
        queryClient.setQueryData("test", false);
      },
    }
  );
  return { test: data, isLoading, isTesting: data, error };
}
