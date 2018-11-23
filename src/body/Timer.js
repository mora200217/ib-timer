import React, {Component} from 'react'
import moment from 'moment'
import './Timer.css';
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

 }

 componentWillUnmount() {
   clearInterval(this.interval);
 }

// componentDidUpdate(){
// alert("as");
// }
//
//
//
// componentWillUpdate(){
// alert("as");
// }


render(){
  return(
    <div class = "container timer align-middle">
      <div class="container display-2" id = "test">00:00:00</div>
      <p class = "h3 title">Time Remaining</p>
    </div>

  );
}
handleClick(){
  this.interval = setInterval(() => this.tick(), 1000);

}

}

export default Timer
