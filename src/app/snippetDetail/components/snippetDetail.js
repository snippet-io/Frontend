import SnippetDescription from "./snippetDescription";
import Header from "app/header/components/header";
import SnippetHeader from "./snippetHeader";
import * as S from "./style";
import SnippetCode from "./snippetCode";
import SnippetDetailLink from "./SnippetDetailLink";

const SnippetDetail = ({
  snippet,
  isUserAuthor,
  urlGoingEdit,
  urlGoingToBackTheList,
}) => {
  return (
    <>
      <Header />
      {snippet && (
        <S.SnippetDetailWrapper>
          <SnippetHeader snippet={snippet} />
          <SnippetDescription description={snippet.description} />
          <SnippetCode code={snippet.code} language={snippet.language} />
          <S.LinksWrapper>
            {isUserAuthor && (
              <SnippetDetailLink to={urlGoingEdit}>Edit</SnippetDetailLink>
            )}
            <SnippetDetailLink to={urlGoingToBackTheList}>
              Back to the list
            </SnippetDetailLink>
          </S.LinksWrapper>
        </S.SnippetDetailWrapper>
      )}
    </>
  );
};

export default SnippetDetail;
