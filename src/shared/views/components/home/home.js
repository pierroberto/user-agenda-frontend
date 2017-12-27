import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import ListView from '../ListView/ListView';
import { Container, Row, Col } from 'reactstrap';

if (process.env.BROWSER) {
  require('./home.scss');
}

class Home extends Component {
  static getActions() {
    return [new Actions().Home.test()];
  }

  render() {
    return (
      <div className="home">
        <Container>
          <h1 className="home__title">My Agenda</h1>
          <ListView />
        </Container>
      </div>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(Home);
