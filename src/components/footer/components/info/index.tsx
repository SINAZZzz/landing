import { Box } from "@mui/material";
import CopyRight from "./components/CopyRight";
import Logo from "./components/Logo";
import PurchaseBtn from "./components/PurchaseBtn";

export default function Info() {
  return (
    <Box
      position="relative"
      padding="10px"
      display="flex"
      width="80%"
      justifyContent="space-between"
      alignItems="center"
    >
      <CopyRight />
      <Logo />
      <PurchaseBtn />
    </Box>
  );
}
