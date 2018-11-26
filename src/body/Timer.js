import React, {Component} from 'react'
// import moment from 'moment'
import './Timer.css';
// import TimesData from '../db/times.json'
//
//
//   var timeFormat;
//   var start;

class Timer extends Component{


render(){
  return(
    <div class = "container timer align-middle">
      <div class="container display-2" id = "test">00:00:00 </div>
      <p class = "h3 title">Time Remaining</p>
    </div>

  );
}

}

export default Timer
