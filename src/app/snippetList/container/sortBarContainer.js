import SortBar from "../components/sortBar/sortBar";
import languageList from "lib/languages";
import { useState } from "react";

const SortBarContainer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  return (
    <SortBar
      languages={languageList}
      selected={selectedLanguage}
      setSelected={setSelectedLanguage}
    ></SortBar>
  );
};

export default SortBarContainer;
