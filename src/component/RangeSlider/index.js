import React, { Component } from 'react';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

class Slider extends Component{
    state = {
        value : 0
    }
    onHandleChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    render () {
  return (
      <div>
          <h1>Range slider</h1>
    <RangeSlider
      value={this.state.value}
      onChange={(e) => this.onHandleChange(e)}
      max={100}
      step={10}
      size={'lg'}
      tooltip={"auto"}
    />
    </div>
  )

}
}

export default Slider