import React, { useState } from "react";
//Components
import { Box, Flex, Heading } from "@chakra-ui/layout";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";

import { gql, useQuery } from "@apollo/client";
import FailedIndicator from "../components/FailedIndicator";
import PersonCell from "../components/PersonCell";

const Home = () => {
   const [idx, setIdx] = useState(-1);
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

   function Detail(props) {
      const { loading, error, data } = useQuery(GET_DETAIL, {
         variables: { id: props.idx },
      });

      if (loading) return <LoadingIndicator />;

      if (error) return <FailedIndicator />;

      return (
         <Box>
            <Heading>{data?.person?.eyeColor}</Heading>
            <Heading>{data?.person?.hairColor}</Heading>
            <Heading>{data?.person?.skinColor}</Heading>
            <Heading>{data?.person?.birthYear}</Heading>
         </Box>
      );
   }

   function Characters() {
      const { loading, error, data } = useQuery(GET_CHARACTERES);

      if (loading) return <LoadingIndicator />;

      if (error) return <FailedIndicator />;

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

   return (
      <Box minH="100vh" w="100%">
         <Flex direction="row">
            <Box
               minW="350px"
               h="100%"
               top="52px"
               left="0px"
               bg="#fff"
               boxShadow="1px 0px 0px rgba(0, 0, 0, 0.15)"
            >
               <Characters />
            </Box>
            <Box position="relative">{idx !== -1 && <Detail idx={idx} />}</Box>
         </Flex>
      </Box>
   );
};

export default Home;
