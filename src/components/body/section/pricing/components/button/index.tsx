import React from "react";
import { Box } from "@mui/material";
import Title from "../../../../../Title";
import Button from "../../../../../Button";

const PricingButton: React.FC = () => {
  return (
    <Box
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      gap="12px"
    >
      <Title
        title="See, One price. Simple."
        fontSize="0.9rem"
        color="#5D6970"
      />
      <Button
        Title="Purchase me"
        fontSize="1rem"
        border={0}
        bgcolor={"#111B47"}
        borderRadius={"3px"}
        color={"#FFFFFF"}
        width={"14rem"}
        py={"10px"}
      />
    </Box>
  );
};

export default PricingButton;
