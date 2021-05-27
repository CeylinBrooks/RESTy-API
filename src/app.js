/*app.js - Container
Holds state: Count and Results Array
A class method that can update state
Renders 2 Child Components */
import React from "react"; // import the React app from app
import Header from "./components/header/header.js"; // import the Header from the Header.js
import Form from "./components/form/form.js"; // import the form from form.js
import Footer from "./components/footer/footer.js";
import Results from "./components/results/results.js";
import History from "./components/history/history.js";
import Home from "./components/home/home.js";
import "./style.scss";

class App extends React.Component {
  // call our class App which will extend the React Component
  // ==================== ADDED TODAY ==========
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      count: 0,
      results: [],
      history: [],
      url: "",
      route: "",
    };
  }
  toggleLoading = () => {
    this.setState({ loading: !this.state.loading });
  };
  handleForm = (count,results,url,route) => {
    this.setState({ count,results,url,route });
  };
  handleHistory = (url, route) => {
    this.setState({ url, route });
  };
  // handleChange = (url, route ) => {
  //   this.setState({ url, route })
  // }
  // ==================== END ==================
  render() {
    // Now we can render our HMTL to the page
    return (
      // our return statement contains the files to be rendered to the page
      <>
      <Header />
        <Form
          prompt="click for sw"
          toggleLoading={this.toggleLoading}
          handler={this.handleForm}
          url={this.state.url}
          route={this.state.method}
        />
        <Results people={this.state.results} />
        <History
          history={this.state.history}
          handleHistory={this.handleHistory}
        />
        <Footer />
      </>
    );
  }
}
export default App;
