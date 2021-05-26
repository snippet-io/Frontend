import * as S from "./style";

const SortBar = ({
  languages,
  selectedLanguage,
  setSelectedLanguage,
  setOrder,
  setLanguage,
  setIsLoading,
  setSelectedOrder,
  selectedOrder,
}) => {
  const languageItems = Object.keys(languages).map((language) => {
    return (
      <SortBarItem
        isSelected={selectedLanguage === language}
        key={language}
        language={language}
        setSelectedLanguage={setSelectedLanguage}
        setLanguage={setLanguage}
        setIsLoading={setIsLoading}
      />
    );
  });

  return (
    <>
      <S.SortBar>
        {languageItems}
        <S.SortWrapper>
          <S.SortBarText
            isSelected={selectedOrder === "date"}
            onClick={() => {
              setSelectedOrder("date");
              setIsLoading(true);
              setOrder("date");
            }}
          >
            DATE
          </S.SortBarText>
          <S.SortBarText
            isSelected={selectedOrder === "star"}
            onClick={() => {
              setSelectedOrder("star");
              setIsLoading(true);
              setOrder("star");
            }}
          >
            STAR
          </S.SortBarText>
        </S.SortWrapper>
      </S.SortBar>
    </>
  );
};

const SortBarItem = (props) => {
  return (
    <S.SortBarText
      isSelected={props.isSelected}
      name={props.language}
      onClick={() => {
        props.setIsLoading(true);
        props.setSelectedLanguage(props.language);
        props.setLanguage(props.language);
      }}
    >
      {props.language}
    </S.SortBarText>
  );
};

export default SortBar;
