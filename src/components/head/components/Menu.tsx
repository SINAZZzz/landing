import { Box, Typography } from "@mui/material";

export default function Menu() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="20%"
    >
      <Typography>Home</Typography>
      <Typography>About</Typography>
      <Typography>Contact</Typography>
    </Box>
  );
}
