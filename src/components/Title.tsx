import { Typography } from "@mui/material";
import { TitleProps } from "../types/Props";

export default function Title({
  title,
  fontSize,
  mt,
  color,
  mx,
  fontWeight,
  textAlign,
  mb,
  my,
}: TitleProps) {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      mt={mt}
      color={color}
      mx={mx}
      my={my}
      mb={mb}
      textAlign={textAlign}
    >
      {title}
    </Typography>
  );
}
