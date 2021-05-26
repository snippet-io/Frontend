import { useEffect } from "react";
import { postLoginAPI } from "lib/api";
import qs from "qs";

const OAuthContainer = ({ history, location }) => {
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const res = await postLoginAPI(code);

        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("id", res.data.id);
        history.push("/new");
      } catch (error) {
        history.push("/error");
      }
    };

    getToken();
  }, [location, history]);
  return "Wait";
};

export default OAuthContainer;
