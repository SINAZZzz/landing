import { Box } from "@mui/material";
import { ButtonProps } from "../types/Props";

export default function Button({
  Title,
  px,
  py,
  bgcolor,
  color,
  width,
  height,
  fontSize,
  fontWeight,
  border,
  borderRadius,
  mb,
  mx,
  mr,
  onClick,
}: ButtonProps) {
  return (
    <Box
      component="button"
      onClick={onClick}
      fontWeight={fontWeight}
      border={border}
      borderRadius={borderRadius}
      color={color}
      bgcolor={bgcolor}
      width={width}
      height={height}
      fontSize={fontSize}
      px={px}
      py={py}
      mb={mb}
      mx={mx}
      mr={mr}
      sx={{ cursor: "pointer" }}
    >
      {Title}
    </Box>
  );
}
