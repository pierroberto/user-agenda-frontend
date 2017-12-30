import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import ListView from '../ListView/ListView';
import ItemDetails from '../ItemDetails/ItemDetails';
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

  delUser = e => {
    return fetch(`http://localhost:8000/deluser/${e.target.id}`, {
      method: 'DELETE',
      mode: 'cors',
    })
      .then(rawData => rawData.json())
      .then(user => {
        this.props.dispatch(this.renderList());
      });
  };

  trigger = data => {
    console.log('trigger');
    this.props.dispatch(new Actions().Home.edit(data));
  };

  getUser = e => {
    console.log('getting user with id', e.target.id);
    return fetch(`http://localhost:8000/user/${e.target.id}`)
      .then(rawData => rawData.json())
      .then(user => user);
  };

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

  componentDidMount() {
    this.renderList();
  }
  render() {
    console.log('rendering...');
    if (!this.props.list) return null;
    return (
      <div className="home">
        <Container>
          <h1 className="home__title">My Agenda</h1>
          <button onClick={() => this.trigger({ data: 'hello' })}>hello</button>
          {this.props.edit ? (
            <ItemDetails details={this.props.edit} />
          ) : (
            this.props.list.map(listByLetter => {
              return <ListView list={listByLetter} getUser={this.getUser} delUser={this.delUser} />;
            })
          )}
        </Container>
      </div>
    );
  }
}

function stateToProps(state) {
  return {
    list: state.get('home').list,
    edit: state.get('home').edit,
  };
}

export default connect(stateToProps)(Home);
