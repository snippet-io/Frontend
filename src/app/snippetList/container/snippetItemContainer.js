import SnippetItem from "../components/snippetItem/snippetItem";

const SnippetItemContainer = ({ props }) => {
  return (
    <div>
      <SnippetItem props={props}></SnippetItem>
    </div>
  );
};

export default SnippetItemContainer;
