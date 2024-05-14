import { Box } from "@mui/material";
import Button from "../../../../Button";

export default function PurchaseBtn() {
  return (
    <Box>
      <Button
        Title="Purchase me"
        border={0}
        bgcolor={"#111B47"}
        borderRadius={"3px"}
        color={"#FFFFFF"}
        width={"7.5rem"}
        py={"7px"}
      />
    </Box>
  );
}
