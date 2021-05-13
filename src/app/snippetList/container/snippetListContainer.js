import SnippetItemContainer from "./snippetItemContainer";
import SnippetList from "../components/snippetList/snippetList";
import { getCodesAPI } from "lib/api";
import { useEffect, useState } from "react";

const SnippetListContainer = () => {
  const [snippets, setSnippets] = useState([]);
  useEffect(() => {
    getCodesAPI(0, 10).then((res) => {
      setSnippets(res.data);
    });
  }, []);

  return <SnippetList snippets={snippets}></SnippetList>;
};

export default SnippetListContainer;
