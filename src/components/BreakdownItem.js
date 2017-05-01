import React from 'react';
import moment from 'moment';
import Checkbox from './Checkbox';

const BreakdownItem = (props) => {
// convert unix to readable dates
const startingDate =  moment.unix(props.project.startDate).format("MMMM DD, YYYY");
const addedDate =  moment.unix(props.project.added).format("MMMM DD, YYYY");
  //display each key/value pair from the breakdowns, include the checkbox and its text
  return (

    <div>
      Title ~ {props.project.title} 
    <br/> 
      Type ~ {props.project.type} 
    <br/> 
      Start Date ~ {startingDate} 
    <br/> 
      Casting Director ~ {props.project.castingDirector}
    <br/> 
      Date Added ~ {addedDate} 
    <br/>
    ______________________________
      <Checkbox />
    <hr />  
    </div>
  );
}

export default BreakdownItem; 