import SnippetItemContainer from "./snippetItemContainer";
import SnippetList from "../components/snippetList";

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

// async function getSnippetItems() {
//   const snippets = await getCodes(10, 0);
//   let snippetItems = [];

//   if (snippets !== []) {
//     snippetItems = snippets.map((snippet) => {
//       return (
//         <SnippetItemContainer
//           key={snippet.id}
//           title={snippet.title}
//           description={snippet.description}
//           author={snippet.author}
//           datetime={snippet.created_datetime}
//           calculateTimestamp={calculateTimestamp}
//         />
//       );
//     });
//   }
//   return snippetItems;
// }

const SnippetListContainer = () => {
  // const snippetItems = await getSnippetItems();
  // const snippetItems = [];

  return <SnippetList></SnippetList>;
};

export default SnippetListContainer;
