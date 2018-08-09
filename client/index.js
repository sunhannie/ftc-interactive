import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import Overlay from './components/overlay/overlay.js';

import Overview from './components/overview/overview.js';
// import Login from './component/login/login.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {message: 'Hello!'};
  }


  render() {
    return (
    	<div>
        <Overview />
        {/*<Overlay />*/}
        {/*<Login />*/}
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
