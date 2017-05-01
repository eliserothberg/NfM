import React, { Component } from 'react';
import BreakdownItem from './BreakdownItem';

// sort the records by date added, newest to oldest
const BreakdownList = (props) => {
  props.projects.sort((a, b) => a.added < b.added ? -1 : 1)
    .reverse((a, b) => a.added < b.added ? -1 : 1);

  const projects = props.projects.map(project => {
    // assign unique key for React
    return (
      <BreakdownItem key={project.title} project={project} />
    );
  });
// show all formatted records
  return (
    <div>
    {projects}
    </div>
  );
}

export default BreakdownList;