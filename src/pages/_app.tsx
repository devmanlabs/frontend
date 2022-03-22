import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';

import 'pure-react-carousel/dist/react-carousel.es.css'; // requires a loader
import Navigation from '~/components/Navigation/Navigation';
import theme from '~/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
