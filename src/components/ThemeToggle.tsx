import { SunIcon, MoonIcon } from "@chakra-ui/icons"
import { Button, useColorMode } from "@chakra-ui/react"
import React from "react"

export const ThemeToggle = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <div>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <SunIcon /> : <MoonIcon/>}
        </Button>
      </div>
    )
  }