import React from 'react';
import { SyncLoader } from 'react-spinners';
import { Box } from 'gestalt';

export default function Loader({ loading }) {
  return (
    loading && (
      <Box
        position="fixed"
        dangerouslySetInlineStyle={{
          __style: {
            bottom: 300,
            left: '50%',
            transform: 'translateX(-50%)'
          }
        }}
      >
        <SyncLoader color="darkorange" size={25} margin="3px" />
      </Box>
    )
  );
}
