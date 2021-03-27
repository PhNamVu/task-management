import { createStandaloneToast } from "@chakra-ui/react"

const position = "top-right"
const duration = 3500
const isClosable = false
const variant = 'solid'

export const positiveToast = createStandaloneToast({
  defaultOptions: { position, duration, isClosable, status: "success", variant, },
});

export const negativeToast = createStandaloneToast({
  defaultOptions: { position, duration, isClosable, status: "error", variant, },
});
