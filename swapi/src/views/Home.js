import { Box } from "@chakra-ui/layout";
import React from "react";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";

const Home = () => {
   return (
      <Box minH="100vh" w="100%" >
         <Box
            position="absolute"
            minW="350px"
            h="100%"
            top="52px"
            left="0px"
            bg="#fff"
            boxShadow="1px 0px 0px rgba(0, 0, 0, 0.15)"
         >
            <LoadingIndicator />
         </Box>
      </Box>
   );
};

export default Home;
