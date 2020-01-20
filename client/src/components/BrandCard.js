import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Image, Text, Card } from 'gestalt';

export default function Brands({ image, title, desc, url }) {
  return (
    <Box
      padding={5}
      margin={1}
      width={250}
      shape="rounded"
      dangerouslySetInlineStyle={{
        __style: {
          backgroundColor: '#e7feff'
        }
      }}
    >
      <Card
        image={
          <Box width={200} height={200}>
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
          <Text>
            <Link to={url}>
              <Box
                color="darkGray"
                shape="pill"
                paddingY={2}
                paddingX={4}
                marginTop={2}
              >
                <Text color="white" size="md">
                  See brews
                </Text>
              </Box>
            </Link>
          </Text>
        </Box>
      </Card>
    </Box>
  );
}
