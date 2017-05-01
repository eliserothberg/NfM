import React from 'react';

var Checkbox = React.createClass({
  // set up text for the checkbox
  render: function() {
    return (
      <div>
        <Choice pick=" Check if Interested"></Choice>
      </div>
    );
  }
});

var Choice = React.createClass({
  // set initial state as blank
  getInitialState: function() {
    return {
      click: false
    };
  },
  // enable box to be clickable
  handleChange: function() {
    this.setState({
      click: !this.state.click
    });
  },
  // register the changes in the box state
  render: function() {
    return (
      <div id="boxes">
        <input type="checkbox" id="choice" checked={this.state.click} onChange={this.handleChange} />
        {this.props.pick}
      </div>
    );
  }
});

export default Checkbox;

