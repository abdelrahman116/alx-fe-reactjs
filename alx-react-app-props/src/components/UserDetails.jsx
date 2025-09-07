import { useContext } from "react";
import { UserContext } from "./UserContext";
function UserDetails() {
  return (
    <div>
      <p>Name: {UserContext.name}</p>
      <p>Email: {UserContext.email}</p>
    </div>
  );
}

export default UserDetails;
