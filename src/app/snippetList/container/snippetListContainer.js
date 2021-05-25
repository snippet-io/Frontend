import SnippetList from "../components/snippetList/snippetList";
import { getCodesAPI, getUserAPI } from "lib/api";
import { useEffect, useState } from "react";

const SnippetListContainer = () => {
  const [snippets, setSnippets] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [language, setLanguage] = useState("All");
  const [order, setOrder] = useState("date");

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
      snippets.length &&
      snippets.map((snippet) => {
        const promise = new Promise((resolve, rejected) => {
          const res = getUserAPI(snippet.author);

          if (res) {
            resolve(res);
          } else {
            rejected();
          }
        });
        return promise;
      });

    promiseArr &&
      Promise.all(promiseArr).then((res) => {
        setUserData(res);
        setIsLoading(false);
      });
  }, [snippets]);

  return (
    <SnippetList
      snippets={snippets}
      setSnippets={setSnippets}
      userData={userData}
      isLoading={isLoading}
      setIsLoading={setIsLoading}
      setOrder={setOrder}
      setLanguage={setLanguage}
    ></SnippetList>
  );
};

export default SnippetListContainer;
