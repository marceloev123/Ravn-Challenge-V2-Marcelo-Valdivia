import React, { useState } from "react";
//Components
import { Box, Divider, Flex, Heading, Table } from "@chakra-ui/react";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
import { gql, useQuery } from "@apollo/client";
import NoticeCell from "../components/NoticeCell";
import PersonCell from "../components/PersonCell";
import DataCell from "../components/DataCell";

const Home = () => {
   // Ok we use an index to make the onClick request, is not the best approach but its one way to do that
   const [idx, setIdx] = useState(-1);

   //Here I fetch all the data
   const GET_CHARACTERES = gql`
      query {
         allPeople {
            people {
               name
               species {
                  name
               }
               homeworld {
                  name
               }
            }
         }
      }
   `;

   // I get the detail of the character
   const GET_DETAIL = gql`
      query GetCharacterDetail($id: ID!) {
         person(personID: $id) {
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

   //The detail component
   function Detail(props) {
      const { loading, error, data } = useQuery(GET_DETAIL, {
         variables: { id: props.idx },
      });

      let features = [
         { heading: "Eye Color", value: data?.person?.eyeColor },
         { heading: "Hair Color", value: data?.person?.hairColor },
         { heading: "Skin Color", value: data?.person?.skinColor },
         { heading: "Birth Year", value: data?.person?.birthYear },
      ];

      let vehicles = data?.person?.vehicleConnection?.vehicles;

      if (loading) return <LoadingIndicator />;

      if (error) return <NoticeCell />;

      return (
         <Table justifyContent="center" maxW="890px" m="auto">
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
         </Table>
      );
   }

   //The Full Characters component
   function Characters() {
      const { loading, error, data } = useQuery(GET_CHARACTERES);

      if (loading) return <LoadingIndicator />;

      if (error) return <NoticeCell />;

      return (
         <Box>
            {data?.allPeople?.people?.map((character, idx) => (
               <PersonCell
                  key={idx}
                  name={character?.name}
                  specie={character?.species?.name}
                  homeworldName={character?.homeworld?.name}
                  onClick={() => setIdx(idx + 1)}
               />
            ))}
         </Box>
      );
   }

   // The view
   return (
      <Box minH="100vh" w="100%">
         <Flex direction="row" position="relative">
            <Box
               w="350px"
               minH="100vh"
               top="52px"
               left="0px"
               bg="#fff"
               boxShadow="1px 0px 0px rgba(0, 0, 0, 0.15)"
            >
               <Characters />
            </Box>
            <Box justifyContent="center" w="100%">
               {idx !== -1 && <Detail idx={idx} />}
            </Box>
         </Flex>
      </Box>
   );
};

export default Home;
