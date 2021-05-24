import SnippetList from "../components/snippetList/snippetList";
import { getCodesAPI, getUserAPI } from "lib/api";
import { useEffect, useState } from "react";

const SnippetListContainer = () => {
  const [snippets, setSnippets] = useState([]);
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

    // console.log(promiseArr);
    promiseArr &&
      Promise.all(promiseArr).then((res) => {
        console.log(res);
        setUserData(res);
        setIsLoading(false);
      });

    (async () => {
      try {
        const res = await getCodesAPI(100, 0);
        setSnippets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [snippets]);

  useEffect(() => {}, []);

  return (
    <SnippetList
      snippets={snippets}
      userData={userData}
      isLoading={isLoading}
    ></SnippetList>
  );
};

export default SnippetListContainer;
