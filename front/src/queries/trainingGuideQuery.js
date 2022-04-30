import React from "react";
import { useQuery } from "react-query";
import { get } from "../utils/api";

export function useTrainingGuide() {
  const { isfetching, error, data } = useQuery(
    "trainingstep",
    () => get("training/guides").then((res) => res.data),
    {
      initialData: false,
      staleTime: Infinity,
      onSuccess: () => console.log("스켈레톤이 있으면 좋겠다."),
      onError: () => console.log("실패할 일이 있을까.."),
    }
  );

  return { userState: data, isfetching, isLogin: !!data, error };
}
