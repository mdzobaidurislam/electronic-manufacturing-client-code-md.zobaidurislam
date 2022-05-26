import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      const currentUser = {
        email: email,
        name: user?.user?.displayName,
      };
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      if (email) {
        const { data } = await axios.put(
          "https://electric-manufacturer-server.herokuapp.com/api/user",
          currentUser,
          config
        );
        setToken(data.token);
        if (data.token) {
          localStorage.setItem("token", JSON.stringify(data.token));
        }
      }
    };
    getToken();
  }, [user?.user?.email, user?.user?.displayName]);
  return { token };
};

export default useToken;
