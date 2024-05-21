import { Box, Typography, Grid } from "@mui/material";
import Button from "../Button";
import Icon from "../../assets/Icon.svg";
import Image from "../../assets/images/undraw_mobile_login_ikmv.png";
import designer from "../../assets/images/designer_3.png";
import designerr from "../../assets/images/designerr_4.png";
import designerrr from "../../assets/images/designerrr_5.png";

export default function Body() {
  return (
    <Box height="100%" width="100%">
      {/* Landing title */}
      <Box>
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
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus <br />
            <br /> mus. Donec quam felis, ultricies nec, pellentesque eu,
            pretium quis, sem. Nulla consequat massa quis enim.
          </Typography>
        </Box>
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
      {/* Tools */}
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
              <Typography
                fontSize="2.5rem"
                fontWeight="bold"
                color="#091133"
                my="1rem"
              >
                Light, Fast & Powerful
              </Typography>
              <Typography color="#505F98" mb="3rem">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                <br /> <br /> mus. Donec quam felis, ultricies nec, pellentesque
                eu, pretium quis, sem. Nulla consequat massa quis enim.
              </Typography>
              <Grid container spacing={2} sx={{ width: "100%" }}>
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
                    color="#091133"
                    my="1rem"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam dolorum esse numquam!
                  </Typography>
                </Grid>
                <Grid md={6} xs={12}>
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
                    color="#505F98"
                    my="1rem"
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quo, natus? Quae, laboriosam.
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
      {/* Options */}
      <Box my={'15rem'}>
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
                color="#505F98"
                my="1rem"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
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
        <Box display="flex" justifyContent="space-between" width="100%" my={'15rem'}>
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
                color="#505F98"
                my="1rem"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
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
                color="#505F98"
                my="1rem"
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
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
  );
}
