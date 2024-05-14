import { Box } from "@mui/material";
import MenuItems from "./components/MenuItems";
import MenuIcons from "./components/MenuIcons";

export default function Menu() {
  return (
    <Box
      position="relative"
      padding="10px"
      display="flex"
      width="80%"
      justifyContent="space-between"
      alignItems="center"
      mb="1rem"
    >
      <MenuItems />
      <MenuIcons />
    </Box>
  );
}
