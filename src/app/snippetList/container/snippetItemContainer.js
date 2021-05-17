import { useEffect, useState } from "react";
import SnippetItem from "../components/snippetItem/snippetItem";
import { getUserAPI } from "lib/api";
import { calculateCreatedTimestamp } from "utils/createdTime";

const SnippetItemContainer = ({ snippet }) => {
  const [authorName, setAuthorName] = useState("");

  const { title, description, language, author, created_datetime } = snippet;
  const createdTime = calculateCreatedTimestamp(new Date(created_datetime));

  // 함수가 실행될 때까지 렌더링이 기다리게 만들기
  useEffect(() => {
    (async () => {
      const userRes = await getUserAPI(author);
      setAuthorName(userRes.data.name);
    })();
  }, [author]);

  return (
    <div>
      <SnippetItem
        title={title}
        description={description}
        created_datetime={createdTime}
        author={authorName}
        language={language}
        starCount={1}
      ></SnippetItem>
    </div>
  );
};

export default SnippetItemContainer;
