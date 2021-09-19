import React from "react";
import { Box, Heading } from "@chakra-ui/react";
const Navbar = () => {
   return (
      <Box as="nav" w="100%" bg="#121212" pl="16px" paddingY="26px" position="static">
         <Heading
            fontSize="17px"
            lineHeight="20px"
            letterSpacing="0.0125em"
            fontStyle="normal"
            fontWeight="bold"
            color="#F2F2F2"
         >
            Ravn Star Wars Registry
         </Heading>
      </Box>
   );
};

export default Navbar;
