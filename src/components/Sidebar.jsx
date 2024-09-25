import React from "react";
import { Box, Typography, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

const Sidebar = ({ children, title, onClose }) => {
  return (
    <Box
      sx={{
        padding: "20px",
        backgroundColor: "white",
        width: "40vw",
        position: "fixed",
        right: 0,
        top: 0,
        height: "100vh",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
        zIndex: 100,
        overflowY: "auto",
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">{title}</Typography>
        <IconButton onClick={onClose}>
          <Close />
        </IconButton>
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};

export default Sidebar;