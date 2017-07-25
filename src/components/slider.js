import React from 'react';

class Slider extends React.Component {

  constructor(props) {
    super();
    this.state = {session:'1'};
    this.handleChange = this.handleChange.bind(this);
   }

  handleChange(e) {
      this.setState({session:+e.target.value-1});
      this.props.doUpdate(this.state.session);
  }

  render() {
    return (
      <div>
      <input className="slider"
         type="range"
         value={this.state.session}
         min={this.props.min}
         max={this.props.max+1}
         onChange={(e) => this.handleChange(e)}     
         step={this.props.step} />
      </div>
   ); 
  }
}
export default Slider;