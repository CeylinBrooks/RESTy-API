import React from "react"; // import the React app from app
import { BrowserRouter, Route } from 'react-router-dom';
import Header from "./components/header/header.js"; // import the Header from the Header.js
import HelpPage from "./components/help/help.js";
import Footer from "./components/footer/footer.js";
import Form from "./components/form/form.js"; // import the form from form.js
import Results from "./components/results/results.js";
import History from "./components/history/history.js";

// import { If, Then } from './components/if/index.js';
// npm i react-router dom
// import { BrowserRouter, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/style.scss";

class App extends React.Component {
  constructor(props) {
    // removed props for the time being
    super(props);
    this.state = {
      url: "",
      route: "",
      body: [],
      headers: {},
      history: [],
      count: 0,
      isLoading: false, // TODO add
      isOutputVisible: false, // TODO add
    };
  }

  toggleLoading = () => {
    // The load component
    this.setState({ loading: !this.state.loading });
  };

  toggleSearchLoading = () => {
    // Search is loading
    this.setState({ searchLoading: !this.state.searchLoading });
  };

  handleChange = (e) => {
    // Handles page change
    let url = e.target.value;
    this.setState({ url });
  };

  handleClick = (e) => {
    // Handles click event
    e.preventDefault();
    let route = e.target.value;
    this.setState({ route });
  };
  handleForm = (count,data,route,url) => {

    this.setState({ count,data,route,url });
  }
  updateHistory = (item) => {
    this.setState({ history: [...this.state.history, item] });
    localStorage.setItem("history", JSON.stringify(this.state.history));
  };

  handleHistory = (url, route) => {
    this.setState({ url, route });
  };

  render() {
    return (
      <BrowserRouter>
          <Header />
        <Route exact path="/">
        <Form
          toggleLoading={this.toggleLoading}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handler={this.handleForm}
          handleSubmit={this.handleSubmit}
          url={this.state.url}
          route={this.state.route}
        />
        </Route>
        <Route exact path="/history">
        <div className="output-wrapper">
          <History
            handleHistory={this.handleHistory}
            history={this.state.history}
          />
        </div>
        </Route>
        <Route exact path="/help">
        <HelpPage />

        </Route>
        <Results data={this.state.data}/>
        <Footer />
      </BrowserRouter>
    ) 
  }
}

export default App;
