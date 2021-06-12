import React from "react"
import { Box, Text } from "@chakra-ui/react"
import Link from 'next/link'

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" fontWeight="bold">
        <Link href={'/'}>
          CONOFI
        </Link>
      </Text>
    </Box>
  )
}
