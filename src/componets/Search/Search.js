import React, { useState } from "react";

import SearchInput from "./SearchInput";
import SearchPage from "./SearchPage";

export default function Search() {
  const [text, setText] = useState("");

  const [results, setResults] = useState([]);

  const handleSearch = () => {
    fetch(
      `https://kitsu.io/api/edge/anime?filter[text]=${encodeURIComponent(text)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.data);
      });
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleButtonClick = () => {
    handleSearch();
  };

  return (
    <>
      <SearchInput
        text={text}
        handleChange={handleChange}
        handleKeyPress={handleKeyPress}
        handleButtonClick={handleButtonClick}
      />

      <SearchPage results={results} />
    </>
  );
}
