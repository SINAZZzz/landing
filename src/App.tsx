import { Box } from "@mui/material";
import Head from "./components/head/Head";
import Footer from "./components/footer/Footer";
import Body from "./components/body/Body";

function App() {
  return (
    <>
      <Box>
        {/* head */}
        <Head />
        {/* body */}
        <Body />
        {/* footer */}
        <Footer />
      </Box>
    </>
  );
}

export default App;
