import { Box } from "@mui/material";
import Introtext from "./components/Introtext";
import IntroImg from "./components/IntroImg";

export default function Intro({ image }: { image: string }) {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      width="100%"
      my={"15rem"}
    >
      <IntroImg image={image} />
      <Introtext />
    </Box>
  );
}
