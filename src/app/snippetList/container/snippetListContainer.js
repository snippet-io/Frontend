import SnippetList from "../components/snippetList/snippetList";
import { getCodesAPI } from "lib/api";
import { useEffect, useState } from "react";

const SnippetListContainer = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCodesAPI(10, 0);
        console.log(res);
        setSnippets(res.data);
      } catch (err) {
        // alert("코드 목록을 불러올 수 없어요");
      }
    })();
  }, []);

  return <SnippetList snippets={snippets}></SnippetList>;
};

export default SnippetListContainer;
