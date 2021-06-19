import React, { useState } from 'react';
import Link from "next/link"
import {
  Flex,
  Menu,
  MenuList,
  MenuButton,
  Icon,
  Text,
} from "@chakra-ui/react"

const NavItem = ({ navSize, title, icon, active, description, to }) => {
  return (
    <Flex
      flexDir="column"
      mt={30}
      w="100%"
      alignItems={navSize == "small" ? "center" : "flex-start"}
    >
      <Menu placement="right">
        <Link
          href={to}
        >
          <MenuButton
            backgroundColor={active && "#AEC8CA"}
            p={4}
            borderRadius={8}
            _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
            w={navSize == "large" && "100%"}
            backgroundColor={active && "#AEC8CA"}
          >
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "#82AAD" : "gray.500"} />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
      </Menu>
    </Flex>
  );
}

export default NavItem;