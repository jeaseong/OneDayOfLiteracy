import { useMutation, useQuery, useQueryClient } from "react-query";
import { get, post } from "../utils/api";

export function useCurrentUser() {
  const { isLoading, error, data, isFetching } = useQuery(
    "userState",
    () => get("user/current").then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: () => console.log("userToken 있음"),
      onError: () => console.log("userToken 없음"),
    }
  );

  const isLogin = !data && !isLoading && !error;

  return { userState: data, isLoading, isLogin, error, isFetching };
}

export const useUserLogin = () => {
  const queryClient = useQueryClient();

  return useMutation(async (loginData) => await post("user/login", loginData), {
    onSuccess: (res) => {
      const jwtToken = res.data.token;
      sessionStorage.setItem("userToken", jwtToken);
      queryClient.invalidateQueries("userState");
    },
    onError: (err) => console.log("onError", err),
  });
};
