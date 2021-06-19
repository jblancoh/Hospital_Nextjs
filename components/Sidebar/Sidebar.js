import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router"
import {
  useDisclosure,
  Flex,
  Divider,
  IconButton,
  Heading,
  Avatar,
  Text,
} from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"
import Logo from '@components/Logo/Logo'
import NavItem from '@components/NavItem/NavItem'
import { FaPaperPlane, FaRegPaperPlane, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [navSize, changeNavSize] = useState("large")
  const [sentActive, setSentActive] = useState(false)
  const [receivedActive, setReceivedActive] = useState(false)
  const router = useRouter()

  useEffect(() => {
    console.log('router', router.route);
    switch (router.route) {
      case '/documentsSent':
        setSentActive(true)
        setReceivedActive(false)
        break;
      case '/documentsReceived':
        setReceivedActive(true)
        setSentActive(false)
        break;
      default:
        break;
    }
    return () => {
    }
  }, [router])

  return (
    <Flex
      pos="sticky"
      left="5"
      // h="100vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
      w={navSize == "small" ? "75px" : "200px"}
      borderRadius={navSize == "small" ? "15px" : "30px"}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        as="nav"
      >
        <IconButton
          bg="none"
          mt={5}
          _hover={{ background: 'none' }}
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize == "small") {
              changeNavSize("large")
            } else {
              changeNavSize("small")
            }
          }}
        />
        <NavItem to='documentsSent' navSize={navSize} icon={FaPaperPlane} title="Oficios enviados" active={sentActive} />
        <NavItem to='documentsReceived' navSize={navSize} icon={FaRegPaperPlane} title="Oficios recibidos" active={receivedActive} />
        <NavItem to='login' navSize={navSize} icon={FaSignOutAlt} title="Cerrar sesión" />
      </Flex>
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize == "small" ? "center" : "flex-start"}
        mb={4}
      >
        <Divider display={navSize == "small" ? "none" : "flex"} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="" />
          <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
            <Heading as="h3" size="sm">Usuario</Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Sidebar;