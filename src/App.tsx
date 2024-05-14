import { Box, Container } from "@mui/material";
import Head from "./components/head/Head";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";
import Image from "./assets/images/designer_1.png";

function App() {
  return (
    <>
      <Box>
        <Box
          component="img"
          src={Image}
          zIndex={0}
          position="absolute"
          right="0"
          top={0}
        />
        <Box zIndex={2} position="relative">
          <Container>
            <Head />
            <Body />
          </Container>
          <Footer />
        </Box>
      </Box>
    </>
  );
}

export default App;
