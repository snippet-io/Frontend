import * as S from "./style";

const SortBarItem = (props) => {
  return (
    <S.SortBarText
      isSelected={props.isSelected}
      name={props.language}
      onClick={() => {
        if (props.isSelected) {
          return;
        }
        props.setIsLoading(true);
        props.setSelectedLanguage(props.language);
        props.setLanguage(props.language);
      }}
    >
      {props.language}
    </S.SortBarText>
  );
};

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
        <SortBarItem
          isSelected={selectedLanguage === "All"}
          language={"All"}
          setSelectedLanguage={setSelectedLanguage}
          setLanguage={setLanguage}
          setIsLoading={setIsLoading}
        >
          All
        </SortBarItem>
        {languageItems}
        <S.SortWrapper>
          <S.SortBarText
            isSelected={selectedOrder === "date"}
            onClick={() => {
              if (selectedOrder === "date") {
                return;
              }
              setSelectedOrder("date");
              setIsLoading(true);
              setOrder("date");
            }}
          >
            DATE
          </S.SortBarText>
          <S.SortBarText
            isSelected={selectedOrder === "stars"}
            onClick={() => {
              if (selectedOrder === "stars") {
                return;
              }
              setSelectedOrder("stars");
              setIsLoading(true);
              setOrder("stars");
            }}
          >
            STAR
          </S.SortBarText>
        </S.SortWrapper>
      </S.SortBar>
    </>
  );
};

export default SortBar;
