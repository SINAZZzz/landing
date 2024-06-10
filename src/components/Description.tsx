import { Typography } from "@mui/material";
import { DescriptionProps } from "../types/Props";

export default function Description({
  text,
  fontSize,
  mt,
  color,
  mx,
  fontWeight,
  textAlign,
  mb,
  mr,
}: DescriptionProps) {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      mt={mt}
      mb={mb}
      mr={mr}
      color={color}
      mx={mx}
      textAlign={textAlign}
    >
      {text}
    </Typography>
  );
}
