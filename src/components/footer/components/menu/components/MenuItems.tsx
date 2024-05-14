import { Box, Typography } from "@mui/material";

export default function MenuItems() {
  const menuItem = ["Home", "About", "Contact"];
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      fontSize={"10px"}
      width="25%"
    >
      {menuItem.map((item) => {
        return (
          <Typography
            fontSize="14px"
            color="#939EA4"
            sx={{ cursor: "pointer" }}
          >
            {item}
          </Typography>
        );
      })}
    </Box>
  );
}
