import React,{Component} from 'react';
import Timer from '../body/Timer.js'
import Modal from './Modal.js'

import moment from 'moment'

  var timeFormat;
  var start;
  var index = 0;

const textList = [
  "60 Minutes Remaining",
  "30 Minutes Remaining"
]
  // const writeJsonFile = require('write-json-file');

class Header extends Component{
  constructor(props){

      timeFormat = "mmss"
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      hrs: 0,
      min: 45,
      sec: 0,
      hrsLimit: 0,
      minLimit: 44,
      secLimit: 56,
    }
    this.test = this.test.bind(this)
    // this.test = this.test.bind(this)
  }
test(param){
console.log("Arg Test: " + param)
  // this.interval = setInterval(() => this.tick(), 1000);
}
  render(){
    return(
    <header>
     <Modal onChange = {this.test.bind(this)}/>
      <nav class="navbar navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
            IB Timer
          </a>
        <div class = "row">
          <button type="button" class="btn btn-outline-light" onClick = {this.handleClick} data-toggle="modal" data-target="#exampleModal">
            Start Timer
          </button>
          <button type="button" class="btn btn-outline-light" onClick = {this.handleClick}>
            Pause Timer
          </button>
        </div>
      </nav>

    </header>
  );
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

  if(this.state.min == this.state.minLimit && this.state.sec == this.state.secLimit && this.state.hrs == this.state.hrsLimit){
  var x = document.getElementById("change-" + index)
x.textContent = textList[index]
  index++;

  this.setState(state => ({
    minLimit: 44,
    secLimit: 40,
  }));
  }





  var y = document.getElementById("test")
  // alert(moment(this.state.hrs * 10000+ this.state.min * 100 + this.state.sec, timeFormat).format("HH:mm:ss"))
   y.textContent = moment(this.state.hrs * 10000+ this.state.min * 100 + this.state.sec, timeFormat).format("HH:mm:ss")

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick(){

  }
}

export default Header;
