import { Box, Typography, Grid } from "@mui/material";
import Button from "../Button";
import Icon from "../../assets/Icon.svg";
import Title from "../Title";
import Image from "../../assets/images/undraw_mobile_login_ikmv.png";

export default function Body() {
  return (
    <Box height="100%" width="100%">
      <Box mt="20%">
        <Typography
          fontSize="2.5rem"
          fontWeight="bold"
          color="#091133"
          my="1rem"
        >
          Introduce Your Product <br /> Quickly & Effectively
        </Typography>
        <Typography mr="55%" color="#505F98" mb="3rem">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus <br />
          <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
          quis, sem. Nulla consequat massa quis enim.
        </Typography>
        <Box>
          <Button
            Title="Purchase UI Kit"
            border={"2px solid"}
            bgcolor={"#111B47"}
            borderRadius={"3px"}
            color={"#FFFFFF"}
            width={"10rem"}
            py={"7px"}
            mr={"2rem"}
          />
          <Button
            Title="Learn More"
            border={"2px solid"}
            bgcolor={"#FFFFFF"}
            borderRadius={"3px"}
            color={"#111B47"}
            fontWeight={"bold"}
            fontSize={"0.8rem"}
            width={"10rem"}
            py={"6px"}
          />
        </Box>
      </Box>
      <Box
        width="100%"
        height="100%"
        mt="40rem"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Title
            title="Light, Fast & Powerfull"
            fontSize={"2rem"}
            fontWeight="bold"
            color={"#091133"}
          />
          <Typography color="#6F7CB2" mt="1rem">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />{" "}
            <br /> mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim.
          </Typography>
          <Grid container sx={{ width: "100%", height: "100%%" }}>
            <Grid item md={6} xs={8}>
              <img src={Icon} />
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
                fontSize="0.8rem"
                fontWeight="light"
                color="#091133"
                my="1rem"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                dolorum esse numquam!
              </Typography>
            </Grid>
            <Grid item md={6} xs={8}>
              <img src={Icon} />
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
                fontSize="0.8rem"
                fontWeight="light"
                color="#091133"
                my="1rem"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
                natus? Quae, laboriosam.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Box>
          <Box component="img" src={Image} />
        </Box>
      </Box>
    </Box>
  );
}
