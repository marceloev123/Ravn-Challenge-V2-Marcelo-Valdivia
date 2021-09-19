import React from "react";
import { Box, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";
const DataCell = (props) => {
   return (
      <Box>
         <Flex>
            <Box>
               <Heading
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="17px"
                  lineHeight="20px"
                  letterSpacing="0.0125em"
                  color="#828282"
                  textAlign="left"
                  p="16px"
               >
                 {props?.heading}
               </Heading>
            </Box>
            <Spacer />
            <Box>
               <Heading
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="17px"
                  lineHeight="20px"
                  letterSpacing="0.0125em"
                  color="#333333"
                  textAlign="right"
                  pt="16px"
                  pb="16px"
                  pr="16px"
                  float="right"
                  textTransform="capitalize"

               >
                {props?.value}
               </Heading>
            </Box>
         </Flex>
         <Divider />
      </Box>
   );
};

export default DataCell;
