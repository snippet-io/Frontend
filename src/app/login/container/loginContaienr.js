import Login from "../components/login";

const LoginContainer = () => {
  const gotoURL = (url) => {
    window.location.href = url;
  };

  return <Login gotoURL={gotoURL} />;
};

export default LoginContainer;
