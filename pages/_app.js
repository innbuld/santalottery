import { React } from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import Navbar from "../component/Navbar";



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar />
      <Flex>
        <Component {...pageProps} />
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
