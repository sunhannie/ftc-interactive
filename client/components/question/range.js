import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import questionCss from './question.scss';
class Range extends Component {
  constructor(props) {
    super(props);
    const { questions } = this.props; // eslint-disable-line
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: props.max / 2,
      rangeDisabled: false,
      submitDisabled: true,
      width: null,
      increment: null,
      rangeProgress: 50,
      rangeOverlayPosition: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    const component = this;

    this.handleResize();

    function setInitialValue() {
      const value = Math.floor(component.state.rangeProgress * (component.props.max / 100));

      component.setState({ value });
    }

    setInitialValue();
    // Add window resize event listener
    // window.addEventListener('resize', throttle(this.handleResize, 750));
  }

  handleChange(value) { 
    const inputValue = parseInt(value, 10);
    const number = isNaN(inputValue) ? this.props.max / 2 : inputValue;
    const rangeProgress = Math.round(100 / (this.props.max / number));
    const increment = (this.state.width - this.props.thumbSize) / 100;
    const rangeOverlayPosition = (rangeProgress * increment) - 6;

    this.setState({
      value: number,
      submitDisabled: false,
      rangeProgress,
      rangeOverlayPosition,
    });
  }
  handleResize() {
    const width = this.rangeInput.offsetWidth;
    const increment = (width - this.props.thumbSize) / 100;
    const rangeOverlayPosition = (this.state.rangeProgress * increment) - 6;
    this.setState({
      width,
      rangeOverlayPosition,
    });
  }
 
  render() {
    const {props} = this.props;
    const rangeMin = this.props.min;
    const rangeMax = this.props.max;
    return (
      <div>
        <div  class="input-section">
          <form>
            <div class="input-value">
              <div class="left-value">{rangeMin}</div>
              <div class="right-value">{rangeMax}</div>
            </div>
            <input ref={node => { this.rangeInput = node; }} type="range" step={this.props.step} min={rangeMin} max={rangeMax} value={this.state.value} onChange={event => this.handleChange(event.target.value)}/>
            <output style={{ left: this.state.rangeOverlayPosition }}>{this.state.value}</output>
          </form>
          <div></div>
        </div>

        <div class="look-answer"><button>看答案</button> </div>

        </div>
    );
  }
}


export default Range;
