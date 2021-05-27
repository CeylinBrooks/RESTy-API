// ============= RESULTS is like Main ==========
// NEW ====================================================
import React from "react";
import ReactJson from "react-json-view";
import { If, Then, Else } from 'react-if'
import './results.scss';
// import './index.js';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="output">
        <If condition={this.props.searchLoading}>
          <Then>
            <h1>Loading content ...</h1>
          </Then>
          <Else>
            <ReactJson header={this.props.header} src={this.props.results} />
          </Else>
        </If>
      </section>
    );
  }
}

export default Results;
