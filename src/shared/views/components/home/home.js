import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import ListView from '../ListView/ListView';
import { Container, Row, Col } from 'reactstrap';
import 'isomorphic-fetch';

if (process.env.BROWSER) {
  require('./home.scss');
}

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static getActions() {
    return [new Actions().Home.test()];
  }

  getList = () => {
    return fetch('http://localhost:8000/users')
      .then(rawData => rawData.json())
      .then(fullList => {
        return fullList.sort((a, b) => {
          return a.first.charCodeAt(0) - b.first.charCodeAt(0);
        });
      });
  };

  renderList = () => {
    let orderedList = [];
    this.getList().then(fullList => {
      let initial = 'a';
      let listByLetter = [];

      fullList.map(person => {
        if (person.first[0] !== initial || (listByLetter.length && listByLetter[listByLetter.length - 1].first[0] !== initial)) {
          const oldList = listByLetter;
          listByLetter = [];
          initial = person.first[0];
          orderedList.push(oldList);
          this.props.dispatch(new Actions().Home.setList(orderedList));
        }
        listByLetter.push(person);
      });
    });
  };

  trigger = () => {
    console.log('triggering', new Actions().Home.setList());
    return this.props.dispatch(new Actions().Home.setList());
  };

  componentDidMount() {
    this.renderList();
  }
  render() {
    if (!this.props.list) return null;
    return (
      <div className="home">
        <Container>
          <h1 className="home__title">My Agenda</h1>
          {this.props.list.map(listByLetter => {
            return <ListView list={listByLetter} />;
          })}
        </Container>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    list: state.get('home').list,
  };
}

export default connect(stateToProps)(Home);
