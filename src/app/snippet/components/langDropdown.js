import * as S from "./style";

const LangDropDown = ({
  languages,
  setSelectedLanguage,
  languageList,
  onChangeInput,
  snippetState,
}) => {
  const languageOptions = languages.map((language) => {
    return (
      <S.LangDropdownOption key={language} value={language}>
        {language}
      </S.LangDropdownOption>
    );
  });

  return (
    <S.LangDropdownSelect
      value={snippetState.language}
      name="language"
      onChange={(e) => {
        onChangeInput(e);
        setSelectedLanguage(languageList[e.target.value].getFullName());
      }}
    >
      {languageOptions}
    </S.LangDropdownSelect>
  );
};

export default LangDropDown;
