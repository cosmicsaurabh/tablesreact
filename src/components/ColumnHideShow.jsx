import React from 'react';
import { Box, FormControlLabel, Switch } from '@mui/material';

const ColumnHideShow = ({ table }) => {
  return (
    <Box>
      {table.getAllLeafColumns().map(column => (
        <FormControlLabel
          key={column.id}
          control={
            <Switch
              checked={column.getIsVisible()}
              onChange={column.getToggleVisibilityHandler()}
            />
          }
          label={column.columnDef.header}
        />
      ))}
    </Box>
  );
};

export default ColumnHideShow;