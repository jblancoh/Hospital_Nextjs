import React, { useState } from 'react';
// import Link from "next/link"
import {
  Flex,
  Menu,
  MenuList,
  Link,
  MenuButton,
  Icon,
  Text,
} from "@chakra-ui/react"
import NavHoverBox from '@components/NavHoverBox/NavHoverBox';

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
          backgroundColor={active && "#AEC8CA"}
          p={4}
          borderRadius={8}
          _hover={{ textDecor: 'none', backgroundColor: '#AEC8CA' }}
          w={navSize == "large" && "100%"}
          href={to}
        >
          <MenuButton w="100%">
            <Flex>
              <Icon as={icon} fontSize="xl" color={active ? "#82AAD" : "gray.500"} />
              <Text ml={5} display={navSize == "small" ? "none" : "flex"}>{title}</Text>
            </Flex>
          </MenuButton>
        </Link>
        <MenuList
          py={0}
          border="none"
          w={200}
          h={200}
          ml={5}
        >
          <NavHoverBox title={title} icon={icon} description={description} />
        </MenuList>
      </Menu>
    </Flex>
  );
}

export default NavItem;