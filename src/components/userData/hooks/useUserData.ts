import { useEffect, useState } from "react";
import efexClient from "../../../api/efexClient";

const useUserData = () => {
  const [userData, setUserData] = useState<{
    name: string;
    username: string;
    avatar: string;
  }>({
    name: "",
    username: "",
    avatar: "",
  });

  useEffect(() => {
    efexClient.get("/user").then((response) => {
      setUserData(response.data.user);
    });
  }, []);

  return { userData };
};

export default useUserData;
