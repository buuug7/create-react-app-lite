import React from 'react';

export default class HelloWorld extends React.Component{
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="HelloWorld">
        <h4>Hello World</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam architecto cumque deserunt eveniet
           ipsa!</p>
      </div>
    );
  }
}