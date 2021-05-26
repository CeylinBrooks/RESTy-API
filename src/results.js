// TODO <Results />
/*
Expects the count, headers, results to be sent in as props
Renders the count
Renders the Result Headers as “pretty” JSON
Renders the Result Body as “pretty” JSON */
// NEW ====================================================
import React from "react";
import ReactJson from "react-json-view";
// import { render } from "react-dom";
import "./css/style.scss";
// import './index.js';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section>
        <ReactJson src={this.props.people} />
      </section>
    );
  }
}

export default Results;
