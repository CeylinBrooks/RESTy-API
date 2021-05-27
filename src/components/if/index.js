// Brian mentioned not to worry about this code, but i type it out anyway

import React from 'react';

const render = (condition = false, children = null) => { // render the components we set the condition to false and the children to no value
  return condition ? children : null; // we return the condition with the children at no value
}

export const If = props => {
  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, { condition: props.condition });
  })
}

export const Then = props => render(props.condition, props.children);
export const Else = props => render(!props.condition, props.children);
export const When = props => render(props.condition, props.children);
export const Unless = props => render(!props.condition, props.children);