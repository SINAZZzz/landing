import { Box, Typography, Grid } from "@mui/material";
import Button from "../Button";
import Icon from "../../assets/Icon.svg";
import designer from '../../assets/images/designer_3.png'

export default function Body() {
  return (
    <Box
      height="160vh"
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

        <Typography fontSize="3rem" fontWeight="bold" color="#091133" my="1rem">
          Light, Fast & Powerfull
        </Typography>
        <Typography color="#505F98" mb="3rem">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa<br/>Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus 
        <br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
        </Typography>
        <Grid container sx={{ width:"40vh", height:"40vh"}}>
            <Grid item md={6} xs={8}><img src={Icon}/>
                <Typography  variant="h1" fontSize="1rem" fontWeight="bold" color="#091133" my="1rem">Title goes here</Typography>
                <Typography fontSize="1rem" fontWeight="light" color="#505F98" my="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum esse numquam!</Typography>
            </Grid>
            <Grid item md={6} xs={8}><img src={Icon}/>
                <Typography variant="h1" fontSize="1rem" fontWeight="bold" color="#505F98" my="1rem">Title goes here</Typography>
                <Typography fontSize="1rem" fontWeight="light" color="#505F98" my="1rem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, natus? Quae, laboriosam.</Typography>
            </Grid>
        </Grid>
      </Box>

      <Box 
      display="flex" 
      justifyContent="space-between"
      height="20vh"
      gap="150px"
      >
      <Box>
        <img src={designer} />
      </Box>
      <Box>
        <Box p={2}>
          <Box p={2}>
            <Typography variant="h1" fontSize="3rem" fontWeight="bold" color="#091133" mr="1rem" > Light, Fast & Powerfull </Typography>
            <Typography 
            fontSize="1rem" fontWeight="light" color="#505F98" my="1rem" mb="2rem">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/>Qui dolor corrupti est cumque ducimus animi 
            <br/>praesentium itaque amet minus nisi delectus obcaecati<br/><br/> explicabo officia, illumneque dicta aperiam iusto sint?<br/>
            Lorem ipsum dolor sit amet consectetur adipisicing
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
        
  </Box>
  );
}
