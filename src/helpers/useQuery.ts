import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "./api/fetchApi";

const { REACT_APP_BACKEND_URL } = process.env;

const useQueryApi = (
  key: string,
  payload: string
) => {
  const { data, isLoading } = useQuery({queryKey: [key],
    queryFn: () => fetchApi(`${REACT_APP_BACKEND_URL}/${payload}`),
    enabled: true
  })
    return {
      data,
      isLoading
    }
}

export default useQueryApi;