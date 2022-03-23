import { ChakraProvider } from '@chakra-ui/react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import 'pure-react-carousel/dist/react-carousel.es.css'; // requires a loader
import { ReactElement, ReactNode } from 'react';

// import Footer from '~/components/Footer/Footer';
// import Navigation from '~/components/Navigation/Navigation';
import theme from '~/theme';
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      {/* <Navigation /> */}
      {getLayout(<Component {...pageProps} />)}
      {/* <Footer /> */}
    </ChakraProvider>
  );
}

export default MyApp;
