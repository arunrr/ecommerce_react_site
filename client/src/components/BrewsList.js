import React, { Component } from 'react';
import Strapi from 'strapi-sdk-javascript/build/main';
import { Box } from 'gestalt';

import Loader from './Loader';
import BrewCard from './BrewCard';

const apiUrl = process.env.API_URL || 'http://localhost:1337';
const strapi = new Strapi(apiUrl);

export default class Brews extends Component {
  state = {
    brews: [],
    loading: true
  };

  async componentDidMount() {
    try {
      const response = await strapi.request('POST', '/graphql', {
        data: {
          query: ` query{
              brand(id:"${this.props.match.params.brandid}"){
                brews{
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
      this.setState({ brews: response.data.brand.brews, loading: false });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <Loader loading={this.state.loading} />
        <Box wrap display="flex" justifyContent="around">
          {this.state.brews.map(brew => (
            <BrewCard
              key={brew._id}
              image={`${apiUrl}${brew.image.url}`}
              title={brew.name}
              desc={brew.description}
            />
          ))}
        </Box>
      </div>
    );
  }
}
