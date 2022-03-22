import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import 'pure-react-carousel/dist/react-carousel.es.css'; // requires a loader

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
