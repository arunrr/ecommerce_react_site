import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Card } from 'gestalt';

export default function Brands({ image, title, desc, url }) {
  return (
    <Box margin={1} width={200}>
      <Card
        image={
          <Box width={200} height={200}>
            <Image
              alt="Brand image"
              naturalWidth={1}
              naturalHeight={1}
              src={image}
            />
          </Box>
        }
      >
        <Box
          display="flex"
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Text size="xl">{title}</Text>
          <Text>{desc}</Text>
          <Text>
            <Link to={url}>See brews</Link>
          </Text>
        </Box>
      </Card>
    </Box>
  );
}
