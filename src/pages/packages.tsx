import { Container, Grid, Heading, Text } from '@chakra-ui/react';
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
      <Heading>Choose a Tier to Gain Access to our Tools and Start</Heading>
      <Text>Earning Rewards</Text>

      <Grid gridTemplateColumns="repeat(auto-fit,minmax(250px,1fr))" gap="4">
        {packagesList.map((item, i) => (
          <PackageCard index={i} item={item} key={item.name} />
        ))}
      </Grid>
    </Container>
  );
};

export default packages;
