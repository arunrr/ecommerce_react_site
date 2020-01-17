import React, { Component } from 'react';
import { Container, Box, Heading } from 'gestalt';
import Strapi from 'strapi-sdk-javascript/build/main';

import './App.css';

import Brands from './Brands';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

class App extends Component {
  state = {
    brands: []
  };

  async componentDidMount() {
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

      this.setState({ brands: response.data.brands });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <Container>
        {/* Brands Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brands Header */}
          <Heading color="midnight" size="md">
            Brew Brands
          </Heading>
        </Box>
        <Box wrap display="flex" justifyContent="around">
          {this.state.brands.map(brand => (
            <Brands
              key={brand._id}
              image={`${apiUrl}${brand.image.url}`}
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

export default App;
