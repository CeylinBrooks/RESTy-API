import React from "react";
import './form.scss'
import superagent from 'superagent';
class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 1
    }
  }
  handleSubmit = async (e) => {
    e.preventDefault();

    // LocalStorage
    let url = this.props.url;
    let route = this.props.route;
    

    try{
      let raw = await superagent(route,url);
      let data = raw.body;
      console.log(data);
      let count = data.count;
      localStorage.setItem(this.state.counter, (`${url} ${route}`))
      let counter = this.state.counter + 1;
      this.setState({ counter })
      this.props.handler(count,data,route,url);
      this.props.toggleLoading;
    } catch (e) {
      this.props.handler(e);
    }
  };
  render() {
    return(
      <>
      <div id="form">
        <form onSubmit={this.handleSubmit} value={this.props.route}> 
        <section>
          <h3 id="info">Paste in the URL:</h3>
          <input id="inputUrl" type="text" value={this.props.url} onChange={this.props.handleChange} placeholder=""/>
          <button id="run" type="submit">Run</button>
        </section>
        <section>
          <button onClick={this.props.handleClick} className="rest-action-1" value="GET">GET</button>
          <button onClick={this.props.handleClick} className="rest-action-2" value="PUT">PUT</button>
          <button onClick={this.props.handleClick} className="rest-action-3" value="POST">POST</button>
          <button onClick={this.props.handleClick} className="rest-action-4" value="DELETE">DELETE</button>
        </section>
        <section>
          <input type="text" className="query-parameters" placeholder="enter in query parameters if applicable"/>
        </section>
        </form>
      </div>
      </>
    )
  }
}

export default Form;
