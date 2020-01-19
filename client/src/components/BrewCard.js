import React from 'react';
import { Box, Image, Text, Card } from 'gestalt';

export default function BrewCard({ image, title, desc, url }) {
  return (
    <Box padding={5} margin={1} width={250}>
      <Card
        image={
          <Box width={200} height={200} marginBottom={4}>
            <Image
              fit="cover"
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
          <Box marginBottom={2}>
            <Text size="xl">{title}</Text>
          </Box>
          <Box marginBottom={1}>
            <Text>{desc}</Text>
          </Box>
          {/* <Text>
            <Link to={url}>See brews</Link>
          </Text> */}
        </Box>
      </Card>
    </Box>
  );
}
