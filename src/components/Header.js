import React,{Component} from 'react';
import Timer from '../body/Timer.js'

class Header extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  render(){
    return(
    <header>
      <nav class="navbar navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          IB Timer
        </a>
      <button type="button" class="btn btn-outline-light" onClick = {this.handleClick}>
      Start Timer
      </button>
      </nav>

    </header>
  );
  }
  handleClick(){

    var itemHide = document.getElementById("hideIndicator");
    itemHide.value = Math.random();
  }
}

export default Header;
