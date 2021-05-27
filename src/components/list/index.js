import React from 'react';
import { When } from '../if';
import './_list.scss';

export default props => {
  <React.Fragment>
    <ul className="list">
      {props.children}
    </ul>
    <When condition={props.children.length > 500}>
      <div>Display five items in the list!</div>
    </When>
  </React.Fragment>
}