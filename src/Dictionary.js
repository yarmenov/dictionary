import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";
export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=3ea9t1312bbo2ff30fa1b499f43ab01f`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "rUCAyDPeYt5Ggb7nbv5JnCxHsH4SK2f8xAd42MqjTNfgPit2f7TVoNqu";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`;
    let headers = { Authorisation: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          {" "}
          <input
            type="search"
            autoFocus={true}
            placeholder="Search for a word"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          Suggested word search: forest, dog, yoga, etc.
        </div>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
