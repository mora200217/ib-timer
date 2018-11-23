import React,{Component} from 'react';
import Timer from '../body/Timer.js'


import moment from 'moment'

  var timeFormat;
  var start;


class Header extends Component{
  constructor(props){
      timeFormat = "mmss"
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      hrs: 0,
      min: 45,
      sec: 0,
    }
  }

  render(){
    return(
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          IB Timer
        </a>
        <div class = "row">
      <button type="button" class="btn btn-outline-light" onClick = {this.handleClick}>
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
  var y = document.getElementById("test")
  // alert(moment(this.state.hrs * 10000+ this.state.min * 100 + this.state.sec, timeFormat).format("HH:mm:ss"))
   y.textContent = moment(this.state.hrs * 10000+ this.state.min * 100 + this.state.sec, timeFormat).format("HH:mm:ss")

  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleClick(){
      this.interval = setInterval(() => this.tick(), 1000);
  }
}

export default Header;
