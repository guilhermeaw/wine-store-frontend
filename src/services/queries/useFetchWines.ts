import { useQuery } from "react-query"

import { api } from "../api"

type Wine = {
  title: string
}

export const useFetchWines = () => {
  return useQuery('wines', () => (
    api.get<Wine[]>('/wines').then(response => response.data)
  ));
}
