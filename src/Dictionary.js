import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      alert(
        `Unfortunately we have no definition for "${keyword}" in our dictionary.`
      );
    } else {
      setResults(response.data);
      let apiKey = "b5913f071fao57fb23b245a065fb8tac";
      let apiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
      axios.get(apiUrl).then(handleImageResponse);
    }
  }

  function search() {
    let apiKey = "b5913f071fao57fb23b245a065fb8tac";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h5>Online Dictionary</h5>
        <section>
          <h1>Find your meaning below:</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus
              placeholder="Search for a word..."
              onChange={handleKeywordChange}
            />
          </form>
          <p className="hint">e.g. dog, forest, pizza, yoga...</p>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
        <footer>
          Coded by{" "}
          <a
            href="https://github.com/yarmenov"
            target="_blank"
            rel="noopener noreferrer"
          >
            Yana Armenova
          </a>{" "}
          and it is open-sourced on{" "}
          <a
            href="https://github.com/yarmenov/dictionary.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
