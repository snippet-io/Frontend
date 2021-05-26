import SnippetList from "../components/snippetList/snippetList";
import { getCodesAPI, getUserAPI, getStarredUser } from "lib/api";
import { useEffect, useState } from "react";
import { postStarAPI, deleteStarAPI } from "lib/api";

const SnippetListContainer = () => {
  const [snippets, setSnippets] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("All");
  const [order, setOrder] = useState("date");
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCodesAPI({
          limit: 100,
          offset: 0,
          language: language === "All" ? null : language,
          order: order === "date" ? null : order,
        });
        setSnippets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [language, order]);

  useEffect(() => {
    const promiseArr =
      snippets.length && snippets.map((snippet) => getUserAPI(snippet.author));

    promiseArr &&
      Promise.all(promiseArr).then((res) => {
        setUserData(res);
        setIsLoading(false);
      });
  }, [snippets]);

  useEffect(() => {
    const promiseArr =
      snippets.length &&
      snippets.map((snippet) =>
        getStarredUser(snippet.id, localStorage.getItem("id"))
      );

    promiseArr &&
      Promise.all(promiseArr).then((snippetIds) => {
        setStarred(snippetIds.filter((id) => id !== 0));
      });
  }, [snippets]);

  const onStar = (id) => {
    (async () => {
      try {
        if (!starred.includes(id)) {
          await postStarAPI(id);

          setStarred(starred.concat([id]));
          setSnippets(
            snippets.map((snippet) => {
              if (snippet.id === id) {
                return {
                  ...snippet,
                  star_count: snippet.star_count + 1,
                };
              }
              return snippet;
            })
          );
        } else {
          await deleteStarAPI(id);
          setStarred(starred.filter((star) => star !== id));
          setSnippets(
            snippets.map((snippet) => {
              if (snippet.id === id) {
                return {
                  ...snippet,
                  star_count: snippet.star_count - 1,
                };
              }
              return snippet;
            })
          );
        }
      } catch (e) {
        console.error("Staring error");
      }
    })();
  };

  return (
    <SnippetList
      snippets={snippets}
      setSnippets={setSnippets}
      userData={userData}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      setOrder={setOrder}
      setLanguage={setLanguage}
      onStar={onStar}
      starred={starred}
    ></SnippetList>
  );
};

export default SnippetListContainer;
