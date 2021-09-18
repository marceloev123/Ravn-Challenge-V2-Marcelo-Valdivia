import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
const Navbar = () => {
   return (
      <Flex
         as="nav"
         align="center"
         justify="space-between"
         w="100%"
         bg="#121212"
         h="52px"
         boxShadow="0px 0px 10px rgba(0,0,0,0.25)"
      >
         <Box>
            <Heading
               fontSize="17px"
               lineHeight="20px"
               letterSpacing="0.0125em"
               fontStyle="normal"
               fontWeight="bold"
               color="#F2F2F2"
               left="33px"
               top="16px"
               height="20px"
               position="absolute"
               display="flex"
            >
               Ravn Star Wars Registry
            </Heading>
         </Box>
      </Flex>
   );
};

export default Navbar;
