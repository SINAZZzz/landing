import { Box, Typography } from "@mui/material";
import Title from "../Title";
import Button from "../Button";

export default function Head() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
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
      <Box>
        <Title
          title="Landing"
          color="#37447E"
          fontWeight={"bold"}
          fontSize={"1.5rem"}
        />
      </Box>
      <Box>
        <Button
          Title="Buy Now"
          border={0}
          bgcolor={"#111B47"}
          borderRadius={"5px"}
          color={"#FFFFFF"}
          width={"12rem"}
          py={"6px"}
        />
      </Box>
    </Box>
  );
}
