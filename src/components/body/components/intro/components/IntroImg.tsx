import { Box } from "@mui/material";

export default function IntroImg({ image }: { image: string }) {
  return (
    <Box flex="1" display="flex" alignItems="center">
      <img src={image} alt="Designer" />
    </Box>
  );
}
