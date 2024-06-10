import { Box, Grid, Typography } from "@mui/material";
import Icon from "../../../../assets/Icon.svg";
import Image from "../../../../assets/images/undraw_mobile_login_ikmv.png";
import Title from "../../../Title";
import Description from "../../../Description";

export default function Undraw() {
  return (
    <Box
      width="100%"
      height="100%"
      mt="30rem"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column">
            <Title
              title="Light, Fast & Powerful"
              fontSize="2.5rem"
              fontWeight="bold"
              color="#091133"
              my="1rem"
            />
            <Description
              text={
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus
                  <br /> <br /> mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim.
                </p>
              }
              color="#505F98"
              mb="3rem"
            />
            <Grid
              mt={"2rem"}
              container
              sx={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <Grid item md={6} xs={12}>
                <img src={Icon} alt="icon" />
                <Typography
                  variant="h1"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="#091133"
                  my="1rem"
                >
                  Title goes here
                </Typography>
                <Typography
                  fontSize="1rem"
                  fontWeight="light"
                  color="#6F7CB2"
                  my="1rem"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  dolorum esse numquam!
                </Typography>
              </Grid>
              <Grid item md={6} xs={12}>
                <img src={Icon} alt="icon" />
                <Typography
                  variant="h1"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="#091133"
                  my="1rem"
                >
                  Title goes here
                </Typography>
                <Typography
                  fontSize="1rem"
                  fontWeight="light"
                  color="#6F7CB2"
                  my="1rem"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                  dolorum esse numquam!
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box display="flex" justifyContent="center">
            <Box
              component="img"
              src={Image}
              alt="main"
              sx={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
