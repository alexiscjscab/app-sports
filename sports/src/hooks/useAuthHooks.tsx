import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { UserEmail } from "../types/types";


const useAuth = () => {
  const [user, setUser] = useState<UserEmail>({
    email: "",
  })
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          ...user,
          email: `${currentUser.email}`,
        });
      } else {
        setUser({
          ...user,
          email: "",
        });
      }
    });
  }, []);
  return user;
};

export default useAuth;
