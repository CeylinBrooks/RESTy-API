/*<Form />
Expects a function to be sent to it as a prop
Renders a URL entry form
A selection of REST methods to choose from (“get” should be the default)
On submit
Send the API results back to the <App> using the method sent down in props */
import React from "react";


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
    };
  }
  handleURLChange = (e) => { // Refactored from yesterday
    let URL = e.target.value;
    this.setState({ URL });
  };
  handleClick = (e) => { // added the async
    e.preventDefault();
    let method = e.target.value;
    this.setState({ method });
  };
  
  // ==================== ADDED TODAY ==========
  handleSubmit = async (e) => { // added the async
    e.preventDefault();

    let raw = await fetch('https://swapi.dev/api/people/');
    let data = await raw.json();
    let count = await data.count;
    let people = data.results
    this.props.handler(count, people);
    this.props.toggleLoading();
  };
 // ==================== END ==================
  render() {
    return (
      <div id="form">
        <form onSubmit={this.handleSubmit}>
          <h3 id="how-to">Enter in a URL and select a method</h3>
          <button value="GET">GET</button>
          <button value="PUT">PUT</button>
          <button value="POST">POST</button>
          <button value="DELETE">DELETE</button>
          <label for="URL">Paste URL:</label>
          <input id="input" type="text" onChange={this.handleURLChange}></input>
          <button id="results" type="submit" onChange={this.onChange} value="RUN">Run</button>
        </form>      
      </div>

    );
  }
}

export default Form;
