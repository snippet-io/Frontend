import { useState } from "react";
import SnippetItem from "../components/snippetItem/snippetItem";
import { getUserAPI } from "lib/api";
import { calculateCreatedTimestamp } from "utils/createdTime";

const SnippetItemContainer = ({ snippet }) => {
  const [authorName, setAuthorName] = useState("");

  const { title, content, description, author, created_datetime } = snippet;
  const createdTime = calculateCreatedTimestamp(new Date(created_datetime));

  useState(() => {
    (async () => {
      const res = await getUserAPI(author);
      setAuthorName(res.data.name);
    })();
  }, []);

  return (
    <div>
      <SnippetItem
        title={title}
        content={content}
        description={description}
        created_datetime={createdTime}
        author={authorName}
      ></SnippetItem>
    </div>
  );
};

export default SnippetItemContainer;
