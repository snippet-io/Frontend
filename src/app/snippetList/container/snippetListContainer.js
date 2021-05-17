import SnippetList from "../components/snippetList/snippetList";
import { getCodesAPI } from "lib/api";
import { useEffect, useState } from "react";

const SnippetListContainer = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await getCodesAPI(100, 0);
        setSnippets(res.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return <SnippetList snippets={snippets}></SnippetList>;
};

export default SnippetListContainer;
