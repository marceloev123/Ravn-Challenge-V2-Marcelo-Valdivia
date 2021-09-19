import React, { useState } from "react";
//Components
import { Box, Flex, Heading } from "@chakra-ui/layout";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";

import { gql, useQuery, useLazyQuery } from "@apollo/client";
import FailedIndicator from "../components/FailedIndicator";

const Home = () => {
   const [idx, setIdx] = useState(-1);
   const GET_CHARACTERES = gql`
      query {
         allPeople {
            people {
               name
            }
         }
      }
   `;

   const GET_DETAIL = gql`
      query GetCharacterDetail($id: ID!) {
         person(personID: $id) {
            name
            eyeColor
         }
      }
   `;

   function Detail(props) {
      const { loading, error, data } = useQuery(GET_DETAIL, {
         variables: { id: props.idx },
      });

      if (loading) return <LoadingIndicator />;

      if (error) return <FailedIndicator />;

      return <Heading>{data?.person?.eyeColor}</Heading>;
   }

   function Characters() {
      const { loading, error, data } = useQuery(GET_CHARACTERES);

      if (loading) return <LoadingIndicator />;

      if (error) return <FailedIndicator />;

      return (
         <Box>
            {data?.allPeople?.people?.map((character, idx) => (
               <Heading key={idx} onClick={() => setIdx(idx + 1)}>
                  {character?.name}
               </Heading>
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
