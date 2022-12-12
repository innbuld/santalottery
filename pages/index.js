import React from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Flex
      justifyContent="center"
      w="full"
      direction="column"
      alignItems="center"
      bg="#211f1f"
      h="86vh"
    >
      <Flex color="teal" fontSize="4xl" as={"b"}>
        <Heading>The Launchpad Protocol for Everyone!</Heading>
      </Flex>
      <Flex mt="8" color="white">
        <Text>
          PinkSale helps everyone to create their own tokens and token sales in
          few seconds.
        </Text>
      </Flex>
      <Flex mt={"8"}>
        <Button rounded="2xl" colorScheme="teal" color="white">
          Get Started
        </Button>
      </Flex>
    </Flex>
  );
}
