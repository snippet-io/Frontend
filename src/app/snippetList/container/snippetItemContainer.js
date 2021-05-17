import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SnippetItem from "../components/snippetItem/snippetItem";
import { getUserAPI } from "lib/api";
import { calculateCreatedTimestamp } from "utils/createdTime";

const SnippetItemContainer = ({ snippet }) => {
  const history = useHistory();
  const [userData, setuserData] = useState({
    authorName: "",
    profileImageURL: "",
  });

  const { id, title, description, language, author, created_datetime } =
    snippet;
  const createdTime = calculateCreatedTimestamp(new Date(created_datetime));

  const goDetail = () => {
    history.push(`/codes/${id}`);
  };
  // 함수가 실행될 때까지 렌더링이 기다리게 만들기
  useEffect(() => {
    (async () => {
      const user = await getUserAPI(author);
      setuserData({
        ...userData,
        authorName: user.data.name,
        profileImageURL: user.data.profile_image_url,
      });
    })();
  }, [author, userData]);

  return (
    <div>
      <SnippetItem
        title={title}
        description={description}
        created_datetime={createdTime}
        author={userData.authorName}
        language={language}
        profileImageURL={userData.profileImageURL}
        starCount={1}
        goDetail={goDetail}
      ></SnippetItem>
    </div>
  );
};

export default SnippetItemContainer;
