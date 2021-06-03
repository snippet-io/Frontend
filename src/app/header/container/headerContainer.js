import { getUserAPI } from "lib/api";
import { useEffect, useState } from "react";
import Header from "../components/header";

const HeaderContainer = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      console.log(localStorage.getItem("id"));
      if (localStorage.getItem("id")) {
        const userData = await getUserAPI(localStorage.getItem("id"));
        setUser(userData.data);
      } else {
        setUser(null);
      }
    })();
  }, []);

  return (
    <div>
      <Header user={user} />
    </div>
  );
};

export default HeaderContainer;
