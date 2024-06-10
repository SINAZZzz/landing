import { Box, Typography } from "@mui/material";

import designer from "../../assets/images/designer_3.png";
import designerr from "../../assets/images/designerr_4.png";
import designerrr from "../../assets/images/designerrr_5.png";
import PricingCard from "./components/section/pricing";
import HeroContent from "./components/HeroContent";
import Undraw from "./components/undraw/Undraw";

export default function Body() {
  return (
    <Box height="100%" width="100%">
      <Box px={"10%"}>
        <HeroContent />
        {/* intro */}
        <Undraw />
        {/* Options */}
        <Box my={"15rem"}>
          <Box display="flex" justifyContent="space-between" width="100%">
            {/* img */}
            <Box flex="1" display="flex" alignItems="center">
              <img src={designer} alt="Designer" />
            </Box>
            {/* text */}
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Typography
                  variant="h1"
                  fontSize="2.2rem"
                  fontWeight="bold"
                  color="#091133"
                >
                  Light, Fast & Powerful
                </Typography>
                <Typography
                  fontSize="1rem"
                  fontWeight="light"
                  color="#6F7CB2"
                  my="1rem"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean
                  <br />
                  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                  <br />
                  penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                  <br />
                  <br />
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium{" "}
                  <br /> quis, sem. Nulla consequat massa quis enim.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            width="100%"
            my={"15rem"}
          >
            {/* img */}
            <Box flex="1" display="flex" alignItems="center">
              <img src={designerr} alt="Designer" />
            </Box>
            {/* text */}
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Typography
                  variant="h1"
                  fontSize="2.2rem"
                  fontWeight="bold"
                  color="#091133"
                >
                  Light, Fast & Powerful
                </Typography>
                <Typography
                  fontSize="1rem"
                  fontWeight="light"
                  color="#6F7CB2"
                  my="1rem"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean
                  <br />
                  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                  <br />
                  penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                  <br />
                  <br />
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium{" "}
                  <br /> quis, sem. Nulla consequat massa quis enim.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box display="flex" justifyContent="space-between" width="100%">
            {/* img */}
            <Box flex="1" display="flex" alignItems="center">
              <img src={designerrr} alt="Designer" />
            </Box>
            {/* text */}
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box>
                <Typography
                  variant="h1"
                  fontSize="2.2rem"
                  fontWeight="bold"
                  color="#091133"
                >
                  Light, Fast & Powerful
                </Typography>
                <Typography
                  fontSize="1rem"
                  fontWeight="light"
                  color="#6F7CB2"
                  my="1rem"
                >
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean
                  <br />
                  commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                  <br />
                  penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
                  <br />
                  <br />
                  mus. Donec quam felis, ultricies nec, pellentesque eu, pretium{" "}
                  <br /> quis, sem. Nulla consequat massa quis enim.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <PricingCard />
    </Box>
  );
}
