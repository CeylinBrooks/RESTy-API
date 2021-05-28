import React from "react";
import ReactJson from "react-json-view";
// import { If, Then, Else } from 'react-if'
import './results.scss';
// import './index.js';

const Results = (props) => {
  return (
    <div id="jsonBox">
      <h3 id="resultsText">Results</h3>
      <section className="results">
        <ReactJson src={props.data} />
      </section>
    </div>
  )
}

export default Results;
