import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Card } from '~/components/Card';
import BalanceCard from '~/components/Home/BalanceCard';

const Home = () => {
  return (
    <Stack minH="100vh" spacing={0}>
      <Grid placeItems="center" as="nav" height="80px" bg="gray.100">
        Header
      </Grid>
      <Flex minH="100vh" w="100%">
        <Stack
          h="100%"
          w="350px"
          boxShadow="2xl"
          display={{ base: 'none', md: 'none' }}
        >
          <Text>hi</Text>
        </Stack>
        <Stack w="100%" spacing={0}>
          <Grid
            padding="4"
            templateRows={{ sm: 'repeat(8, 1fr)', lg: 'repeat(7, 1fr)' }}
            templateColumns={{ sm: 'repeat(8, 1fr)', lg: 'repeat(9, 1fr)' }}
            width="full"
            flex="1"
            gap="4"
            bg="gray.50"
          >
            <GridItem colSpan={{ sm: 8, lg: 5 }} rowSpan={{ sm: 2, lg: 2 }}>
              <BalanceCard />
            </GridItem>
            <GridItem colSpan={{ sm: 4, lg: 2 }} rowSpan={{ sm: 2, lg: 2 }}>
              <Card>
                <Grid>hi</Grid>
              </Card>
            </GridItem>
            <GridItem colSpan={{ sm: 4, lg: 2 }} rowSpan={{ sm: 2, lg: 2 }}>
              <Card>
                <Grid>hi</Grid>
              </Card>
            </GridItem>

            <GridItem colSpan={{ sm: 3, lg: 2 }} rowSpan={{ sm: 4, lg: 5 }}>
              <Card>
                <Grid>hi</Grid>
              </Card>
            </GridItem>
            <GridItem colSpan={{ sm: 5, lg: 7 }} rowSpan={{ sm: 4, lg: 5 }}>
              <Card>
                <Grid>hi</Grid>
              </Card>
            </GridItem>
          </Grid>
          <Grid placeItems="center" as="nav" height="80px" bg="gray.100">
            Footer
          </Grid>
        </Stack>
      </Flex>
    </Stack>
  );
};
export default Home;
