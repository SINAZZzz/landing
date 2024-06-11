import { Box, Grid } from "@mui/material";
import Image from "../../../../assets/images/undraw_mobile_login_ikmv.png";
import Title from "../../../Title";
import Description from "../../../Description";
import Items from "./components/Items";

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
          </Box>
          <Items />
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
