import React from 'react';
import { Box, Mask, Heading, Text, IconButton } from 'gestalt';
import { Link } from 'react-router-dom';
import { displayTotalPrice } from '../utils';

export default function Cart({ cartItems, deleteCartItem }) {
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
        {cartItems.length} items selected
        <Text color="gray" italic></Text>
        {/* Cart items */}
        {cartItems.map(item => (
          <Box
            key={item.id}
            display="flex"
            alignItems="center"
            marginTop={2}
            marginBottom={2}
          >
            <Text>
              {item.name} x {item.quantity} -{' '}
              {(item.price * item.quantity).toFixed(2)} $
            </Text>
            <IconButton
              accessibilityLabel="Delete Item"
              icon="cancel"
              size="sm"
              iconColor="red"
              onClick={() => deleteCartItem(item.id)}
            />
          </Box>
        ))}
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
          <Text size="lg">Total: {displayTotalPrice(cartItems)}</Text>
          <Text>
            <Link to="/checkout">
              <div className="cart-checkout">Checkout</div>
            </Link>
          </Text>
        </Box>
      </Box>
    </Mask>
  );
}
