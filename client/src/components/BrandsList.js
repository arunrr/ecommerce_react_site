import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Container, Box, Heading } from 'gestalt';

import Brands from './BrandCard';
import SearchBox from './SearchBox';
import Loader from './Loader';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default class BrandsList extends Component {
  state = {
    brands: [],
    searchTerm: '',
    loading: true
  };

  // change state while searching
  handleChange = event => {
    this.setState({ searchTerm: event.value });
  };

  async componentDidMount() {
    // Get list of brands from backend
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: ` query{
              brands{
                _id
                name
                description
                createdAt
                image{
                  name
                  url
                }
              }
            }
            
            
            `
        }
      });

      this.setState({ brands: response.data.brands, loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { searchTerm, brands, loading } = this.state;

    // filter brands list based on search term
    const filteredBrands = brands.filter(brand =>
      brand.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <Container>
        {/* Loading animation while fetch */}
        <Loader loading={loading} />
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        {/* Search box Section */}
        <SearchBox onChange={this.handleChange} holder="Brands" />
        {/* Display Brands Section */}
        <Box wrap display="flex" justifyContent="around">
          {filteredBrands.map(brand => (
            <Brands
              key={brand._id}
              image={`${brand.image.url}`}
              title={brand.name}
              desc={brand.description}
              url={`/${brand._id}`}
            />
          ))}
        </Box>
      </Container>
    );
  }
}
