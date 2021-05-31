import * as S from "./style";
import { useState } from "react";
import InputContainer from "app/search/container/InputContainer";
import ProfileSnippetListContainer from "../container/ProfileSnippetListContainer";

const Profile = ({ user }) => {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <S.PageWarpper>
        <S.ProfileWarpper>
          <S.ProfileImg src={user.profile_image_url}></S.ProfileImg>
          <S.ProfileName>{user.name}</S.ProfileName>
        </S.ProfileWarpper>

        <S.ListWarpper>
          <InputContainer keyword={keyword} setKeyword={setKeyword} />
          <ProfileSnippetListContainer searchKeyword={keyword} user={user} />
        </S.ListWarpper>
      </S.PageWarpper>
    </>
  );
};

export default Profile;
