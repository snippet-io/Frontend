import { useHistory } from "react-router-dom";
import SnippetItem from "../components/snippetItem/snippetItem";
import { calculateCreatedTimestamp } from "utils/createdTime";
import { postStarAPI } from "lib/api";
import { useState } from "react";

const SnippetItemContainer = ({ snippet, userData }) => {
  const history = useHistory();
  const [starred, setStarred] = useState([]);

  const { id, title, description, language, created_datetime, star_count } =
    snippet;
  const createdTime = calculateCreatedTimestamp(new Date(created_datetime));
  let starredArr = [];

  const goDetail = () => {
    history.push(`/codes/${id}`);
  };

  const onStar = (id) => {
    (async () => {
      try {
        await postStarAPI(id);
      } catch (e) {
        console.error("Staring error");
      }
    })();

    starredArr = starred;
    starredArr.push(id);

    setStarred(starredArr);
  };

  return (
    <div>
      <SnippetItem
        id={id}
        title={title}
        description={description}
        created_datetime={createdTime}
        author={userData?.data?.name}
        language={language}
        profileImageURL={userData?.data?.profile_image_url}
        starCount={star_count}
        goDetail={goDetail}
        onStar={onStar}
        starred={starred}
      />
    </div>
  );
};

export default SnippetItemContainer;
