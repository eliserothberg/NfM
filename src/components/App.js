import React, { Component } from 'react';
import axios from 'axios';
import BreakdownList from './BreakdownList';

// set up state
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { projects : [] }
  }
// get breakdown data from the json file
  componentWillMount() {
    axios.get('projects.json')
    .then(response => this.setState({ projects : response.data.projects }));
  }
  // show all the app data
  render() {
    return (
      <div className="app">
        <h2>Current Projects</h2>
        <br/>
        <BreakdownList projects={this.state.projects}/>

      </div>
    );
  }
}
