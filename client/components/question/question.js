import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Range from './range.js';
import questionCss from './question.scss';
class Question extends Component {
  constructor(props) {
    super(props);
    const { questions } = this.props; // eslint-disable-line
    this.markQuestion = this.markQuestion.bind(this);
    this.state = {
      answered: false,
      value: '50',
    };
  }
  markQuestion(event, value) {
    // 加上preventDefault，不会跳转页面，即不会重新刷新页面
    if (event) {
      event.preventDefault();
    }
    console.log('value'+value);
    // 运行此处后为什么还会重新刷新页面，为什么会加上问号
  }

  render() {
    //  console.log(this.props);
    const {props} = this.props;
    const rangeMin = this.props.options[0];
    const rangeMax = this.props.options[1];

    const crossheadLookup = {
      19: '当前穆斯林人口',
      20: '未来穆斯林人口',
      21: '健康保险支出',
      22: '拥有房产的比例',
      23: '财富分配',
      24: '幸福感',
      26: '对堕胎的态度',
      27: '对同性恋的态度',
      28: '对婚前性行为的态度',
    };
    const crosshead = crossheadLookup[this.props.questionId];
    return (
      <div className="question-container">
        <h2 className="o-typography-subhead--crosshead">
          {this.props.questionIndex + 1}.{crosshead}
        </h2>

        <p className="o-typography-lead--small">
          {this.props.questionText}
        </p>
        <Range 
        min={rangeMin}
        max={rangeMax}
        step={rangeMax / 100}
        thumbSize={28}
        onSubmit={this.markQuestion}/>



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
