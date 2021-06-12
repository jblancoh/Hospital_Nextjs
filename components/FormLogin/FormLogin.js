import React, { useState } from 'react'
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

const FormLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)
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
              <FormLabel>Usuario</FormLabel>
              <Input type="email" />
              <FormLabel>Contraseña</FormLabel>
              <InputGroup>
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
              </InputGroup>
              <FormHelperText textAlign="right">
                <Link>Olvidaste tu contraseña?</Link>
              </FormHelperText>
            </FormControl>
            <Button
              borderRadius={0}
              type="submit"
              variant="solid"
              w="full"
              colorScheme="telegram"
            >
              Iniciar
            </Button>
          </Stack>
        </form>
      </Box>
      <Box>
        <Link>
          Solicitar cuenta
        </Link>
      </Box>
    </>
  )
}

export default FormLogin
