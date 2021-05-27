/*<Form />
Expects a function to be sent to it as a prop
Renders a URL entry form
A selection of REST methods to choose from (“get” should be the default)
On submit
Send the API results back to the <App> using the method sent down in props */
import React from "react";
import './form.scss'
import superagent from 'superagent';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      URL: "",
      storageCounter: 1,
    };
  }
  handleURLChange = (e) => { // Refactored from yesterday
    let URL = e.target.value;
    this.setState({ URL });
  };
  handleClick = (e) => { // added the async
    e.preventDefault();
    this.props.handleURLChange;
  };
  
  handleSubmit = async (e) => { // added the async
    e.preventDefault();
    let url = this.props.url;
    let route = this.props.route;
// ====== superagent ======
    let raw = await superagent(route,url);
    let results = raw.body;
    let count = results.count;
    this.props.handler(count, results, url, route); 
    this.props.toggleLoading();

    // ====== Session Storage ======
    let router = this.state.URL;
    let restMethod = this.state.method;
    // let date = new Date;
    sessionStorage.setItem(this.state.storageCounter,`${restMethod}`, `${router}`)
    // sessionStorage.setItem('restMethod', restMethod)
    let counter = this.storageCounter +1;
    this.setState({ storageCounter: count });
  };
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
        <section id="results">
          
        </section>
      </div>

    );
  }
}

export default Form;
