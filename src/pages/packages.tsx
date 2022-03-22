import {
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { FaArrowRight } from 'react-icons/fa';
const packages = () => {
  const packagesList = [
    {
      name: 'Starter',
      benefits: [
        { icon: <BsCurrencyDollar />, text: 'free', access: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'No Lockup Period',
          access: true,
        },
        { icon: <BsCurrencyDollar />, text: 'Model Framework', access: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'Risk Terminal Access',
          access: false,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'API Gateaway Access',
          access: false,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'Custom Model & Reports',
          access: false,
        },
      ],
      price: 0,
    },
    {
      name: 'Pro',
      benefits: [
        { icon: <BsCurrencyDollar />, text: 'free', access: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'No Lockup Period',
          access: true,
        },
        { icon: <BsCurrencyDollar />, text: 'Model Framework', access: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'Risk Terminal Access',
          access: true,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'API Gateaway Access',
          access: false,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'Custom Model & Reports',
          access: false,
        },
      ],
      price: 50,
    },
    {
      name: 'Unlimited',
      benefits: [
        { icon: <BsCurrencyDollar />, text: 'free', access: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'No Lockup Period',
          access: true,
        },
        { icon: <BsCurrencyDollar />, text: 'Model Framework', access: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'Risk Terminal Access',
          access: true,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'API Gateaway Access',
          access: true,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'Custom Model & Reports',
          access: false,
        },
      ],
      price: 100,
    },
    {
      name: 'Premium',
      benefits: [
        { icon: <BsCurrencyDollar />, text: 'free', disable: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'No Lockup Period',
          disable: true,
        },
        { icon: <BsCurrencyDollar />, text: 'Model Framework', disable: true },
        {
          icon: <BsCurrencyDollar />,
          text: 'Risk Terminal Access',
          disable: true,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'API Gateaway Access',
          disable: true,
        },
        {
          icon: <BsCurrencyDollar />,
          text: 'Custom Model & Reports',
          disable: true,
        },
      ],
      price: 100,
    },
  ];

  return (
    <Container maxW="container.xl">
      <Heading>Choose a Tier to Gain Access to our Tools and Start</Heading>
      <Text>Earning Rewards</Text>

      <Grid gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))" gap="4">
        {packagesList.map((item, i) => (
          <GridItem
            key={item.name}
            boxShadow="xl"
            borderRadius="lg"
            overflow="hidden"
            role="group"
          >
            <VStack
              transition="0.3s ease"
              py={4}
              px="4"
              _groupHover={{
                bg: 'pink.500',
                color: 'white',
              }}
            >
              <Heading as="h3" size="md">
                {item.name}
              </Heading>
            </VStack>
            <VStack py={4} px="4">
              <Text fontSize="md" textAlign="center">
                {i + 1}X <br /> Staking Rewards
              </Text>
              <Stack>
                {item.benefits.map((benefit) => (
                  <HStack spacing="0" key={benefit.text}>
                    <Icon color="purple.700">{benefit.icon}</Icon>
                    <Text fontSize="sm">{benefit.text}</Text>
                  </HStack>
                ))}
              </Stack>
              <Button
                transition="0.3s ease"
                _hover={{ opacity: 0.8 }}
                _groupHover={{
                  bg: 'pink.500',
                  color: 'white',
                }}
                variant="outline"
                w="80%"
              >
                {item.price === 0 ? (
                  'Free'
                ) : (
                  <>
                    {`$${item.price} per month*`}
                    <Icon>
                      <FaArrowRight />
                    </Icon>
                  </>
                )}
              </Button>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default packages;
