import { useHistory } from "react-router-dom";
import SnippetItem from "../components/snippetItem/snippetItem";
import { calculateCreatedTimestamp } from "utils/createdTime";

const SnippetItemContainer = ({ snippet, userData }) => {
  const history = useHistory();

  const { id, title, description, language, created_datetime, star_count } =
    snippet;
  const createdTime = calculateCreatedTimestamp(new Date(created_datetime));

  const goDetail = () => {
    history.push(`/codes/${id}`);
  };

  return (
    <div>
      <SnippetItem
        title={title}
        description={description}
        created_datetime={createdTime}
        author={userData?.data?.name}
        language={language}
        profileImageURL={userData?.data?.profile_image_url}
        starCount={star_count}
        goDetail={goDetail}
      />
    </div>
  );
};

export default SnippetItemContainer;
