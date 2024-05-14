import { Box } from "@mui/material";
import MenuItems from "./components/MenuItems";
import MenuIcons from "./components/MenuIcons";

export default function Menu() {
  return (
    <Box
      position="relative"
      display="flex"
      width="80%"
      justifyContent="space-between"
      alignItems="center"
    >
      <MenuItems />
      <MenuIcons />
    </Box>
  );
}
