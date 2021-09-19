import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { Box, Button } from "@chakra-ui/react";
import LoadingIndicator from "../components/LoadingIndicator/LoadingIndicator";
import PersonCell from "../components/PersonCell";
import NoticeCell from "../components/NoticeCell";

const GET_CHARACTERES = gql`
   query getAllCharacteres($after: String) {
      allPeople(first: 5, after: $after) {
         pageInfo {
            endCursor
            hasNextPage
         }
         edges {
            node {
               id
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
   }
`;
function People({ setSelected }) {
   const { loading, error, data, fetchMore } = useQuery(GET_CHARACTERES);
   const [isLoading, setLoading] = useState(false);

   const loadMore = () => {
      setLoading(true);
      fetchMore({
         variables: { after: data?.allPeople?.pageInfo?.endCursor },
      }).finally(() => setLoading(false));
   };

   if (loading) return <LoadingIndicator />;

   if (error) return <NoticeCell />;

   return (
      <Box overflow="auto">
         {data?.allPeople?.edges?.map(({ node }) => (
            <PersonCell
               key={node?.id}
               name={node?.name}
               specie={node?.species?.name}
               homeworldName={node?.homeworld?.name}
               onClick={() => setSelected(node?.id)}
            />
         ))}
         {data?.allPeople?.pageInfo?.hasNextPage ? (
            isLoading ? (
               <LoadingIndicator />
            ) : (
               <Box textAlign="center">
                  <Button
                     style={{
                        background: "#333333",
                        color: "white",
                     }}
                     onClick={loadMore}
                     m={4}
                  >
                     Load more
                  </Button>
               </Box>
            )
         ) : null}
      </Box>
   );
}

export default People;
