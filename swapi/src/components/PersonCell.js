import React from "react";
import { Box, Divider, Flex, Heading, IconButton, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const PersonCell = (props) => {
   return (
      <Box mawW="350px" h="69px" onClick={props.onClick}>
         <Flex direction="row">
            <Box w="307px" pt="16px" pl="16px" pr="16px" pb="16px">
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
                  {props?.specie || "Human"} from {props?.homeworldName}
               </Text>
            </Box>
            <IconButton
               mt="auto"
               mb="auto"
               ml="81.59px"
               mr="24px"
               size="xs"
               bg="white"
               isRound
               icon={<ChevronRightIcon w={6} h={6} />}
            />
         </Flex>

         <Divider w="334px" ml="16px" />
      </Box>
   );
};

export default PersonCell;
