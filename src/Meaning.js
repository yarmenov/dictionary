import React from "react";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <div>
        <span className="Definition">Definition: </span>
        {meaning.definition}
        <br />
        {meaning.example && <em>Example: {meaning.example}</em>}
        {meaning.synonyms && meaning.synonyms.length > 0 && (
          <p>Synonyms: {meaning.synonyms.join(", ")}</p>
        )}
      </div>
    </div>
  );
}
