import { useAuth } from "../store/Auth";

export const StorePage = () => {
  const {signOut} = useAuth();

  const handleClick = () => {
    signOut();
  }

  return (
    <button onClick={handleClick}>store</button>
  )
}
