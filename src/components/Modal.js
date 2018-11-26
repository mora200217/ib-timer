import React,{Component} from 'react'
import TimeData from '../db/times.json'
import Select from 'react-select';
import './modal.css'

var subjects  = [];


var times = []


class Modal extends Component{

  constructor(props){

console.clear();

    super(props);
    this.state = {
      disable:  true,
      id: 0,
      subject: "",
      paper: 0,
      time: 0,
    };


    TimeData.map((element, index) => {
      subjects.push({"value": index, "label":element.subject});
      var times_ = []
      for(var i = 0; i < element.duration.length; i++){
        times_.push({"value":element.duration[i], "label":"Paper " + element.paper[i]});
      }
      times.push(times_)
    }
  );
console.log(times);
    this.change = this.change.bind(this);
    this.change2 = this.change2.bind(this);
    this.callParent = this.callParent.bind(this);

  }

  change(input){
    this.setState({
        disable: false,
        id: input.value,
        subject: input.label,
      });
  }

  change2(input){

    this.setState({
        disable: false,
        paper: input.label,
        time: input.value,
      });
  }


callParent(){
this.props.onChange(this.state.time);
var x = document.getElementById('subject')
x.textContent = String(this.state.subject);

var x = document.getElementById('paper')
x.textContent = String(this.state.paper);

var x = document.getElementById('time')
x.textContent = String(this.state.time * 60);
// console.log(x_);

}
  render(){
    return(
      <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModal" aria-hidden="true">

      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5  class="modal-title options-tittle" id="exampleModalCenterTitle">Select Subject</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <p1 class = "t-info">Dear User, From here you may select the paper specifications for the <strong> examination </strong> . Good Luck Agent Hunt!</p1>
          <form>

<div class = "mod-element">
<label class = "text-info-lab text-muted">Paper Subject</label>
<Select

options={subjects}
onChange = {this.change}
value = {this.state.value}
ref = 'values'
/>
</div>

<div class = "mod-element">
<label class = "text-info-lab text-muted">Paper Type</label>
<Select
options={times[this.state.id]}
isDisabled = {this.state.disable}
onChange = {this.change2}
/>
</div>



      </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-light " data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" data-dismiss="modal" onClick = {this.callParent}>Start Timer</button>
          </div>
        </div>
      </div>
    </div>
    );
  }



}

export default Modal;
