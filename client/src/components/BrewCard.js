import React from 'react';
import { Box, Image, Text, Card, Button } from 'gestalt';

export default function BrewCard({ image, title, desc, price, onAddToCart }) {
  return (
    <Box
      padding={5}
      margin={4}
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
          <Text>{desc}</Text>
          <Box marginBottom={3}></Box>
          <Text size="lg" weight="bold">
            {price} $
          </Text>
          <Box marginTop={3}>
            <Button onClick={onAddToCart} color="blue" text="Add to Cart" />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
