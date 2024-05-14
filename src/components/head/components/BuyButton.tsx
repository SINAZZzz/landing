import { Box } from "@mui/material";
import Button from "../../Button";

export default function BuyButton() {
  return (
    <Box>
      <Button
        Title="Buy Now"
        border={0}
        bgcolor={"#111B47"}
        borderRadius={"5px"}
        color={"#FFFFFF"}
        width={"12rem"}
        py={"7px"}
      />
    </Box>
  );
}
