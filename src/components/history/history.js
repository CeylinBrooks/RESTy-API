import React from "react";

import "./history.scss";

class History extends React.Component {
  pullHistory = (e) => {
    let req = e.target.innerHTML;
    req = req.split(" ");
    let route = req[0];
    let url = req[1];
    console.log(method,url);
    this.props.handleHistory(route, url);
  };
  render() {
    return (
      <div id="history">
        <h3 className="historyText">History</h3>
        <h3 className="historyText">Click a saved search and hit 'run' to view results.</h3>
        <ul>
          {Object.keys(localStorage).map((i,value) => {
            return(
              <li key={i} onclick={this.updateHistory}>
              {localStorage.getItem(i,value)}
              </li>
            )
          })}
        </ul>
      </div>
    ) 
  }
}
export default History;
