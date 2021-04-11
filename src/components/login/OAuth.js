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
        // 이 부분은 express에 요청하여 JWT 토큰을 발급합니다.
        const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/github/accesstoken`, {
          code,
        });

        // 유저 JWT 토큰을 저장합니다.
        localStorage.setItem('accessToken', res.data.access_token);
        history.push('/code'); // 로그인이 완료되면 보여줄 페이지✔
      } catch (error) {
        history.push('/error');
      }
    }

    getToken();
  }, [location, history]);
  return "Wait"; // 이 부분에 로딩바와 같은 페이지를 렌더링 해도 좋아요.
}

export default GetAccessToken;

