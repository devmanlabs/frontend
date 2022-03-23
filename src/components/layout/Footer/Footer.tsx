import {
  Box,
  Container,
  Flex,
  HStack,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FC, ReactNode } from 'react';
import {
  FaDiscord,
  FaGithub,
  FaReddit,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from 'react-icons/fa';

import Logo from '../../Logo/Logo';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
interface FooterProps {}
const Footer: FC<FooterProps> = () => {
  const footerRoutes = [
    {
      header: 'Projects',
      routes: [
        {
          name: 'White Paper',
          link: '/',
        },
        {
          name: 'Library',
          link: '/',
        },
        {
          name: 'Reports',
          link: '/',
        },
        {
          name: 'Terminal',
          link: '/',
        },
      ],
    },
    {
      header: 'Learn',
      routes: [
        {
          name: 'Blog',
          link: '/',
        },
        {
          name: 'Media',
          link: '/',
        },
        {
          name: 'FAQ',
          link: '/',
        },
      ],
    },
    {
      header: 'Community',
      routes: [
        {
          name: 'Contributors',
          link: '/',
        },
        {
          name: 'Work with us',
          link: '/',
        },
        {
          name: 'Our Discord',
          link: '/',
        },
      ],
    },
    {
      header: 'Languages',
      routes: [
        {
          name: 'English',
          link: '/',
        },
        {
          name: 'English',
          link: '/',
        },
        {
          name: 'English',
          link: '/',
        },
      ],
    },
  ];

  return (
    <Box bg="purple.600" color={'gray.200'}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <Flex justify="space-between" flexDir={{ base: 'column', md: 'row' }}>
          <Stack spacing={6}>
            <Box>
              <Logo />
            </Box>
            <HStack spacing="6" fontSize="3xl">
              <FaDiscord />
              <FaTwitter />
              <FaYoutube />
              <FaGithub />
              <FaTelegram />
              <FaReddit />
              <FaWhatsapp />
            </HStack>
          </Stack>
          <SimpleGrid
            my={{ base: 10, md: 0 }}
            templateColumns={{ base: '1fr 1fr', md: ' 1fr 1fr 1fr 1fr' }}
            spacing={8}
          >
            {footerRoutes.map((footerRoute) => (
              <Stack key={footerRoute.header} align={'flex-start'}>
                <ListHeader>{footerRoute.header}</ListHeader>
                {footerRoute.routes.map((route) => (
                  <Link
                    key={route.name}
                    href={route.link}
                    fontSize={'sm'}
                    color={'gray.500'}
                  >
                    {route.name}
                  </Link>
                ))}
              </Stack>
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};
export default Footer;
