import * as S from "./style";

const LangDropDown = ({ language }) => {
  return (
    <S.LangDropdownSelect>
      <S.LangDropdownOption value={language}>Python</S.LangDropdownOption>
    </S.LangDropdownSelect>
  );
};

export default LangDropDown;
