import Profile from "../components/profile";
import { useEffect, useState } from "react";
import { getUserAPI } from "lib/api";

const ProfileContainer = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      const res = await getUserAPI(localStorage.getItem("id"));
      setUser(res.data);
    })();
  }, []);

  return (
    <>
      <Profile user={user} />
    </>
  );
};

export default ProfileContainer;
