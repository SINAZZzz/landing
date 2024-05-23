import React from "react";
import { Typography, Box } from "@mui/material";
import Title from "../../../../../Title";

const PricingHeader: React.FC = () => {
  return (
    <Box
      textAlign="center"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Title
        title="A Price To Suit Everyone"
        color="#091133"
        fontSize="2.5rem"
        fontWeight="bold"
        textAlign="center"
      />

      <Typography variant="body1" color="#6F7CB2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus.
      </Typography>
    </Box>
  );
};

export default PricingHeader;
