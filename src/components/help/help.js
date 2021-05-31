import React from 'react';
// import Header from '../header/header'
// import Footer from '../footer/footer'
import './help.scss';

const Help = () => {
  return(
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Stint+Ultra+Condensed&display=swap" rel="stylesheet"/>
      <section id="help">
        <h3 className="helpText">How to use RESTy</h3>
        <ul>
          <li>
            1. Find the API you want to test.
          </li>
          <li>
            2. Enter your API URL into the input form.
          </li>
          <li>
            3. Select your REST method with either GET, PUT, POST, DELETE
          </li>
          <li>
            4. Click 'Run' to receive results.
          </li>
        </ul>
        <h3 className="helpText">How to use RESTy History</h3>
        <ul>
          <li>
            1. Click History to view search history.
          </li>
          <li>
            2. Click on the History item you'd like to search.
          </li>
          <li>
            4. The form will auto-populate with your selected history item. Click 'Re-run' to receive results.
          </li>
        </ul>
      </section>
    </React.Fragment>
  )
}

export default Help;