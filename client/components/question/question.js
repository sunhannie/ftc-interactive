import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import questionCss from './question.scss';
class Question extends Component {
  constructor(props) {
    super(props);
    const { questions } = props; // eslint-disable-line

  }

  
  render() {

    return (
      <div className={`question`}>
        <h2 className="o-typography-subhead--crosshead">
          1.健康保险支出
        </h2>

        <p className="o-typography-lead--small">
          你认为中国有多少百分比的国内生产总值（GDP）花在医疗保健支出上？
        </p>
      </div>
    );
  }
}


export default Question;
