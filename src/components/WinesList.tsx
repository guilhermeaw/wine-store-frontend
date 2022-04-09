import { useFetchWines } from "../services/queries";

export const WinesList = () => {
  const { data } = useFetchWines();

  return (
    <div>
      {data?.map(wine => (
        <h1>{wine.title}</h1>
      ))}
    </div>
  )
}
