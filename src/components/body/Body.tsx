import { Box, Typography } from "@mui/material";
import Button from "../Button";

export default function Body() {
  return (
    <Box
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="start"
      justifyContent="center"
      left={0}
    >
      <Typography fontSize="3rem" fontWeight="bold" color="#091133">
        Introduce Your Product <br /> Quickly & Effectively
      </Typography>
      <Typography mr="50%" color="#505F98">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus <br />
        <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        quis, sem. Nulla consequat massa quis enim.
      </Typography>
      <Box>
        <Button
          Title="Buy Now"
          border={0}
          bgcolor={"#111B47"}
          borderRadius={"5px"}
          color={"#FFFFFF"}
          width={"12rem"}
          py={"6px"}
        />
        <Button
          Title="Buy Now"
          border={0}
          bgcolor={"#111B47"}
          borderRadius={"5px"}
          color={"#FFFFFF"}
          width={"12rem"}
          py={"6px"}
        />
      </Box>
    </Box>
  );
}
