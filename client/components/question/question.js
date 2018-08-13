import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Range from './range.js';
import questionCss from './question.scss';
class Question extends Component {
  constructor(props) {
    super(props);
    const { questions } = this.props; // eslint-disable-line
    // this.handleChange = this.handleChange.bind(this);
    this.state = {
      answered: false,
      value: '50',
    };
  }

  // handleChange(value) { 
  //   this.setState({ value: value });
  //   console.log(value);
  // }
  render() {
     console.log(this.props);
    const {props} = this.props;
    const rangeMin = this.props.options[0];
    const rangeMax = this.props.options[1];
    return (
      <div className="question-container">
        <h2 className="o-typography-subhead--crosshead">
          1.健康保险支出
        </h2>

        <p className="o-typography-lead--small">
          {this.props.questionText}
        </p>
        <Range 
        min={rangeMin}
        max={rangeMax}
        step={rangeMax / 100}
        thumbSize={28}/>


        <div class="reslut-container">
          <div class="legend">
            <div class="actual-situation"><span class="circle"></span><span>实际情况</span></div>
            <div class="response"><span class="circle"></span><span>你的回答</span></div>
            <div class="survey"><span class="circle"></span><span>问卷调查结果</span></div>
          </div>

          <div class="percentage">
            <div class="answer"><span>答案是</span><span>{this.props.answer}&#37;</span></div>
            <div class="thinking"><span>你认为是</span><span>{this.state.value}</span></div>
            <div class="survey-people"><span>调查民众答案</span><span>{this.props.countryAnswer}&#37;</span></div>
          </div>
        </div>
       </div>
    );
  }
}


export default Question;
