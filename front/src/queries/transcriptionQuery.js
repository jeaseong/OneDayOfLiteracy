import { useQuery } from "react-query";
import { get } from "utils/api";

export function useTranscriptionQuery() {
  const { isFetching, error, data } = useQuery(
    "transcription",
    async () => await get(``).then((res) => res.data),
    {
      staleTime: Infinity,
      onSuccess: () => console.log("단어가 준비되었습니다."),
      onError: () => {
        console.log("테스트가 준비가 안됐습니다.");
      },
    }
  );
  return { transcription: data, isFetching, error };
}
