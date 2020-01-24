import React, { Component, Fragment } from 'react';
import { Container, Box, Heading, TextField, Text } from 'gestalt';

import { getCart, displayTotalPrice } from '../utils';
import ToastMessage from './ToastMessage';

class Checkout extends Component {
  state = {
    cartItems: [],
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

  componentDidMount() {
    // get carts  items from local storage
    this.setState({
      cartItems: getCart()
    });
  }

  render() {
    const { toast, toastMessage, cartItems } = this.state;

    return (
      <Container>
        <Box
          margin={4}
          padding={8}
          display="flex"
          shape="rounded"
          justifyContent="center"
          alignItems="center"
          direction="column"
          // position="fixed"
          dangerouslySetInlineStyle={{
            __style: {
              backgroundColor: '#e7feff'
            }
          }}
        >
          {/* Checkout form heading */}

          <Box>
            <Heading color="midnight">Checkout</Heading>
          </Box>

          {/* Cart items section */}
          {cartItems.length !== 0 ? (
            <Fragment>
              <Box
                display="flex"
                marginBottom={4}
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <Box margin={2}>
                  <Text italics color="orchid" size="md">
                    {cartItems.length} items to checkout
                  </Text>
                </Box>
                <Box>
                  {cartItems.map(item => (
                    <Box key={item.id} margin={4}>
                      <Text>
                        {` ${item.name} x ${item.quantity} --> 
                    ${item.price * item.quantity} $`}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Text size="lg" color="watermelon">
                  Total : {displayTotalPrice(cartItems)}
                </Text>
              </Box>
              {/* Checkout form */}
              <form
                style={{
                  display: 'inlineBlock',
                  maxWidth: 450,
                  textAlign: 'center'
                }}
                onSubmit={this.handleSubmit}
              >
                {/* Address Input */}
                <Box marginBottom={3} width={500}>
                  <TextField
                    id="address"
                    name="address"
                    type="text"
                    placeholder="Enter Shipping Address"
                    onChange={this.handleChange}
                  />
                </Box>
                {/* Postal Code Input */}
                <Box marginBottom={3} width={500}>
                  <TextField
                    id="postalCode"
                    name="postalCode"
                    type="number"
                    placeholder="Enter Postal Code"
                    onChange={this.handleChange}
                  />
                </Box>
                {/* City Input */}
                <Box marginBottom={3} width={500}>
                  <TextField
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City of Residence"
                    onChange={this.handleChange}
                  />
                </Box>
                {/* Confirm Email Input */}
                <Box marginBottom={3} width={500}>
                  <TextField
                    id="confirmEmail"
                    name="confirmEmail"
                    type="email"
                    placeholder="Enter registered email address"
                    onChange={this.handleChange}
                  />
                </Box>
                {/* Checkout button */}
                <Box>
                  <button id="stripe__button" type="submit">
                    Checkout
                  </button>
                </Box>
              </form>
            </Fragment>
          ) : (
            <Box margin={2}>
              <Text color="watermelon" size="lg">
                Please add items to cart
              </Text>
            </Box>
          )}
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
