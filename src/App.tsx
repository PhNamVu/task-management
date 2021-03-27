import * as React from "react"
import { Box, Grid } from "@chakra-ui/react"

import { FormExample } from "./components/Form"
import { ColorModeSwitcher } from "./ColorModeSwitcher"

export const App = () => (
  <Box textAlign="center" fontSize="xl">
    <Grid minH="100vh" p={8} w="25vw">
      <ColorModeSwitcher />
      <FormExample />
    </Grid>
  </Box>
);