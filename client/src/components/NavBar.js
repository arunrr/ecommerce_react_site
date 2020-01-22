import React, { Component } from 'react';
import { Box, Text, Heading, Image, Button } from 'gestalt';
import { NavLink, withRouter } from 'react-router-dom';

import { getToken, clearToken, clearCart } from '../utils';

class NavBar extends Component {
  handleSignOut = () => {
    clearCart();
    clearToken();
    this.props.history.push('/');
  };

  render() {
    // return navbar based on user authencation
    return getToken() !== null ? (
      <AuthNavbar handleSignOut={this.handleSignOut} />
    ) : (
      <UnAuthNavBar />
    );
  }
}

// Navigation bar when signed in
const AuthNavbar = ({ handleSignOut }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={60}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Link to checkout */}
    <NavLink activeClassName="active" to="/checkout">
      <Text size="xl" color="white">
        Checkout
      </Text>
    </NavLink>

    {/* Link to Home */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewLaLa Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          ></Image>
        </Box>
        <Heading size="xs" color="orange">
          BrewLaLa
        </Heading>
      </Box>
    </NavLink>

    {/* Signout button */}
    <Button
      color="transparent"
      size="md"
      text="Sign Out"
      inline
      onClick={handleSignOut}
    />
  </Box>
);

// navigation bar when signed out
const UnAuthNavBar = () => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="around"
    height={60}
    color="midnight"
    padding={1}
    shape="roundedBottom"
  >
    {/* Link to Signin */}
    <NavLink activeClassName="active" to="/signin">
      <Text size="xl" color="white">
        Sign In
      </Text>
    </NavLink>

    {/* Link to Home */}
    <NavLink activeClassName="active" exact to="/">
      <Box display="flex" alignItems="center">
        <Box margin={2} height={50} width={50}>
          <Image
            alt="BrewLaLa Logo"
            naturalHeight={1}
            naturalWidth={1}
            src="./icons/logo.svg"
          ></Image>
        </Box>
        <Heading size="xs" color="orange">
          BrewLaLa
        </Heading>
      </Box>
    </NavLink>

    {/* Link to Signup */}
    <NavLink activeClassName="active" to="/signup">
      <Text size="xl" color="white">
        Sign up
      </Text>
    </NavLink>
  </Box>
);

export default withRouter(NavBar);
