import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Box, Heading } from 'gestalt';

import Loader from './Loader';
import SearchBox from './SearchBox';
import BrewCard from './BrewCard';
import Cart from './Cart';
import { setCart, getCart } from '../utils';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default class BrewsList extends Component {
  state = {
    brand_name: '',
    brews: [],
    searchTerm: '',
    cartItems: [],
    loading: true
  };

  handleChange = event => {
    this.setState({ searchTerm: event.value });
  };

  addToCart = brew => {
    const alreadyInCart = this.state.cartItems.findIndex(
      item => item.id === brew.id
    );

    // if product is not found in cart
    if (alreadyInCart === -1) {
      const updatedItems = this.state.cartItems.concat({
        ...brew,
        quantity: 1
      });
      this.setState(
        {
          cartItems: updatedItems
        },
        () => setCart(updatedItems)
      );
    } else {
      // If product is present increase the quantity of the product by 1
      const updatedItems = [...this.state.cartItems];
      updatedItems[alreadyInCart].quantity += 1;
      this.setState(
        {
          cartItems: updatedItems
        },
        () => setCart(updatedItems)
      );
    }
  };

  handleDeleteCartItem = ItemToDeleteId => {
    const filteredItems = this.state.cartItems.filter(
      item => item.id !== ItemToDeleteId
    );
    this.setState(
      {
        cartItems: filteredItems
      },
      () => setCart(filteredItems)
    );
  };

  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: ` query{
              brand(id:"${this.props.match.params.brandid}"){
                name
                brews{
                  id
                  name
                  description
                  price
                  image{
                    url
                  }
                }
              }
            }
            `
        }
      });
      this.setState({
        brand_name: response.data.brand.name,
        brews: response.data.brand.brews,
        loading: false,
        cartItems: getCart()
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const filteredBrews = this.state.brews.filter(brew =>
      brew.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="start"
        marginTop={4}
      >
        {/* Brews Section */}
        <Box display="flex" direction="column" alignItems="center">
          {/* Brews Header */}
          <Box margin={2}>
            <Heading color="midnight" size="md">
              {this.state.brand_name}
            </Heading>
          </Box>
          {/* Search box Section */}
          <SearchBox onChange={this.handleChange} holder="Brews" />
          {/* Loader Section */}
          <Loader loading={this.state.loading} />
          {/* Brew list section */}
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            dangerouslySetInlineStyle={{
              __style: {
                flexWrap: 'wrap-reverse'
              }
            }}
          >
            <Box wrap display="flex" justifyContent="around">
              {filteredBrews.map(brew => (
                <BrewCard
                  key={brew.id}
                  image={`${apiUrl}${brew.image.url}`}
                  title={brew.name}
                  desc={brew.description}
                  price={brew.price}
                  onAddToCart={() => this.addToCart(brew)}
                />
              ))}
            </Box>
            <Box alignSelf="end" display="flex" marginTop={4}>
              {!this.state.loading ? (
                <Cart
                  cartItems={this.state.cartItems}
                  deleteCartItem={this.handleDeleteCartItem}
                />
              ) : null}
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}
