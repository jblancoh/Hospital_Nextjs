import React, { useState } from 'react'
import { useRouter } from 'next/router'

import {
  FormControl,
  FormLabel,
  Input,
  InputRightElement,
  InputGroup,
  Button,
  FormHelperText,
  Link,
  Stack,
  Box
} from '@chakra-ui/react'

const FormDocument = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)
  const router = useRouter()
  const _login = () => {
    // Login
    router.push('documentsSent')
  }
  return (
    <>
      <Box
        padding="4"
        minW={{ base: "90%", md: "468px" }}
      >
        <form>
          <Stack
            spacing={4}
            p="1rem"
            boxShadow="md"
          >
            <FormControl>
              <FormLabel>Numero de oficio</FormLabel>
              <Input type="text" />
              <FormLabel>Fecha de oficio</FormLabel>
              <Input type="text" />
              <FormLabel>Contraseña</FormLabel>
              {/* <InputGroup>
                <Input type={showPassword ? "text" : "password"} />
                <InputRightElement w="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleShowClick}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup> */}
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              w="full"
              colorScheme="telegram"
            // onClick={_login}
            >
              Iniciar
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  )
}

export default FormDocument
