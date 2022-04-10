import { useQuery } from "react-query"

import { Wine } from "../../models/Wine";
import { api } from "../api"

export const useFetchWines = () => {
  return useQuery('wines', () => (
    api.get<Wine[]>('/wines').then(response => response.data)
  ));
}
