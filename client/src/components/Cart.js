import React from 'react';
import { Box, Mask, Heading, Text } from 'gestalt';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  return (
    <Mask shape="rounded" wash>
      <Box
        display="flex"
        direction="column"
        alignItems="center"
        padding={2}
        dangerouslySetInlineStyle={{
          __style: {
            backgroundColor: '#e7feff'
          }
        }}
      >
        {/* Cart heading */}
        <Heading align="center" size="md">
          Cart
        </Heading>
        length items selected
        <Text color="gray" italic></Text>
        {/* Cart items (will add)*/}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          direction="column"
        >
          <Box margin={2}>
            {cartItems.length === 0 && (
              <Text color="red">Please add items to cart</Text>
            )}
          </Box>
          <Text size="lg">Total: 4.99 $</Text>
          <Text>
            <Link to="/checkout">Checkout</Link>
          </Text>
        </Box>
      </Box>
    </Mask>
  );
}
