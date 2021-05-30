import { memo } from "react";
import SortBar from "../components/sortBar/sortBar";
import languageList from "lib/languages";
import { useState } from "react";

const SortBarContainer = ({ setIsLoading, setOrder, setLanguage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [selectedOrder, setSelectedOrder] = useState("date");

  return (
    <SortBar
      languages={languageList}
      setLanguage={setLanguage}
      selectedLanguage={selectedLanguage}
      setSelectedLanguage={setSelectedLanguage}
      setIsLoading={setIsLoading}
      setOrder={setOrder}
      selectedOrder={selectedOrder}
      setSelectedOrder={setSelectedOrder}
    ></SortBar>
  );
};

export default memo(SortBarContainer);
