import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import Moment from 'moment';
import './ItemDetails.scss';

class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.data = {};
  }
  goBack() {
    window.location.href = 'http://localhost:12345';
  }
  setFirst = e => {
    this.data = {
      ...this.data,
      first: e.target.value.toLowerCase(),
    };
  };
  setLast = e => {
    this.data = {
      ...this.data,
      last: e.target.value,
    };
  };
  setGender = e => {
    this.data = {
      ...this.data,
      gender: e.target.value,
    };
  };
  setEmail = e => {
    this.data = {
      ...this.data,
      email: e.target.value,
    };
  };
  setPhone = e => {
    this.data = {
      ...this.data,
      phone: e.target.value,
    };
  };
  setCell = e => {
    this.data = {
      ...this.data,
      cell: e.target.value,
    };
  };
  setPicture = e => {
    this.data = {
      ...this.data,
      picture: e.target.value,
    };
  };
  setTitle = e => {
    this.data = {
      ...this.data,
      title: e.target.value,
    };
  };
  setUsername = e => {
    this.data = {
      ...this.data,
      username: e.target.value,
    };
  };
  setDob = e => {
    const date = new Date(e.target.value).getTime();
    this.data = {
      ...this.data,
      dob: date,
    };
  };
  submitData = e => {
    this.data = {
      ...this.data,
      registered: Date.now(),
    };
    this.props.addUser(this.data);
  };
  render() {
    const user = this.props.details.data;
    this.data = user;
    console.log('date', Moment(user.dob).format('YYYY-MM-DD'));
    return (
      <Form onSubmit={this.submitData}>
        <Label>Here you can view contact's details and edit it</Label>
        <FormGroup>
          <Label>Title {user.title}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="male" />
            </InputGroupAddon>
            <Input type="select" name="title" onChange={this.setTitle} value={user.title}>
              <option>Choose</option>
              <option>mr</option>
              <option>ms</option>
              <option>mrs</option>
              <option>mademoiselle</option>
              <option>monsieur</option>
              <option>miss</option>
            </Input>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Username {user.username}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="male" />
            </InputGroupAddon>
            <Input type="text" name="username" onChange={this.setUsername} placeholder={user.username} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>First name {user.first}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="pencil-square-o" />
            </InputGroupAddon>
            <Input type="text" name="first" onChange={this.setFirst} placeholder={user.first} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Last name {user.last}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="pencil-square-o" />
            </InputGroupAddon>
            <Input type="text" name="last" onChange={this.setLast} placeholder={user.last} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Gender {user.gender}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="intersex" />
            </InputGroupAddon>
            <Input type="select" name="gender" onChange={this.setGender} value={user.gender}>
              <option>Choose</option>
              <option>male</option>
              <option>female</option>
            </Input>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Email {user.email}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="envelope" />
            </InputGroupAddon>
            <Input type="email" name="email" onChange={this.setEmail} placeholder={user.email} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Phone {user.phone}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="phone" />
            </InputGroupAddon>
            <Input type="text" name="phone" onChange={this.setPhone} placeholder={user.phone} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Cell. {user.cell}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="phone" />
            </InputGroupAddon>
            <Input type="text" name="cell" onChange={this.setCell} placeholder={user.cell} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Date of Birth {Moment(user.dob).format('YYYY-MM-DD')}</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="birthday-cake" />
            </InputGroupAddon>
            <Input type="date" name="dob" onChange={this.setDob} placeholder={Moment(user.dob).format('YYYY-MM-DD')} />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Picture</Label>
          <Input type="file" name="picture" onChange={this.setPicture} placeholder={user.picture} />
        </FormGroup>
        {this.props.details.data.first ? (
          <Button className="form__button" type="submit">
            Update
          </Button>
        ) : (
          <Button className="form__button" type="submit">
            Submit
          </Button>
        )}
        <Button className="form__button" onClick={this.goBack}>
          Back
        </Button>
      </Form>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemDetails);
