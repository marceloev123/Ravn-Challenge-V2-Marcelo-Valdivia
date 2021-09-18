import React from "react";
//Components
import { Box, Heading } from "@chakra-ui/layout";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";

import { gql, useQuery } from "@apollo/client";

const Home = () => {
   const GET_CHARACTERES = gql`
      query {
         allPeople {
            people {
               id
               name
            }
         }
      }
   `;

   function Characters() {
      const { loading, error, data } = useQuery(GET_CHARACTERES);
      if (loading) return <LoadingIndicator />;
      if (error) return `Error! ${error.message}`;
      return (
         <Box>
            {data?.allPeople?.people?.map((character) => (
               <Heading key={character?.id}>{character?.name}</Heading>
            ))}
         </Box>
      );
   }

   return (
      <Box minH="100vh" w="100%">
         <Box
            position="absolute"
            minW="350px"
            h="100%"
            top="52px"
            left="0px"
            bg="#fff"
            boxShadow="1px 0px 0px rgba(0, 0, 0, 0.15)"
         >
            <Characters />
         </Box>
      </Box>
   );
};

export default Home;
