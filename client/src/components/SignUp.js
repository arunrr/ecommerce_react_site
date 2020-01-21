import React, { Component } from 'react';
import { Container, Box, Heading, Text, TextField, Button } from 'gestalt';

import ToastMessage from './ToastMessage';

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    toast: false,
    toastMessage: ''
  };

  handleSubmit = event => {
    event.preventDefault();
    // if any field in form is blank
    if (this.isFormEmpty(this.state)) {
      // Show toast message
      this.setState({
        toast: true,
        toastMessage: 'Please fill in all fields'
      });
      // hide toast message after 5 sec
      setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
      return;
    }
    console.log('submitted');
  };

  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({
      [event.target.name]: value
    });
  };

  isFormEmpty = ({ username, email, password }) => {
    return !username || !email || !password;
  };

  render() {
    return (
      <Container>
        <Box
          height={350}
          margin={4}
          padding={8}
          display="flex"
          shape="rounded"
          justifyContent="center"
          position="fixed"
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: '#e7feff',
              left: '50%',
              top: '25%',
              transform: 'translate(-50%)'
            }
          }}
        >
          {/* SignUp form */}
          <form
            style={{
              display: 'inlineBlock',
              maxWidth: 450,
              textAlign: 'center'
            }}
            onSubmit={this.handleSubmit}
          >
            {/* Signup form heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Box marginBottom={2}>
                <Heading color="midnight">Let's get started</Heading>
              </Box>

              <Text italic color="orchid" size="md">
                Sign up to order Brews
              </Text>
            </Box>
            {/* Username Input */}
            <TextField
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
            {/* Email Input */}
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Enter Email"
              onChange={this.handleChange}
            />
            {/* Password Input */}
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              onChange={this.handleChange}
            />
            {/* Submit button */}
            <Button inline color="blue" type="submit" text="Submit" />
          </form>
        </Box>
        <Box
          position="fixed"
          dangerouslySetInlineStyle={{
            __style: {
              bottom: 500,
              left: '50%',
              transform: 'translateX(-50%)'
            }
          }}
        >
          <ToastMessage
            message={this.state.toastMessage}
            show={this.state.toast}
          />
        </Box>
      </Container>
    );
  }
}
