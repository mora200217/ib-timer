import React, {Component} from 'react'
import './Info.css'
class Info extends Component{
render(){
  return(
    <div class="card my-card">
    <div class = "fluid-container main-card-header">
      <h3 class="card-title display-4">Key Time Points</h3>
      <p class="card-text">Each interval is going to appear here.</p>
      </div>
      <div class="card-body fluid-container">

        <ul class = "info-list">
          <li>
          <div class = "row">
          <div class = "col-lg-2 num-timer">
            <p><strong>60</strong></p>
           </div>
             <div class = "col info-timer">
          <p class = "h2 primary-text">Minutes</p>
          <p class = "text-muted second-text">You have an hour left for finishing your exam</p>
          </div>

          </div>
          </li>

        </ul>
      </div>
    </div>
  );
}
}

export default Info
