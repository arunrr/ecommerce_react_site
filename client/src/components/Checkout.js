import React, { Component, Fragment } from 'react';
// prettier-ignore
import {Container, Box, Heading, TextField, Text, Modal, Button, Spinner} from 'gestalt';
// prettier-ignore
import { Elements, StripeProvider, CardElement, injectStripe } from 'react-stripe-elements';
import Strapi from 'strapi-sdk-javascript/build/main';
import { withRouter } from 'react-router-dom';

import {
  getCart,
  clearCart,
  displayTotalPrice,
  calculateAmount
} from '../utils';
import ToastMessage from './ToastMessage';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class _CheckoutForm extends Component {
  state = {
    cartItems: [],
    address: '',
    postalCode: '',
    confirmEmail: '',
    city: '',
    toast: false,
    toastMessage: '',
    orderProcessing: false,
    modal: false
  };

  closeModal = () => this.setState({ modal: false });

  handleConfirmOrder = async event => {
    event.preventDefault();
    // if any field in form is blank
    if (this.isFormEmpty(this.state)) {
      this.showToast('Please fill in all fields');
      return;
    }
    this.setState({ modal: true });
  };

  handleSubmitOrder = async () => {
    const { cartItems, city, postalCode, address } = this.state;

    const amount = calculateAmount(cartItems);

    // Process order
    this.setState({ orderProcessing: true });
    let token;
    try {
      const response = await this.props.stripe.createToken();
      token = response.token.id;
      await strapi.createEntry('orders', {
        amount,
        brews: cartItems,
        city,
        postalCode,
        address,
        token
      });
      this.setState({ orderProcessing: false, modal: false });
      clearCart();
      this.showToast('Your order has been successfully submitted', true);
    } catch (err) {
      this.setState({ orderProcessing: false, modal: false });
      this.showToast(err.message);
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
  showToast = (message, redirect = false) => {
    // Show toast message
    this.setState({
      toast: true,
      toastMessage: message
    });

    // hide toast message after 5 sec
    setTimeout(
      () =>
        this.setState(
          { toast: false, toastMessage: '' },
          // if true is passed to redirect argument then redirect to homepage
          () => redirect && this.props.history.push('/')
        ),
      5000
    );
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
    const {
      toast,
      toastMessage,
      cartItems,
      orderProcessing,
      modal
    } = this.state;

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
                <Text size="lg" color="watermelon" weight="bold">
                  Total : {displayTotalPrice(cartItems)}
                </Text>
              </Box>
              {/* Checkout form */}
              <Box width={400}>
                <form
                  styled={{
                    display: 'inlineBlock',
                    maxWidth: 450,
                    textAlign: 'center'
                  }}
                  onSubmit={this.handleConfirmOrder}
                >
                  {/* Address Input */}
                  <Box>
                    <TextField
                      id="address"
                      name="address"
                      type="text"
                      placeholder="Enter Shipping Address"
                      onChange={this.handleChange}
                    />
                  </Box>
                  {/* Postal Code Input */}
                  <Box>
                    <TextField
                      id="postalCode"
                      name="postalCode"
                      type="number"
                      placeholder="Enter Postal Code"
                      onChange={this.handleChange}
                    />
                  </Box>
                  {/* City Input */}
                  <Box>
                    <TextField
                      id="city"
                      name="city"
                      type="text"
                      placeholder="City of Residence"
                      onChange={this.handleChange}
                    />
                  </Box>
                  {/* Confirm Email Input */}
                  <Box>
                    <TextField
                      id="confirmEmail"
                      name="confirmEmail"
                      type="email"
                      placeholder="Enter registered email address"
                      onChange={this.handleChange}
                    />
                  </Box>
                  {/* Credit card element */}
                  <CardElement
                    id="stripe__input"
                    onReady={input => input.focus()}
                  />
                  {/* Checkout button */}
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <button id="stripe__button" type="submit">
                      Checkout
                    </button>
                  </Box>
                </form>
              </Box>
            </Fragment>
          ) : (
            <Box margin={2}>
              <Text color="watermelon" size="lg">
                Please add items to cart
              </Text>
            </Box>
          )}
        </Box>
        {/* Order confirmation modal */}
        {modal && (
          <ConfirmOrderModal
            handleSubmitOrder={this.handleSubmitOrder}
            orderProcessing={orderProcessing}
            cartItems={cartItems}
            closeModal={this.closeModal}
          />
        )}

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

// Confirm order modal component
const ConfirmOrderModal = ({
  orderProcessing,
  handleSubmitOrder,
  cartItems,
  closeModal
}) => (
  <Modal
    accessibilityCloseLabel="close"
    accessibilityModalLabel="Confirm order modal"
    heading={
      <Box
        justifyContent="center"
        alignItems="center"
        direction="column"
        display="flex"
        paddingY={2}
      >
        <Heading size="sm">Confirm Your Order</Heading>
      </Box>
    }
    onDismiss={closeModal}
    footer={
      <Box display="flex" justifyContent="center">
        <Box padding={2}>
          <Button
            text="Checkout"
            size="lg"
            color="blue"
            disabled={orderProcessing}
            onClick={handleSubmitOrder}
          />
        </Box>
        <Box padding={2}>
          <Button
            text="Cancel"
            size="lg"
            color="red"
            disabled={orderProcessing}
            onClick={closeModal}
          />
        </Box>
      </Box>
    }
    size="md"
    role="alertdialog"
  >
    {/* Order Summary */}
    {!orderProcessing && (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        direction="column"
        color="lightWash"
        padding={2}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          {cartItems.map(item => (
            <Box key={item.id} margin={2} alignSelf="start">
              <Text size="lg" color="watermelon">
                {item.name} x {item.quantity} - {item.quantity * item.price} $
              </Text>
            </Box>
          ))}
        </Box>

        <Box paddingY={2} MarginTop={2}>
          <Text size="lg" weight="bold">
            Total : {displayTotalPrice(cartItems)}
          </Text>
        </Box>
      </Box>
    )}
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      direction="column"
      margin={5}
      dangerouslySetInlineStyle={{
        __style: {
          display: orderProcessing ? 'block' : 'none'
        }
      }}
    >
      <Spinner
        show={orderProcessing}
        accessibilityLabel="Order processing spinner"
      />
      <Box margin={4}>
        <Text italics weight="bold" size="sm">
          Processing Order...
        </Text>
      </Box>
    </Box>
  </Modal>
);

const CheckoutForm = withRouter(injectStripe(_CheckoutForm));

const Checkout = () => (
  <StripeProvider apiKey="pk_test_v8FridphUyEU5A9GsiT9FNWu003wq0PByO">
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default Checkout;
