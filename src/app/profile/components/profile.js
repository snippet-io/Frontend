import * as S from "./style";
import { useState } from "react";
import InputContainer from "app/search/container/InputContainer";
import ProfileSnippetListContainer from "../container/ProfileSnippetListContainer";

const Profile = ({ user }) => {
  const [keyword, setKeyword] = useState("");
  const [selectedList, setSelectedList] = useState("Mine");
  return (
    <>
      <S.PageWarpper>
        <S.ProfileWarpper>
          <S.ProfileImg src={user.profile_image_url}></S.ProfileImg>
          <S.ProfileName>{user.name}</S.ProfileName>
          <S.ProfileAWarpper
            selectedList={selectedList === "Mine"}
            onClick={() => {
              setSelectedList("Mine");
            }}
          >
            <S.ProfileText selectedList={selectedList === "Mine"}>
              Mine
            </S.ProfileText>
          </S.ProfileAWarpper>
          <S.ProfileAWarpper
            selectedList={selectedList === "Star"}
            onClick={() => {
              setSelectedList("Star");
            }}
          >
            <S.ProfileText selectedList={selectedList === "Star"}>
              Star
            </S.ProfileText>
          </S.ProfileAWarpper>
        </S.ProfileWarpper>

        <S.ListWarpper>
          <InputContainer keyword={keyword} setKeyword={setKeyword} />
          <ProfileSnippetListContainer
            searchKeyword={keyword}
            user={user}
            selectedList={selectedList}
          />
        </S.ListWarpper>
      </S.PageWarpper>
    </>
  );
};

export default Profile;
