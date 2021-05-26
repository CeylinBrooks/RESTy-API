/*app.js - Container
Holds state: Count and Results Array
A class method that can update state
Renders 2 Child Components */
import React from 'react'; // import the React app from app
import Header from './header.js' // import the Header from the Header.js
import Form from './form.js' // import the form from form.js
import Footer from './footer.js'
import Results from './results.js'
import './css/style.scss'
import './css/header.scss'
import './css/form.scss'
import './css/footer.scss'


class App extends React.Component { // call our class App which will extend the React Component
   // ==================== ADDED TODAY ==========
   constructor(props){
     super(props);
     this.state = {
       loading: false,
       count: 0,
       results: []
     }
   }
   toggleLoading = () => {
     this.setState({ loading: !this.state.loading });
   }
   handleForm = (count,results) => {
     this.setState({ count, results });
   }
    // ==================== END ==================
  render() { // Now we can render our HMTL to the page
    return ( // our return statement contains the files to be rendered to the page
      <React.Fragment>
        <>
        <Form prompt="click for sw" toggleLoading={this.toggleLoading} handler={this.handleForm}/>
        <Results people={this.state.results}/>
        </>
        <Header/>
        <Footer />
      </React.Fragment>
    )
  }
}
export default App;
