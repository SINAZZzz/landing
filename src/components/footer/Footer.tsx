import { Box, Divider } from "@mui/material";
import Info from "./components/info";
import Menu from "./components/menu";

export default function Footer() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      height={"fit-content"}
      overflow="hidden"
      position="relative"
      bgcolor="#E7ECFF"
      pt="4rem"
      pb="1rem"
      alignItems="center"
      justifyContent="end"
      gap="20px"
    >
      <Info />
      <Box position="relative" width="80%" mt="14px">
        <Divider variant="fullWidth" />
      </Box>
      <Menu />
    </Box>
  );
}
