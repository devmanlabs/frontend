import { Flex, Icon, Stack, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import { FaCog, FaRegEdit, FaSignOutAlt } from 'react-icons/fa';

import SidebarMenu from './SidebarMenu';
interface UserSideBarProps {
  onClose?: () => void;
  isDrawer?: boolean;
}
const UserSideBar: FC<UserSideBarProps> = ({ onClose, isDrawer = false }) => {
  const router = useRouter();
  const items = [
    {
      icon: <FaRegEdit />,
      text: 'Admin Management',
      link: '/',
    },

    {
      icon: <FaCog />,
      text: 'Settings',
      link: '/404',
      more: [
        {
          icon: <FaCog />,
          text: 'Change Password',
          link: '/settings',
        },
        {
          icon: <FaCog />,
          text: 'Delete Account',
          link: '/settings/delete-account',
        },
        {
          icon: <FaCog />,
          text: 'Notification Settings',
          link: '/settings/notification-settings',
        },
        {
          icon: <FaCog />,
          text: '2FA',
          link: '/settings/two-factor-authentication',
        },
      ],
    },
    {
      icon: <FaSignOutAlt />,
      text: 'Logout',
      link: '/patient-dashboard/logout',
    },
  ];

  return (
    <Stack
      boxShadow={isDrawer ? 'none' : 'xl'}
      pb="4"
      overflowY="scroll"
      height="100%"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'pink',
          borderRadius: '24px',
        },
      }}
    >
      <Box py="2">
        {/* <Image src={logo} alt="logoImage" height={40} width={200} /> */}
      </Box>
      <>
        {' '}
        {items.map((item, i) => {
          if (item.more !== undefined) {
            return (
              <SidebarMenu
                more={item.more}
                icon={item.icon}
                text={item.text}
                key={i}
                onClose={onClose ? onClose : undefined}
              />
            );
          } else {
            return (
              <Link href={`${item.link}`} key={i} passHref>
                <Flex
                  alignItems="center"
                  style={{ padding: '15px 20px' }}
                  _hover={{
                    bg: 'pink.500',
                    color: 'white',
                  }}
                  bg={router.asPath === item.link ? 'pink.500' : 'white'}
                  borderRight={
                    router.asPath === item.link
                      ? '5px solid red !important'
                      : ''
                  }
                  color="white"
                  onClick={onClose}
                >
                  <Icon fontSize="xl" mr="2">
                    {item.icon}
                  </Icon>

                  <Text
                    fontSize="sm"
                    fontWeight={router.asPath === item.link ? 'bold' : ''}
                    as="span"
                  >
                    {item.text}
                  </Text>
                </Flex>
              </Link>
            );
          }
        })}
      </>
    </Stack>
  );
};

export default UserSideBar;
