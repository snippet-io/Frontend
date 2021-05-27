import { useHistory } from "react-router";
import NotFound from "../components/notFound";

const NotFoundContainer = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return <NotFound goBack={goBack} />;
};
export default NotFoundContainer;
