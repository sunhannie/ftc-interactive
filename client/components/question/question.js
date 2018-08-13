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
        <div  class="input-section">
          <form>
            <div class="input-value">
              <div class="left-value">0</div>
              <div class="right-value">100</div>
            </div>
            <input type="range" step="1" min="0" max="100" value="50" onChange={event => this.handleChange(event.target.value)}/>
            <output>50</output>
          </form>
          <div></div>
        </div>
        <div class="look-answer"><button>看答案</button> </div>

        <div class="reslut-container">
          <div class="legend">
            <div class="actual-situation"><span class="circle"></span><span>实际情况</span></div>
            <div class="response"><span class="circle"></span><span>你的回答</span></div>
            <div class="survey"><span class="circle"></span><span>问卷调查结果</span></div>
          </div>

          <div class="percentage">
            <div class="answer"><span>答案是</span><span>6%</span></div>
            <div class="thinking"><span>你认为是</span><span>52%</span></div>
            <div class="survey-people"><span>调查民众答案</span><span>21%</span></div>
          </div>
        </div>
       </div>
    );
  }
}


export default Question;
