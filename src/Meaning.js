import React from "react";

export default function Meaning({ meaning }) {
  return (
    <div className="Meaning">
      <h3>{meaning.partOfSpeech}</h3>
      <div>
        <span className="Definition">
          <strong>Definition:</strong>{" "}
        </span>
        {meaning.definition}
        <br />
        {meaning.example && (
          <div>
            <strong>Example:</strong> <em>{meaning.example}</em>
          </div>
        )}
        {meaning.synonyms && meaning.synonyms.length > 0 && (
          <p>
            <strong>Synonyms:</strong> {meaning.synonyms.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
}
