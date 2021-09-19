import React, { useState } from "react";
//Components
import { Box } from "@chakra-ui/react";

import People from "../components/People";
import Person from "../components/Person";

const Home = () => {
   const [selected, setSelected] = useState(null);

   return (
      <div style={{ flex: 1, width: "100%", display: "flex", direction: "row" }}>
         <Box w="350px" bg="#fff" boxShadow="1px 0px 0px rgba(0, 0, 0, 0.15)" overflow="auto">
            <People setSelected={setSelected} />
         </Box>

         <Person selected={selected} />
      </div>
   );
};

export default Home;
