import { useContext } from "react";
import { AuthContext } from "../../context";

export default function HomePage() {
  const { admin } = useContext(AuthContext);

  console.log(admin);
  return (
    <div>
    </div>
  );
}
