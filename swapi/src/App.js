import { Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";

function App() {
   return (
      <Box>
         <Navbar />
         <Home />
      </Box>
   );
}

export default App;
