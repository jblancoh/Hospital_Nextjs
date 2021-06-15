import React, { useState } from 'react'
import { useRouter } from 'next/router'

import {
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
  Stack,
  Box,
  ButtonGroup,
  NumberInput,
  NumberInputField,
  Select,
  Flex,
  Textarea
} from '@chakra-ui/react'
import { FaLessThanEqual } from 'react-icons/fa'

const FormDocument = () => {
  const [showPassword, setShowPassword] = useState(false)
  const handleShowClick = () => setShowPassword(!showPassword)
  const router = useRouter()
  const _login = () => {
    // Login
    router.push('documentsSent')
  }
  return (
    <Flex
      padding="4"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      w="100%"
      mt={25}
    >
      <FormControl>

        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Numero de oficio</FormLabel>
            <NumberInput size="sm" maxW={500} defaultValue={15} disabled={true}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </HStack>
        <HStack>
          <FormControl isRequired>
            <FormLabel fontSize={11}>Fecha de oficio</FormLabel>
            <Input type="datetime-local" />
            <FormLabel fontSize={11}> Fecha de Acuse</FormLabel>
            <Input type="datetime-local" />
          </FormControl>
        </HStack>
        <HStack mb={5}>
          <FormControl isRequired>
            <FormLabel fontSize={11}>Municipio o Instituto</FormLabel>
            <Select size="lg" variant="flushed" placeholder="Flushed" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={11}>Área o Depto</FormLabel>
            <Select size="lg" variant="flushed" placeholder="Flushed" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={11}>Unidad o Dirección</FormLabel>
            <Select size="lg" variant="flushed" placeholder="Flushed" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl id="name_dirigido" isRequired>
            <FormLabel fontSize={11}>Dirigido a</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Asunto</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack mb={5}>
          <FormControl isRequired>
            <FormLabel fontSize={11}>Unidad o Dirección Solicitante</FormLabel>
            <Select size="lg" variant="flushed" placeholder="Flushed" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel fontSize={11}>Área o Depto Solicitante</FormLabel>
            <Select size="lg" variant="flushed" placeholder="Flushed" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Solicitante</FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Tipo de Referencia</FormLabel>
            <Select size="lg" variant="flushed" placeholder="Flushed" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Oficio de Referencia </FormLabel>
            <Input type="text" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Observaciones</FormLabel>
            <Textarea type="text" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Oficio Digital</FormLabel>
            <Input type="file" />
          </FormControl>
        </HStack>
        <HStack spacing="24px" mb={5}>
          <FormControl>
            <FormLabel fontSize={11}>Estatus</FormLabel>
            <Select size="lg" variant="flushed" placeholder="Flushed" />
          </FormControl>
        </HStack>
        <ButtonGroup variant="outline" spacing="6">
          <Button
            variant="solid"
            colorScheme="telegram"
            type="submit"
          >Guardar</Button>
          <Button
            variant="solid"
            type="reset"
            onClick={() => { }}
          >Limpiar</Button>
        </ButtonGroup>
      </FormControl>
    </Flex>
  )
}

// 
// 
// 
// Estatus

export default FormDocument
