import React, { Component } from 'react';
import { Container, Box, Heading, TextField } from 'gestalt';

import ToastMessage from './ToastMessage';

class Checkout extends Component {
  state = {
    address: '',
    postalCode: '',
    confirmEmail: '',
    city: '',
    toast: false,
    toastMessage: ''
  };

  handleSubmit = async event => {
    event.preventDefault();
    // if any field in form is blank
    if (this.isFormEmpty(this.state)) {
      this.showToast('Please fill in all fields');
      return;
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
  isFormEmpty = ({ address, confirmEmail, postalCode, city }) => {
    return !address || !confirmEmail || !postalCode || !city;
  };

  render() {
    const { toast, toastMessage } = this.state;

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
          {/* Checkout form */}
          <form
            style={{
              display: 'inlineBlock',
              maxWidth: 450,
              textAlign: 'center'
            }}
            onSubmit={this.handleSubmit}
          >
            {/* Checkout form heading */}
            <Box
              marginBottom={2}
              display="flex"
              direction="column"
              alignItems="center"
            >
              <Box marginBottom={2}>
                <Heading color="midnight">Checkout</Heading>
              </Box>
            </Box>
            {/* Address Input */}
            <TextField
              id="address"
              name="address"
              type="text"
              placeholder="Enter Shipping Address"
              onChange={this.handleChange}
            />
            {/* Postal Code Input */}
            <TextField
              id="postalCode"
              name="postalCode"
              type="number"
              placeholder="Enter Postal Code"
              onChange={this.handleChange}
            />
            {/* City Input */}
            <TextField
              id="city"
              name="city"
              type="text"
              placeholder="City of Residence"
              onChange={this.handleChange}
            />
            {/* Confirm Email Input */}
            <TextField
              id="confirmEmail"
              name="confirmEmail"
              type="email"
              placeholder="Enter registered email address"
              onChange={this.handleChange}
            />
            {/* Checkout button */}
            <button id="stripe__button" type="submit">
              Checkout
            </button>
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

export default Checkout;
