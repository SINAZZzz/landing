import { Box } from "@mui/material";

import imageIntroOne from "../../assets/images/designer_3.png";
import imageIntroTwo from "../../assets/images/designerr_4.png";
import imageIntroThree from "../../assets/images/designerrr_5.png";

import PricingCard from "./components/section/pricing";
import HeroContent from "./components/heroContent/HeroContent";
import Undraw from "./components/undraw/Undraw";
import Intro from "./components/intro/Intro";

export default function Body() {
  return (
    <Box height="100%" width="100%">
      <Box px={"10%"}>
        <HeroContent />
        <Undraw />
          <Intro image={imageIntroOne} />
          <Intro image={imageIntroTwo} />
          <Intro image={imageIntroThree} />
      </Box>
      <PricingCard />
    </Box>
  );
}
