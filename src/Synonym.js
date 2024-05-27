import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  console.log(props.synonym);
  if (props.synonym) {
    return <span className="synonym">{props.synonym}</span>;
  } else {
    return null;
  }
}
