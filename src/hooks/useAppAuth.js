import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";

const useAppAuth = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u) {
        // User is signed in.
        console.log("User is logged in:", u.uid);
      } else {
        console.log("User is not logged in");
      }
    });
  }, []);
};

export default useAppAuth;
