import React from "react";
import "./Meaning.css";
import Synonym from "./Synonym";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4>
        <em>{props.meaning.partOfSpeech}</em>
      </h4>
      <p className="definition">{props.meaning.definition}</p>
      <p className="example">{props.meaning.example}</p>
      {props.meaning.synonyms &&
        props.meaning.synonyms.map(function (synonym) {
          return <Synonym synonym={synonym} />;
        })}
    </div>
  );
}
