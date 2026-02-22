"use client";

import { Box, Container, Typography, Button } from "@mui/material";

export default function Hero() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Hi,  Zahra Karimi
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={3}>
          Full Stack Developer | React | Next.js | Node.js
        </Typography>

        <Button variant="contained" size="large">
          View My Projects
        </Button>
      </Container>
    </Box>
  );
}