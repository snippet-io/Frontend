import SnippetItem from "../components/snippetItem";

const SnippetItemContainer = (props) => {
  return (
    <div>
      <SnippetItem p={props}></SnippetItem>
    </div>
  );
};

export default SnippetItemContainer;
