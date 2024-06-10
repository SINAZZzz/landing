import { Box, Typography } from "@mui/material";

export default function MenuItems() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      fontSize={"14px"}
      width="25%"
      color="#929ECC"
      sx={{ cursor: "pointer" }}
    >
      <Typography>Home</Typography>
      <Typography>About</Typography>
      <Typography>Contact</Typography>
    </Box>
  );
}
