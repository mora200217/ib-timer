import React,{Component} from 'react';
import Timer from '../body/Timer.js'
import Modal from './Modal.js'

import moment from 'moment'

var timeFormat;
var start;
var index = 0;

const textList = [5,1,15,5];

class Header extends Component{
  constructor(props){
    super(props);
    this.state = {
      time: moment.utc().local().format('hh:mm:ss'),
      keyCall: textList[index],
      keyCondition: "",
    }

    // Function Binding
    this.test = this.test.bind(this);
    this.tick = this.tick.bind(this);
  }



  test(params){
    document.getElementById('st').textContent = moment.utc().local().format('hh:mm');
    document.getElementById('en').textContent = moment.utc().local().add(params * 60,'minutes').format('hh:mm');

    this.setState({
      keyCondition: moment.utc().local().add(textList[index],'seconds').format('hh:mm:ss')
    });
    this.interval = setInterval(() => this.tick(), 1000);

  }


  /* Function call each second after timer selected */
  tick(){
    // Change Timer
    this.setState({time: moment.utc().local().format('hh:mm:ss')});
    if(this.state.keyCondition == this.state.time){
      document.getElementById('change-'+ index).textContent = String(textList[index] +" Minutes remaining");
      index++;
      this.setState({keyCondition: moment.utc().local().add(textList[index],'seconds').format('hh:mm:ss')});
    }
    document.getElementById("test").textContent = this.state.time; // Timer.js Component Call
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  
  /*
  RENDER FUNCTION - - - - - - - - - - - - - - - - - - -
  */
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
      <span> __</span>
      <button type="button" class="btn btn-outline-light" onClick = {this.handleClick}>
      Pause Timer
      </button>
      </div>
      </nav>

      </header>
    );
  }
}

export default Header;
