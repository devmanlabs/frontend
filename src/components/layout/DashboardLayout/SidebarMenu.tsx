import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

interface SidebarMenuProps {
  icon: JSX.Element;
  text: string;
  more: {
    icon: JSX.Element;
    text: string;
    link: string;
  }[];
  onClose?: () => void;
}

const SidebarMenu: FC<SidebarMenuProps> = ({ icon, text, more, onClose }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDown = () => setIsOpen((prev) => !prev);

  return (
    <>
      <Flex
        alignItems="center"
        style={{ padding: '15px 20px' }}
        justify="space-between"
        _hover={{
          bg: 'pink.500',
          color: 'white',
          py: 2,
        }}
        onClick={toggleDropDown}
        cursor="pointer"
      >
        <Box>
          <Icon fontSize="xl" mr="2">
            {icon}
          </Icon>

          <Text fontSize="sm" as="span">
            {text}
          </Text>
        </Box>
        {isOpen ? (
          <Icon fontSize="xl" mr="2">
            <FaAngleDown />
          </Icon>
        ) : (
          <Icon fontSize="xl" mr="2">
            <FaAngleRight />
          </Icon>
        )}
      </Flex>
      {isOpen &&
        more.map((moreLinks, i) => (
          <Link href={`${moreLinks.link}`} key={i} passHref>
            <Flex
              alignItems="center"
              style={{ padding: '15px 20px' }}
              _hover={{
                bg: 'pink.500',
                color: 'white',
              }}
              bg={router.asPath === moreLinks.link ? 'pink.500' : 'white'}
              color={router.asPath === moreLinks.link ? 'white' : 'black'}
              onClick={onClose}
            >
              <Icon fontSize="xl" mr="2">
                {moreLinks.icon}
              </Icon>

              <Text fontSize="sm" as="span">
                {moreLinks.text}
              </Text>
            </Flex>
          </Link>
        ))}
    </>
  );
};

export default SidebarMenu;
