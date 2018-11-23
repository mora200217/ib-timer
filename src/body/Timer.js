import React, {Component} from 'react'
import moment from 'moment'

  var timeFormat;
  var start;

class Timer extends Component{

constructor(props){
  timeFormat = "mmss"
  start = false;
  // alert(start);
  super(props);
  this.handleClick = this.handleClick.bind(this);
  this.state = {
    hrs: 0,
    min: 45,
    sec: 0,
  }
}
tick() {
  if(this.state.sec > 0){
  this.setState(state => ({
    sec: state.sec - 1
  }));
} else if(this.state.min > 0){
  this.setState(state => ({
    sec: 59,
    min: state.min - 1
  }));
}else{
  timeFormat = "mmss"
  this.setState(state => ({
    sec: 59,
    min: 59,
    hrs: state.hrs - 1
  }));

}
}

componentDidMount() {
  if(start){
   this.interval = setInterval(() => this.tick(), 1000);
 }
 }

 componentWillUnmount() {
   clearInterval(this.interval);
 }

 handleClick(){
 alert("dd");
 }



render(){
  return(
    <div class = "container">
      <h3>Time Remaining!</h3>
      <input type="radio" id="hideIndicator" onchange = {this.handleClick}></input>
      <div class="container display-2">
      {moment(this.state.hrs * 10000+ this.state.min * 100 + this.state.sec, timeFormat).format("HH:mm:ss")}
      </div>
    </div>

  );
}


}

export default Timer
