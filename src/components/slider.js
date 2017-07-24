import React from 'react';

class Slider extends React.Component {

constructor(props) {
  super();
  //this. handleClick = this. handleClick.bind(this);
  this.state = {session:'1'};
  this.update = this.update.bind(this);
 }

update = (e) => {
  console.log("render",e.target.value);
    this.setState({
      session: +e.target.value
    })
}

  render() {
    console.log("p",this.state.session);
    return (
      <div>
      <p>{this.state.session}</p>
      <input className="slider"
         type="range"
         value={this.state.session}
         min={this.props.min}
         max={this.props.max}
         onChange={(e) => this.update(e)}     
         step={this.props.step} />
      </div>
   ); 
}
}
export default Slider;