import { useQuery } from "react-query";
import { get } from "../utils/api";

export function useCurrentUser() {
  let isLogin = false;
  const { isLoading, error, data, isFetching } = useQuery(
    "userState",
    () => get("user/current").then((res) => res.data),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      onSuccess: (data) => {
        if (!data) isLogin = true;
      },
      onError: () => console.log("userToken 없음"),
    }
  );

  return { userState: data, isLoading, isLogin, error, isFetching };
}
