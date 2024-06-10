import { Box } from "@mui/material";
import Title from "../../Title";
import Description from "../../Description";
import Button from "../../Button";

export default function HeroContent() {
  return (
    <Box>
      <Box mt="20%">
        <Title
          title={
            <p>
              Introduce Your Product <br /> Quickly & Effectively
            </p>
          }
          mb={"1rem"}
          fontSize={"2.5rem"}
          fontWeight={"bold"}
          color={"#091133"}
        />
        <Description
          text={
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus{" "}
              <br />
              <br /> mus. Donec quam felis, ultricies nec, pellentesque eu,
              pretium quis, sem. Nulla consequat massa quis enim.
            </p>
          }
          mr="55%"
          color="#505F98"
          mb="3rem"
        />
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
  );
}
