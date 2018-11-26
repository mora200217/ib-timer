import React, {Component} from 'react'
import './Info.css'
import moment from 'moment'
import TimeData from '../db/times.json'


class Info extends Component{
  constructor(props){
    super(props);
    this.state = {
      subject: "Any Test",
      paper: "Some Paper",
      time: 0,
      start: "00:00",
      end: "00:00"
    }
  }
render(){
  return(
  <div class="color">
    <p class="info-align color-text-title " id = "subject">
    {this.state.subject}

    </p>
    <p class="info-align  color-text-subtitle "  id = "subject">
<p  class = "none-p" id = "paper"> {this.state.paper} </p> - <p id = "time" class = "none-p" > {this.state.time * 60} </p> Minutes
    </p>
    <p class="info-align  color-text-subtitle-2 ">
    <strong>  Starting Time: </strong> <p  class = "none-p" id = "st">{this.state.start} </p>

    </p>
    <p class="info-align  color-text-subtitle-2 ">
      <strong>Finishing Time:  </strong><p  class = "none-p" id = "en">{this.state.end} </p>

    </p>
    <br/>
    <br/>
    <hr/>
<div>
    <ul class = "h1 info-list">
      <li id = "change-0"></li>
      <li id = "change-1"></li>
      <li id = "change-2"></li>
      <li id = "change-3"></li>
    </ul>
    </div>
  </div>
  );
}
}

export default Info
