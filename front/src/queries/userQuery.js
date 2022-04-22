import { useMutation, useQuery, useQueryClient } from "react-query";
import { get, post } from "../utils/api";
import { useNavigate } from "react-router-dom";

export function useCurrentUser() {
  const queryclient = useQueryClient();
  const { isLoading, error, data } = useQuery(
    "userState",
    () => get("user/current").then((res) => res.data),
    {
      staleTime: Infinity,
      onSuccess: () => console.log("userToken이 없으면 userState는 false"),
      onError: () => {
        console.log("userToken 없음");
        queryclient.setQueryData("userState", false);
      },
    }
  );

  return { userState: data, isLoading, isLogin: data, error };
}

export const useUserLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation(async (loginData) => await post("user/login", loginData), {
    onSuccess: (res) => {
      const jwtToken = res.data.token;
      sessionStorage.setItem("userToken", jwtToken);
      queryClient.invalidateQueries("userState");
      navigate("/");
    },
    onError: (err) => console.log("onError", err),
  });
};
