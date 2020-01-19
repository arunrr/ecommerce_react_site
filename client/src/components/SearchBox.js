import React from 'react';
import { SearchField, Box } from 'gestalt';

export default function SearchBox({ onChange, holder }) {
  return (
    <Box display="flex" justifyContent="center" marginTop={4} marginBottom={5}>
      <SearchField
        placeholder={`Search ${holder}`}
        accessibilityLabel={`${holder} Search Field`}
        id="brandSearch"
        onChange={onChange}
      />
    </Box>
  );
}
