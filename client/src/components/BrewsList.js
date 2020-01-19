import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Box, Container, Heading } from 'gestalt';

import Loader from './Loader';
import SearchBox from './SearchBox';
import BrewCard from './BrewCard';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default class BrewsList extends Component {
  state = {
    brand_name: '',
    brews: [],
    searchTerm: '',
    loading: true
  };

  handleChange = event => {
    this.setState({ searchTerm: event.value });
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
        loading: false
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
      <Container>
        {/* Brews Section */}
        <Box display="flex" justifyContent="center" marginBottom={2}>
          {/* Brews Header */}
          <Heading color="midnight" size="md">
            {this.state.brand_name}
          </Heading>
        </Box>
        {/* Search box Section */}
        <SearchBox onChange={this.handleChange} />
        {/* Loader Section */}
        <Loader loading={this.state.loading} />
        {/* Brew list section */}
        <Box wrap display="flex" justifyContent="around">
          {filteredBrews.map(brew => (
            <BrewCard
              key={brew.id}
              image={`${apiUrl}${brew.image.url}`}
              title={brew.name}
              desc={brew.description}
            />
          ))}
        </Box>
      </Container>
    );
  }
}
