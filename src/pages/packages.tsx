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

      <Grid>
        {packagesList.map((item, i) => (
          <GridItem key={item.name}>
            <VStack>
              <Heading as="h3" size="lg">
                {item.name}
              </Heading>
              <Text>{i + 1}X Staking Rewards</Text>
              <Stack>
                {item.benefits.map((benefit) => (
                  <HStack key={benefit.text}>
                    <Icon>{benefit.icon}</Icon>
                    <Text>{benefit.text}</Text>
                  </HStack>
                ))}
              </Stack>
              <Button>
                {item.price === 0 ? 'Free' : `$${item.price} per month*`}
              </Button>
            </VStack>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default packages;
