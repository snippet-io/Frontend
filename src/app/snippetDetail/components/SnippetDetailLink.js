import { Link } from "react-router-dom";
import * as S from "./style";


const SnippetDetailLink = ({to, children}) => {
    return (
        <Link to={to}><S.SnippetDetailLink>{children}</S.SnippetDetailLink></Link>
    );
};

export default SnippetDetailLink;