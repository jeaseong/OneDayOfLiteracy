import { useMutation, useQuery, useQueryClient } from "react-query";
import { get, post } from "../utils/api";
import { useNavigate } from "react-router-dom";

export function useCurrentUser() {
  const { isLoading, error, data } = useQuery(
    "userState",
    () => get("user/current").then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      staleTime: Infinity,
      onSuccess: () => console.log("userToken 있음"),
      onError: () => console.log("userToken 없음"),
    }
  );

  return { userState: data, isLoading, error };
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
