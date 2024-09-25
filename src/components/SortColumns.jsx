import React from "react";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const SortColumns = ({ table }) => {
  return (
    <Box>
      {table.getAllLeafColumns().map((column) => (
        <FormControl fullWidth key={column.id} sx={{ mb: 2 }}>
          <InputLabel>{column.columnDef.header}</InputLabel>
          <Select
            value={column.getIsSorted() || ""}
            onChange={(e) => column.toggleSorting(e.target.value === "asc")}
            label={column.columnDef.header}
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="asc">Ascending</MenuItem>
            <MenuItem value="desc">Descending</MenuItem>
          </Select>
        </FormControl>
      ))}
    </Box>
  );
};

export default SortColumns;
