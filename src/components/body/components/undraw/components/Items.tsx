import { Grid, Typography } from "@mui/material";
import Icon from "../../../../../assets/Icon.svg";

export default function Items() {
  return (
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum
          esse numquam!
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam dolorum
          esse numquam!
        </Typography>
      </Grid>
    </Grid>
  );
}
