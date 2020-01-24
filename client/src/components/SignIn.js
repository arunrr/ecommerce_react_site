import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Container, Box, Heading, TextField, Button } from 'gestalt';

import ToastMessage from './ToastMessage';
import { setToken } from '../utils';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default class SignIn extends Component {
  state = {
    username: '',
    password: '',
    toast: false,
    toastMessage: '',
    loading: false
  };

  handleSubmit = async event => {
    const { username, password } = this.state;

    event.preventDefault();
    // if any field in form is blank
    if (this.isFormEmpty(this.state)) {
      this.showToast('Please fill in all fields');
      return;
    }

    // Sign in user
    try {
      // disable sign in button while form is submitted
      this.setState({ loading: true });
      // login the user data to backend
      const response = await strapi.login(username, password);
      // enable sign in button if user signed in successfully
      this.setState({ loading: false });
      // store jwt to localStorage
      setToken(response.jwt);
      // redirect to homepage
      this.redirectTo('/');
    } catch (err) {
      this.showToast(err.message);
      this.setState({
        loading: false
      });
    }
  };

  // Change state when form is filled
  handleChange = ({ event, value }) => {
    event.persist();
    this.setState({
      [event.target.name]: value
    });
  };

  // Show toast with given message
  showToast = message => {
    // Show toast message
    this.setState({
      toast: true,
      toastMessage: message
    });
    // hide toast message after 5 sec
    setTimeout(() => this.setState({ toast: false, toastMessage: '' }), 5000);
  };

  // check if any of the fields are empty
  isFormEmpty = ({ username, password }) => {
    return !username || !password;
  };

  // Redirect to a given path
  redirectTo = path => this.props.history.push(path);

  render() {
    const { toast, toastMessage, loading } = this.state;

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
          {/* SignIn form */}
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
                <Heading color="midnight">Welcome back!</Heading>
              </Box>
            </Box>
            {/* Username Input */}
            <Box marginBottom={3} width={500}>
              <TextField
                id="username"
                name="username"
                type="text"
                placeholder="Enter Username"
                onChange={this.handleChange}
              />
            </Box>

            {/* Password Input */}
            <Box marginBottom={3} width={500}>
              <TextField
                id="password"
                name="password"
                type="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
            </Box>
            {/* Sign In button */}
            <Button
              disabled={loading}
              inline
              color="blue"
              type="submit"
              text="Sign In"
            />
          </form>
        </Box>
        {/* Toast message section */}
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
          <ToastMessage message={toastMessage} show={toast} />
        </Box>
      </Container>
    );
  }
}
