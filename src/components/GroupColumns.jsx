import React from "react";
import { Box, Button } from "@mui/material";

const GroupColumns = ({ table }) => {
  return (
    <Box>
      {table.getAllLeafColumns().map((column) => (
        <Box
          key={column.id}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <span>{column.columnDef.header}</span>
          <Button
            variant={column.getIsGrouped() ? "contained" : "outlined"}
            onClick={() => column.toggleGrouping()}
          >
            {column.getIsGrouped() ? "Ungroup" : "Group"}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default GroupColumns;
