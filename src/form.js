import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
    };
  }
  handleURLChange = (e) => {
    let URL = e.target.value;
    this.setState({ URL });
  };
  handleChangeevent = (e) => {
    let method = e.target.value;
    this.setState({ method });
  };
  render() {
    return (
      <div id="form">
        <form>
          <h3 id="how-to">Enter in a URL and select a method</h3>
          <button value="GET">GET</button>
          <button value="PUT">PUT</button>
          <button value="POST">POST</button>
          <button value="DELETE">DELETE</button>
          <label for="URL">Paste URL:</label>
          <input id="input" type="text" onChange={this.handleURLChange}></input>
          <button id="results" onChange={this.handleChangeevent} value="RUN">
            Run
          </button>
          {/* <select onChange={this.handleChangeevent}>
          
        </select> */}
        </form>
      </div>
    );
  }
}

export default Form;
