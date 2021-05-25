import React from 'react';
import Header from './header.js'
import Form from './form.js'
import Footer from './footer.js'
import './css/style.scss'
import './css/header.scss'
import './css/form.scss'
import './css/footer.scss'


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header/>
        <Form/>
        <Footer />
      </React.Fragment>
    )
  }
}
export default App;
