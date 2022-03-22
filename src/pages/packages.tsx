import { Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import { BsCurrencyDollar } from 'react-icons/bs';

import PackageCard from '~/components/PackageCard';
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
          access: true,
        },
      ],
      price: 100,
    },
  ];

  return (
    <Container maxW="container.xl">
      <Heading
        my="4"
        as="h1"
        fontSize={{ base: 'xl', md: '3xl' }}
        textAlign="center"
      >
        Choose a Tier to Gain Access to our Tools and Start
      </Heading>
      <Text
        my="2"
        mb="8"
        fontSize={{ base: '2xl', md: '4xl' }}
        textAlign="center"
      >
        Earning Rewards
      </Text>

      <Grid gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))" gap="4">
        {packagesList.map((item, i) => (
          <PackageCard index={i} item={item} key={item.name} />
        ))}
      </Grid>
      <VStack color="gray.200">
        <Heading mt="6" fontSize="md" as="h4">
          Need Help? Check Out Our FAQ
        </Heading>
        <Text textAlign="center" fontSize="sm">
          *Cost are denominated in USD , and access is stored as staked amount{' '}
          <br /> in the price are subject to a DAO Governance Vote. Depending on
          the amount <br /> staked staking rewards may exceed monthly costs.
        </Text>
      </VStack>
    </Container>
  );
};

export default packages;
