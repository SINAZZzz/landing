import { Box } from "@mui/material";
import Logo from "./components/Logo";
import Menu from "./components/Menu";
import BuyButton from "./components/BuyButton";

export default function Head() {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center">
      <Menu />
      <Logo />
      <BuyButton />
    </Box>
  );
}
