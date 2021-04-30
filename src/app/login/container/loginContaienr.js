import Login from "../components/login";

const gotoURL = (url) => {
  window.location.href = url;
};

const LoginContainer = () => {
  return <Login gotoURL={gotoURL} />;
};

export default LoginContainer;
