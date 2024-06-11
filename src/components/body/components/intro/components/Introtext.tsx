import { Box, Typography } from "@mui/material";

export default function Introtext() {
  return (
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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          <br />
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          <br />
          penatibus et magnis dis parturient montes, nascetur ridiculus <br />
          <br />
          mus. Donec quam felis, ultricies nec, pellentesque eu, pretium <br />{" "}
          quis, sem. Nulla consequat massa quis enim.
        </Typography>
      </Box>
    </Box>
  );
}
