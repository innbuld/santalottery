
import React from "react";
import {
  Button,
  Flex,
  Text,
  Heading,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineMenuFold, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Flex
      justifyContent="space-between"
      borderBottomWidth="2px"
      borderBottomColor="teal"
      px="4"
      py="6"
      alignItems="center"
      bg=' #211f1f'
      color="white"
    >
      <Flex gap="8" justifyContent="space-between" alignItems="center">
        <Icon
          as={!isOpen ? AiOutlineMenu : AiOutlineMenuFold}
          w="16"
          h="6"
          alignSelf="center"
          cursor="pointer"
          onClick={() => setIsOpen(!isOpen)}
        />

        <Box>
          <Heading>Santa's Lottery</Heading>
        </Box>
      </Flex>
      <Flex gap="4" alignItems="center" justifyContent="space-between">
      
        <Button colorScheme="blue" rounded={'2xl'}>
          <Text color="white"> Connect Wallet</Text>
        </Button>
      </Flex>
    </Flex>
  );
}
