import { memo } from "react";
import SnippetList from "app/snippetList/components/snippetList/snippetList";
import { getUserCodesAPI, getStarredUser } from "lib/api";
import { useEffect, useState } from "react";
import { postStarAPI, deleteStarAPI } from "lib/api";

const ProfileSnippetListContainer = ({ searchKeyword, user }) => {
  const [userData, setUserData] = useState([]);
  const [snippets, setSnippets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("All");
  const [order, setOrder] = useState("date");
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getUserCodesAPI({
          id: user.id,
          limit: 100,
          offset: 0,
          language: language === "All" ? null : language,
          order: order === "date" ? null : order,
          searchKeyword: searchKeyword,
        });
        setSnippets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [language, order, searchKeyword, user]);

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

  useEffect(() => {
    let users = [];
    for (let i = 0; i < snippets.length; i++) {
      users.push({
        data: user,
      });
    }
    setUserData(users);
    setIsLoading(false);
  }, [snippets, user]);

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

export default memo(ProfileSnippetListContainer);
