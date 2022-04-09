import { useFetchWines } from "../services/queries";

export const WinesList = () => {
  const { data } = useFetchWines();

  return (
    <div>
      {data?.map(wine => (
        <p>{wine.title}</p>
      ))}
    </div>
  )
}
