import React, {Component} from 'react'
import Timer from './body/Timer.js'
import Info from './body/Info.js'
import './Body.css';

class Body extends Component{
  render(){
    return(
      <div class="main row fluid-container h-100 w-100">
        <div class="timer col-lg-7">
          <Timer />
        </div>

        <div class="info col">
          <Info />
        </div>
      </div>
    );
  }
}

export default Body
