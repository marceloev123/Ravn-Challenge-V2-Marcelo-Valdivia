import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const FailedIndicator = () => {
   return (
      <Box maxW="350px" h="56px" p="16px">
         <Heading
            fontSize="17px"
            fontWeight="bold"
            color="#EC5757"
            textAlign="center"
            lineHeight="20px"
            fontStyle="normal"
            letterSpacing="0.0125em"
            
         >
            Falied to Load Data
         </Heading>
      </Box>
   );
};

export default FailedIndicator;

