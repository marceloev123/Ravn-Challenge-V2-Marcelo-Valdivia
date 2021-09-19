import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

function App() {
   return (
      <Box
         style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
         }}
      >
         <Navbar />
         <Home  />
      </Box>
   );
}

export default App;
