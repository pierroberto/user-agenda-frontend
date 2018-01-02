import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'flux';
import { Container, Button, Form, FormGroup, Label, Input, FormText, InputGroup, InputGroupAddon } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

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
    return (
      <Form onSubmit={this.submitData}>
        <FormGroup>
          <Label>Title</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="male" />
            </InputGroupAddon>
            <Input type="select" name="title" onChange={this.setTitle} required>
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
          <Label>Username</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="male" />
            </InputGroupAddon>
            <Input type="text" name="username" onChange={this.setUsername} value={'hello2'} required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>First name</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="pencil-square-o" />
            </InputGroupAddon>
            <Input type="text" name="first" onChange={this.setFirst} required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="pencil-square-o" />
            </InputGroupAddon>
            <Input type="text" name="last" onChange={this.setLast} required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Gender</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="intersex" />
            </InputGroupAddon>
            <Input type="select" name="gender" onChange={this.setGender} required>
              <option>Choose</option>
              <option>Male</option>
              <option>Female</option>
            </Input>
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="envelope" />
            </InputGroupAddon>
            <Input type="email" name="email" onChange={this.setEmail} required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Phone</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="phone" />
            </InputGroupAddon>
            <Input type="text" name="phone" onChange={this.setPhone} required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Cell.</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="phone" />
            </InputGroupAddon>
            <Input type="text" name="cell" onChange={this.setCell} required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Date of Birth</Label>
          <InputGroup>
            <InputGroupAddon>
              <FontAwesome name="birthday-cake" />
            </InputGroupAddon>
            <Input type="date" name="dob" onChange={this.setDob} required />
          </InputGroup>
        </FormGroup>
        <FormGroup>
          <Label>Picture</Label>
          <Input type="file" name="picture" onChange={this.setPicture} required />
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Button onClick={this.goBack}>Back</Button>
      </Form>
    );
  }
}

function stateToProps(state) {
  return {};
}

export default connect(stateToProps)(ItemDetails);
