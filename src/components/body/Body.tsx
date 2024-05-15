import { Box, Typography } from "@mui/material";
import Button from "../Button";

export default function Body() {
  return (
    <Box
      height="140vh"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      left={0}
    >
      <Typography fontSize="3rem" fontWeight="bold" color="#091133" my="1rem">
        Introduce Your Product <br /> Quickly & Effectively
      </Typography>
      <Typography mr="50%" color="#505F98" mb="3rem">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
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
      <Box
        marginTop="30vh"
        display="flex-start"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        left={0}
      >
        <Typography fontSize="2rem" fontWeight="bold" color="#091133" my="1rem">
          Light, Fast & Powerfull
        </Typography>
        <Typography color="#505F98" mb="3rem">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
        <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        quis, sem. Nulla consequat massa quis enim.
        </Typography>
      </Box>
    </Box>
  );
}
