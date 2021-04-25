import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';


const GetAccessToken = ({ history, location }) => {
  useEffect(() => {
    const getToken = async () => {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/github/accesstoken`, {
          code,
        });

        localStorage.setItem('accessToken', res.data.access_token);
        history.push('/code'); 
      } catch (error) {
        history.push('/error');
      }
    }

    getToken();
  }, [location, history]);
  return "Wait"; // 이 부분에 로딩바와 같은 페이지를 렌더링 해도 좋아요.
}

export default GetAccessToken;

