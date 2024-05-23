import React from "react";
import { Box } from "@mui/material";
import Title from "../../../../../Title";

const PricingAmount: React.FC = () => {
  return (
    <Box textAlign="center" display="flex" flexDirection="column">
      <Title title="$40" fontSize="3rem" color="#222F65" fontWeight="bold" />
      <Title title="UI Design Kit" fontSize="1rem" color="#222F65" />
    </Box>
  );
};

export default PricingAmount;
