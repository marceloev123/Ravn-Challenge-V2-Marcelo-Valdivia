import { Box, Flex, Heading } from "@chakra-ui/layout";
import React from "react";
import "./LoadingIndicator.css";

const LoadingIndicator = () => {
   return (
      <Box maxW="350px" h="56px">
         <Flex direction="row" justifyContent="center" p="16px">
            <div className="lds-spinner">
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
               <div></div>
            </div>

            <Heading
               fontSize="17px"
               lineHeight="20px"
               color="#828282"
               fontWeight="bold"
               fontStyle="normal"
               alignItems="center"
               letterSpacing="0.0125em"
               ml="8px"
            >
               Loading
            </Heading>
         </Flex>
      </Box>
   );
};

export default LoadingIndicator;
