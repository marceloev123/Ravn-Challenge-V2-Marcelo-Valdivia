import React from "react";
import { Box, Divider, Flex, Heading, Text } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";

const PersonCell = (props) => {
   return (
      <Box w="375px" h="69px" onClick={props.onClick}>
         <Flex direction="row">
            <Box w="246px" pt="16px" pl="16px" pb="16px">
               <Heading
                  fontSize="17px"
                  lineHeight="20px"
                  fontStyle="normal"
                  fontWeight="bold"
                  letterSpacing="0.0125em"
                  color="#333333"
               >
                  {props?.name}
               </Heading>
               <Text
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="normal"
                  lineHeight="17px"
                  letterSpacing="0.0125em"
                  color="#828282"
               >
                  {props?.specie|| "Human"} from{" "}
                  {props?.homeworldName}
               </Text>
            </Box>
            <ChevronRightIcon ml="81.59px" mt="30px" mr="24px" />
         </Flex>

         <Divider w="359px" ml="16px" />
      </Box>
   );
};

export default PersonCell;
