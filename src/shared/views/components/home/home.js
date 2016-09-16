import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';

if (process.env.BROWSER) {
  require('./home.scss');
}

class Home extends Component {
  static getActions() {
    return [new Actions().Home.test()];
  }

  render() {
    return (
      <div className="Home">
        This is the Home Page
      </div>
    );
  }
}

function stateToProps(state) {
  return {
  };
}

export default connect(stateToProps)(Home);
