import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Overlay from './components/overlay/overlay.js';

import Overview from './components/overview/overview.js';
import Question from './components/question/question.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      questionsLoaded: false,
      questions: [],
      questionsLength: 0,
      activeQuestion: 0,
      score: 0,
      complete: false,
      chooseQuestions: true,
      country: null,
    };
    this.setQuestions = this.setQuestions.bind(this);
  }
  setQuestions(value) {
    const key = value.toLowerCase().replace(/\s/g, '-');
    const data = '../client/data/china.json';
    // const data = 'http://www.ftchinese.com/ig/perils-of-perception/china.json';
    const init = {
      method:  'GET',
      headers:{ 
        'Content-Type': 'text/plain',
        'Accept': 'application/json',
      },
      mode: 'same-origin',
      credentials: 'include',
      redirect: 'error'
    }
    fetch(data,init)
      .then(res => res.json())
      .then(({ questions }) => this.setState({
        questionsLoaded: true,
        questions,
        country: value,
        questionsLength: questions
          .filter(question => question.answer !== '')
          .sort((a, b) => Number(a.meta.qid.slice(1)) - Number(b.meta.qid.slice(1)))
          .slice(2)
          .length,
      }));
  }
  render() {
    console.log(this.state.questions)

    const questions = this.state.questions
      .filter(question => question.answer !== '')
      .sort((a, b) => Number(a.meta.qid.slice(1)) - Number(b.meta.qid.slice(1)))
      .slice(2)
      .map((question, i) => <Question 
      key={question.meta.qid}
      questionId={question.id}
      questionIndex={i} 
      questionType={question.meta.type}
      questionText={question.text}
      answer={Number(question.answer)}
      countryAnswer={Number(question.meta.perceived)}
      responsesData={question.responses}
      options={Object.keys(question.options).map(option =>
              question.options[option]
            ).filter(option => option !== null)}
      questions = {this.state.questions}/>
    );

    return (
    	<div>
        <Overview />
        <Overlay setQuestions={this.setQuestions}/>
        {/*<Question questions = {this.state.questions}/>*/}
        {questions}
        {/*start
        <div><span>test</span></div>
        <button>提交1</button>*/}
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
