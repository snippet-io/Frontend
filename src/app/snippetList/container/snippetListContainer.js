import SnippetItemContainer from "./snippetItemContainer";
import SnippetList from "../components/snippetList";
import { getCodesAPI } from "lib/api";
import { useEffect, useState } from "react";

function calculateTimestamp(timestamp) {
  // YYYY-MM-DDTHH:MM:SS.sss+09:00
  // - timestamp example

  const now = new Date();
  const ago = new Date(timestamp);

  let millisecond = now - ago;
  let second = millisecond / 1000;
  let minute = second / 60;
  let hour = second / 60;

  if (hour > 24) {
    return `${timestamp.slice(0, 4)}년 ${timestamp.slice(
      5,
      7
    )}월 ${timestamp.slice(8, 10)}일에`;
  } else if (minute >= 60) {
    return `${Math.floor(hour)}시간 전`;
  } else if (second >= 60) {
    return `${Math.floor(minute)}분 전`;
  } else {
    return `방금 전`;
  }
}

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
