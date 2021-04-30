import { useEffect } from "react";
import axios from "axios";
import qs from "qs";

const OAuthContainer = ({ history, location }) => {
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/auth/github/accesstoken`,
          {
            code,
          }
        );

        localStorage.setItem("accessToken", res.data.access_token);
        localStorage.setItem("id", res.data.id);

        history.push("/code");
      } catch (error) {
        console.log(code);
        // history.push("/error");
      }
    };

    getToken();
  }, [location, history]);
  return "Wait";
};

export default OAuthContainer;
