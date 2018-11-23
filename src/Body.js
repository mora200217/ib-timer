import React, {Component} from 'react'
import Timer from './body/Timer.js'
import Info from './body/Info.js'

class Body extends Component{
  render(){
    return(
      <div class="main row">
        <div class="timer col">
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
