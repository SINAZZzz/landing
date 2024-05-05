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
}: TitleProps) {
  return (
    <Typography
      fontSize={fontSize}
      fontWeight={fontWeight}
      mt={mt}
      color={color}
      mx={mx}
      textAlign={textAlign}
    >
      {title}
    </Typography>
  );
}
