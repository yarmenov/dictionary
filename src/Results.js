import React from "react";
import Meaning from "./Meaning";
import "./Results.css";
export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
        </section>

        <section>
          <p className="phonetics">
            <strong>Phonetics:</strong>{" "}
            <span classname="text">/{props.results.phonetic}/</span>
          </p>
        </section>

        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}