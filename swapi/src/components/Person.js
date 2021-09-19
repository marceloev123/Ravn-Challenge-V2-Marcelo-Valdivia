import React, { useEffect } from "react";
import { gql, useLazyQuery } from "@apollo/client";

import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
import NoticeCell from "../components/NoticeCell";
import DataCell from "../components/DataCell";

const GET_DETAIL = gql`
   query getDetail($id: ID!) {
      person(id: $id) {
         name
         eyeColor
         hairColor
         skinColor
         birthYear
         vehicleConnection {
            vehicles {
               name
            }
         }
      }
   }
`;
function Person({ selected }) {
   let [getDetail, { loading, error, data }] = useLazyQuery(GET_DETAIL, {
      variables: { id: selected },
   });

   useEffect(() => {
      if (selected !== null) {
         getDetail();
      }
   }, [getDetail, selected]);

   let features = [
      { heading: "Eye Color", value: data?.person?.eyeColor },
      { heading: "Hair Color", value: data?.person?.hairColor },
      { heading: "Skin Color", value: data?.person?.skinColor },
      { heading: "Birth Year", value: data?.person?.birthYear },
   ];

   let vehicles = data?.person?.vehicleConnection?.vehicles;

   if (loading)
      return (
         <Box ml="auto" mr="auto">
            <LoadingIndicator />
         </Box>
      );

   if (error)
      return (
         <Box ml="auto" mr="auto">
            <NoticeCell />
         </Box>
      );
   if (data) {
      return (
         <Flex
            w={{ base: "auto", sm: "auto", md: "800px", lg: "890px", xl: "890px" }}
            ml="auto"
            mr="auto"
            direction="column"
            overflow="auto"
         >
            <Box w="375px" h="60px">
               <Heading
                  w="246px"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="17px"
                  lineHeight="20px"
                  letterSpacing="0.0125em"
                  color="#333333"
                  textAlign="left"
                  pt="32px"
                  pl="16px"
                  pr="16px"
                  pb="8px"
               >
                  General Information
               </Heading>
            </Box>
            {features.map((feature, idx) => (
               <DataCell key={idx} heading={feature?.heading} value={feature?.value} />
            ))}
            <Box w="375px" h="60px">
               <Heading
                  w="246px"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="17px"
                  lineHeight="20px"
                  letterSpacing="0.0125em"
                  color="#333333"
                  textAlign="left"
                  pt="32px"
                  pl="16px"
                  pr="16px"
                  pb="8px"
               >
                  Vehicles
               </Heading>
            </Box>
            {(!!vehicles &&
               !!vehicles.length &&
               vehicles.map((vehicle, idx) => (
                  <Flex direction="column">
                     <Heading
                        key="idx"
                        fontStyle="normal"
                        fontWeight="bold"
                        fontSize="17px"
                        lineHeight="20px"
                        letterSpacing="0.0125em"
                        color="#828282"
                        textAlign="left"
                        p="16px"
                     >
                        {vehicle?.name}
                     </Heading>
                     <Divider />
                  </Flex>
               ))) || (
               <Heading
                  key="idx"
                  fontStyle="normal"
                  fontWeight="bold"
                  fontSize="17px"
                  lineHeight="20px"
                  letterSpacing="0.0125em"
                  color="#828282"
                  textAlign="left"
                  p="16px"
               >
                  The character doesn't have vehicles
               </Heading>
            )}
         </Flex>
      );
   } else {
      return null;
   }
}

export default Person;
