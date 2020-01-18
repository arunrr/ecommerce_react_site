import React from 'react';
import { SearchField, Box } from 'gestalt';

export default function SearchBox({ onChange }) {
  return (
    <Box display="flex" justifyContent="center" marginTop={4}>
      <SearchField
        placeholder="Search Brands"
        accessibilityLabel="Brand Search Field"
        id="brandSearch"
        onChange={onChange}
      />
    </Box>
  );
}
