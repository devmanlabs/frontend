import { Box, Flex, Grid, Stack } from '@chakra-ui/react';

const Home = () => {
  return (
    <Stack height="100vh" spacing={0}>
      <Grid placeItems="center" as="nav" height="80px" bg="gray.100">
        Header
      </Grid>
      <Flex h="100vh" w="100%">
        <Stack
          h="100%"
          as="aside"
          w="350px
        "
          color="black"
          bg="yellow"
        ></Stack>
        <Stack w="100%" spacing={0}>
          <Box width="full" flex="1" bg="green">
            Main
          </Box>
          <Grid placeItems="center" as="nav" height="80px" bg="red">
            Footer
          </Grid>
        </Stack>
      </Flex>
    </Stack>
  );
};
export default Home;
