import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import questionCss from './question.scss';
class Question extends Component {
  constructor(props) {
    super(props);
    const { questions } = props; // eslint-disable-line
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {

  }
  render() {

    return (
      <div className="question-container">
        <h2 className="o-typography-subhead--crosshead">
          1.健康保险支出
        </h2>

        <p className="o-typography-lead--small">
          你认为中国有多少百分比的国内生产总值（GDP）花在医疗保健支出上？
        </p>
        <div class="input-section">
          <div class="input-value">
            <div class="left-value">0</div>
            <div class="right-value">100</div>
          </div>
          <input type="range" step="1" min="0" max="100" value="50" onChange={event => this.handleChange(event.target.value)}/>
          <output>50</output>
        </div>



      </div>
    );
  }
}


export default Question;
